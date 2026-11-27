// Central source for verified profile details, consultation information and site navigation.

export type Publication = {
  type: "Articles" | "Talks" | "Studies";
  t: string;
  m: string;
};

export const site = {
  name: "Dr. Susheel Tyagi",
  role: "Consultant Physician · Internal Medicine & Diabetes Care",
  tagline: "MD in Internal Medicine and researcher providing diabetes care and adult medical consultations in Indirapuram, Ghaziabad.",

  phone: "+91 9625878756",
  whatsapp: "+91 9625878756",
  email: "",
  address: "Plot No.-14/3, Near SwarnJayanti Park, Niti Khand-2, Indirapuram, Ghaziabad-201014, Uttar Pradesh, India",
  hours: "Mon–Sat:-  12:30 PM–3:00 PM & 5:30 PM–7:00 PM   Sunday:-  12:00 PM–2:00 PM",
  map: "https://maps.google.com/?q=Indirapuram+Ghaziabad",
  chips: ["Thousands of patients cared for", "FACP (USA)", "16+ years of clinical experience"],
  slots: ["Afternoon", "Evening"],
  conditions: [
    { icon: "stethoscope", t: "Internal Medicine", d: "Adult medical consultation for common health concerns and complex medical conditions.", detail: "Internal Medicine focuses on the prevention, diagnosis and non-surgical management of health conditions in adults. It often involves understanding how symptoms, medical history, medicines and different health conditions may relate to one another." },
    { icon: "activity", t: "Type 1 Diabetes", d: "Individualised support for insulin use, glucose monitoring and day-to-day diabetes management.", detail: "Type 1 diabetes is a condition in which the body produces little or no insulin because the insulin-producing cells in the pancreas are affected. Ongoing care commonly involves clinician-guided insulin management, glucose monitoring, education and regular review of health needs." },
    { icon: "activity", t: "Type 2 Diabetes", d: "Assessment and ongoing care focused on blood-glucose management and reducing future health risks.", detail: "Type 2 diabetes is a long-term metabolic condition in which the body does not use insulin effectively and blood glucose can become elevated. Care is individualised and may include assessment of health risks, monitoring, lifestyle support and clinician-directed treatment." },
    { icon: "heart", t: "Hypertension", d: "Evaluation and follow-up for high blood pressure and associated cardiovascular risk factors.", detail: "Hypertension means blood pressure remains higher than the recommended range over time. It often has no obvious symptoms, so appropriate measurement, assessment of associated risks and ongoing follow-up are important parts of care." },
    { icon: "activity", t: "Obesity", d: "Medical guidance for weight-related health concerns and sustainable lifestyle changes.", detail: "Obesity is a complex, chronic health condition involving excess body fat that may affect health. A medical assessment can consider weight history, related conditions, medicines, lifestyle and individual circumstances when discussing appropriate management options." },
    { icon: "shield", t: "Metabolic Health", d: "A joined-up approach to metabolic risk factors, prevention and long-term wellbeing.", detail: "Metabolic health describes how the body manages processes such as blood glucose, blood pressure, blood lipids and body weight. Reviewing these factors together can help identify health risks and support informed conversations about prevention and follow-up." },
  ],
  steps: [
    { icon: "calendar", t: "1. Request a visit", d: "Book online or message the clinic on WhatsApp." },
    { icon: "user", t: "2. Share your history", d: "Bring past reports, current medicines and any glucose readings." },
    { icon: "stethoscope", t: "3. Consultation", d: "Review, examination and tests, as advised by the doctor." },
    { icon: "check", t: "4. Plan & follow-up", d: "A clear plan with a follow-up schedule you can keep to." },
  ],
  includes: [],
  glance: [
    { icon: "stethoscope", t: "Clinical focus", d: "Internal medicine and diabetes care" },
    { icon: "pin", t: "Practice", d: "Mediix Clinic, Indirapuram, Ghaziabad" },
    { icon: "clock", t: "Experience", d: "Over 16 years of clinical experience" },
  ],
  philosophy: [
    { icon: "user", t: "Listen first", d: "Your story, routine and worries shape the plan." },
    { icon: "book", t: "Explain clearly", d: "Plain-language explanations so you understand every step." },
    { icon: "check", t: "Plan together", d: "Realistic goals agreed with you, reviewed at every visit." },
  ],
  ethics: ["Consultations are guided by each patient's individual history and clinical needs.", "Patients should bring relevant reports and current medication details.", "Treatment decisions should be discussed directly with the treating clinician."],
  milestones: [
    { icon: "grad", y: "Medical degree", t: "MBBS and MD (Internal Medicine)", d: "Medical education including MD from King George's Medical University (KGMU)." },
    { icon: "stethoscope", y: "Specialist training", t: "Postgraduate Diploma", d: "PG Diploma, Royal College of Physicians, United Kingdom." },
    { icon: "award", y: "National & international fellowships", t: "Professional fellowships", d: "Fellow of the American College of Physicians (ACP), USA." },
    { icon: "pin", y: "Current clinical practice", t: "Mediix Clinic, Indirapuram", d: "Consultant physician serving patients in Indirapuram, Ghaziabad." },
  ],
  affiliations: [],
  interests: [],
  // publications: [],
  publications: [] as Publication[],
  testimonials: [],
  faqs: [
    { q: "Which health concerns can I discuss during a consultation?", a: "Consultation areas include type 1 and type 2 diabetes, hypertension, obesity, metabolic health and adult internal medicine. The doctor will advise whether your concern is within the scope of the clinic." },
    { q: "Where is Mediix Clinic located?", a: "Mediix Clinic is at 14/3, Niti Khand-2, Indirapuram, near Swarn Jayanti Park, Ghaziabad, Uttar Pradesh 201014." },
    { q: "What should I bring to my first appointment?", a: "Bring previous medical reports, a list of current medicines, relevant prescriptions and any home blood-glucose or blood-pressure readings." },
    { q: "How can I request an appointment?", a: "Use the Book Appointment option on this website, or contact the clinic by phone or WhatsApp to enquire about an appointment." },
    { q: "Can I discuss my home blood sugar or blood pressure readings?", a: "Yes. Bring any readings you have recorded at home, along with the dates and times if available, so the doctor can review them during your consultation." },
  ],
  reach: [],
  nav: [
    ["Home", "/"], ["Specialities", "/specialities"], ["Research & Vision", "/research-vision"], ["About", "/about"], ["Contact", "/contact"],
  ] as [string, string][],
};
