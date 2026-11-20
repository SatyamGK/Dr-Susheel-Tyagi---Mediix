(()=>{var e={};e.id=158,e.ids=[158],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1908:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>m,tree:()=>d}),a(9305),a(2204),a(2649),a(996);var i=a(170),s=a(5002),r=a(3876),o=a.n(r),n=a(6299),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let d=["",{children:["testimonials",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9305)),"D:\\Dr Susheel Tyagi - Mediix\\app\\testimonials\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,4697))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,2204)),"D:\\Dr Susheel Tyagi - Mediix\\app\\layout.tsx"],template:[()=>Promise.resolve().then(a.bind(a,2649)),"D:\\Dr Susheel Tyagi - Mediix\\app\\template.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,4697))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\Dr Susheel Tyagi - Mediix\\app\\testimonials\\page.tsx"],c="/testimonials/page",u={require:a,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/testimonials/page",pathname:"/testimonials",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6205:(e,t,a)=>{Promise.resolve().then(a.bind(a,6098))},6098:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var i=a(7247),s=a(8964);let r=[{id:"1",quote:"I consulted Dr. Tyagi for persistent fatigue and fluctuating sugar levels. His structured approach, clear prescription notes, and practical lifestyle advice made a noticeable difference within weeks.",author:"Anil Kumar Gupta",meta:"Adult Internal Medicine \xb7 Vasundhara, Ghaziabad"},{id:"2",quote:"Dr. Tyagi patiently reviewed six years of my blood sugar logs and adjusted my medication without rushing. Within three months my HbA1c dropped from 8.9% to 6.8%, and I finally understand my daily targets.",author:"Rajesh Sharma",meta:"Diabetes & Blood Sugar Care \xb7 Indirapuram, Ghaziabad"},{id:"3",quote:"Calm, attentive, and thorough consultation at Mediix Clinic. Every test and treatment step was explained clearly with practical guidance for long-term care.",author:"Sunita Verma",meta:"Internal Medicine & Metabolic Care \xb7 Vaishali, Ghaziabad"}];function o(){let[e,t]=(0,s.useState)(0),a=r[e];return(0,i.jsxs)("main",{className:"ts-home-page",children:[i.jsx("style",{children:`
        .ts-home-page {
          position: relative;
          min-height: 86vh;
          background-color: #0b1e26;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          overflow: hidden;
          font-family: inherit;
        }
        .ts-bg-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.42;
          pointer-events: none;
        }
        .ts-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 25, 33, 0.52);
          pointer-events: none;
        }
        .ts-card-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ts-card {
          width: 100%;
          background-color: rgba(7, 25, 33, 0.92);
          border: 1px solid rgba(52, 211, 153, 0.16);
          border-radius: 14px;
          padding: 34px 40px 30px;
          text-align: center;
          box-shadow: 0 20px 44px rgba(0, 0, 0, 0.35);
        }
        .ts-stars {
          color: #f59e0b;
          font-size: 0.95rem;
          letter-spacing: 3px;
          margin-bottom: 14px;
        }
        .ts-quote {
          margin: 0;
          font-size: 1.02rem;
          line-height: 1.65;
          color: #f1f5f9;
          font-weight: 400;
        }
        .ts-author {
          margin: 18px 0 0;
          font-size: 0.96rem;
          font-weight: 700;
          color: #2dd4a7;
        }
        .ts-meta {
          margin: 4px 0 0;
          font-size: 0.82rem;
          color: #94a3b8;
        }
        .ts-dots {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .ts-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: none;
          padding: 0;
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.32);
          transition: all 0.2s ease;
        }
        .ts-dot.active {
          width: 20px;
          background-color: #2dd4a7;
        }
        @media (max-width: 640px) {
          .ts-card {
            padding: 26px 22px;
          }
          .ts-quote {
            font-size: 0.96rem;
          }
        }
      `}),i.jsx("img",{src:"/images/testimonials-hero.jpg",alt:"Clinical stethoscope examination",className:"ts-bg-photo"}),i.jsx("div",{"aria-hidden":"true",className:"ts-bg-overlay"}),(0,i.jsxs)("div",{className:"ts-card-wrap",children:[(0,i.jsxs)("article",{className:"ts-card","aria-live":"polite",children:[i.jsx("div",{className:"ts-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,i.jsxs)("blockquote",{className:"ts-quote",children:["“",a.quote,"”"]}),i.jsx("p",{className:"ts-author",children:a.author}),i.jsx("p",{className:"ts-meta",children:a.meta})]}),i.jsx("div",{className:"ts-dots",role:"tablist","aria-label":"Select testimonial",children:r.map((a,s)=>i.jsx("button",{type:"button",role:"tab","aria-selected":s===e,"aria-label":`View testimonial ${s+1}`,onClick:()=>t(s),className:`ts-dot ${s===e?"active":""}`},a.id))})]})]})}},9305:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});let i=(0,a(5347).createProxy)(String.raw`D:\Dr Susheel Tyagi - Mediix\app\testimonials\page.tsx#default`)},4697:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var i=a(4564);let s=e=>[{type:"image/svg+xml",sizes:"any",url:(0,i.fillMetadataSegment)(".",e.params,"icon.svg")+"?a7cc5a38be23a51e"}]}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[379,638,564,8],()=>a(1908));module.exports=i})();