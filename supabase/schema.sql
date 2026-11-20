-- Run this entire file in Supabase Dashboard -> SQL Editor -> New query.
-- The service-role key is used only by the server-side Next.js API. Never expose it to the browser.

create table if not exists public.appointment_requests (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  email text,
  age text,
  preferred_date date not null,
  preferred_time text,
  service text,
  preferred_location text,
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.appointment_requests enable row level security;
-- Intentionally add no anon/authenticated policies. Only the server's service role can write/read.

create table if not exists public.appointment_rate_limit_events (
  id bigint generated always as identity primary key,
  key_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists appointment_rate_limit_events_key_created_idx
  on public.appointment_rate_limit_events (key_hash, created_at desc);

alter table public.appointment_rate_limit_events enable row level security;

grant usage on schema public to service_role;
grant select, insert on public.appointment_requests to service_role;
grant select, insert, delete on public.appointment_rate_limit_events to service_role;
grant usage, select on all sequences in schema public to service_role;

create or replace function public.consume_rate_limit(
  p_key_hash text,
  p_limit integer,
  p_window_seconds integer
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
  v_now timestamptz := now();
begin
  if p_key_hash is null or p_limit < 1 or p_window_seconds < 1 then
    raise exception 'Invalid rate limit arguments';
  end if;

  -- Serialize requests sharing this key so concurrent submissions cannot bypass the limit.
  perform pg_advisory_xact_lock(hashtextextended(p_key_hash, 0));

  select count(*)::integer
    into v_count
    from public.appointment_rate_limit_events
   where key_hash = p_key_hash
     and created_at > v_now - make_interval(secs => p_window_seconds);

  if v_count >= p_limit then
    return false;
  end if;

  insert into public.appointment_rate_limit_events (key_hash, created_at)
  values (p_key_hash, v_now);

  -- Opportunistic cleanup of expired rate-limit records.
  if random() < 0.02 then
    delete from public.appointment_rate_limit_events
     where created_at < v_now - interval '1 day';
  end if;

  return true;
end;
$$;

revoke all on function public.consume_rate_limit(text, integer, integer) from public;
revoke all on function public.consume_rate_limit(text, integer, integer) from anon, authenticated;
grant execute on function public.consume_rate_limit(text, integer, integer) to service_role;
