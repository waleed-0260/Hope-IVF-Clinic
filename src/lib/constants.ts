export const SITE = {
  name: "Hope IVF Clinic",
  doctor: "Dr. Ayesha Zaffar",
  title: "Reproductive Medicine Specialist",
  tagline: "Where Hope Meets Science",
  address: "Building 182, 1st Floor, CCA, Phase 6, DHA, Lahore",
  phone: "(068) 5884112",
  phoneHref: "tel:+92588584112",
  whatsapp: "https://wa.me/923005884112",
  whatsappDisplay: "+92 300 5884112",
  facebook: "https://www.facebook.com/DrAyeshaZaffar",
  email: "info@hopeivfclinic.com",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  hoursNote: "Sunday: By appointment only",
  mapEmbed:
    "https://www.google.com/maps?q=DHA+Phase+6+Lahore+Pakistan&output=embed",
  socialProof: {
    followers: "210K+",
    recommendation: "96%",
    pregnancies: "15,000+",
    years: "20+",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 15000, suffix: "+", label: "Successful Pregnancies" },
  { value: 210, suffix: "K+", label: "Community Members", display: "210K+" },
  { value: 96, suffix: "%", label: "Recommendation Rate" },
  { value: 20, suffix: "+", label: "Years of Experience" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "ivf",
    name: "IVF (In Vitro Fertilization)",
    short:
      "Our flagship treatment combining advanced embryology with personalized protocols for the highest success rates.",
    description:
      "In Vitro Fertilization is our flagship treatment, combining advanced embryology with carefully personalized protocols. From ovarian stimulation to embryo transfer, every step of your cycle is guided by Dr. Ayesha Zaffar and our dedicated lab team to give you the very best chance of success.",
  },
  {
    slug: "icsi",
    name: "ICSI (Intracytoplasmic Sperm Injection)",
    short:
      "A specialized technique for male factor infertility, injecting a single sperm directly into the egg.",
    description:
      "ICSI is a specialized micromanipulation technique designed for male factor infertility. A single, healthy sperm is selected and injected directly into an egg, dramatically improving fertilization rates for couples facing low sperm count, poor motility, or previous failed fertilization.",
  },
  {
    slug: "iui",
    name: "IUI (Intrauterine Insemination)",
    short:
      "A less invasive first-line treatment ideal for couples with unexplained infertility or mild male factor issues.",
    description:
      "Intrauterine Insemination is a gentle, less invasive first-line treatment. Washed and concentrated sperm is placed directly into the uterus at the time of ovulation — an excellent starting point for couples with unexplained infertility or mild male factor issues.",
  },
  {
    slug: "fertility-workup",
    name: "Fertility Assessment & Workup",
    short:
      "Comprehensive diagnostic testing for both partners including hormonal panels, ultrasound, and semen analysis.",
    description:
      "A thorough, evidence-based evaluation for both partners is the foundation of every successful journey. Our workup includes hormonal panels, pelvic ultrasound, semen analysis, and HSG — all coordinated in one comfortable visit, with results explained clearly by Dr. Zaffar.",
  },
  {
    slug: "egg-freezing",
    name: "Egg Freezing & Fertility Preservation",
    short:
      "Preserve your fertility for the future with our advanced vitrification technology.",
    description:
      "Our advanced vitrification technology freezes eggs and embryos with exceptional survival rates. Whether you are planning your career first, undergoing medical treatment, or preparing for personal circumstances, we help you preserve your fertility for the future.",
  },
  {
    slug: "recurrent-miscarriage",
    name: "Recurrent Miscarriage Management",
    short:
      "Specialized protocols for couples experiencing repeated pregnancy losses, including immunological and genetic testing.",
    description:
      "For couples facing repeated pregnancy losses, we offer specialized and compassionate care. Our protocols include immunological, thrombophilia, and genetic testing, alongside close monitoring and individualized management to help you carry a healthy pregnancy to term.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Pakistan's Largest Fertility Community",
    body: "Over 210,000 followers trust Dr. Ayesha Zaffar and Hope IVF for honest guidance and family-focused care. We are the most-followed fertility clinic in the country — and we treat every family like our own.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    alt: "A close-knit group joining hands together in a circle",
  },
  {
    title: "State-of-the-Art Laboratory",
    body: "Our world-class embryology laboratory and advanced equipment deliver precision at every stage — from controlled stimulation to embryo culture — while maintaining the highest international standards of quality and safety.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    alt: "Scientist working carefully in a modern laboratory",
  },
  {
    title: "Compassionate, Personalized Care",
    body: "There is no one-size-fits-all when it comes to your family. Every patient receives an individualized treatment plan built around their history, values, and dreams — supported with warmth at every step of the emotional journey.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    alt: "Doctor shaking hands warmly with a patient during a consultation",
  },
];

export type Testimonial = {
  id: number;
  quote: string;
  couple: string;
  city: string;
  triedFor?: string;
  treatment?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "After seven years of trying, we had almost lost hope. Dr. Ayesha Zaffar gave us our miracle. Our twin boys are proof that hope, science, and patience really do work.",
    couple: "Ayesha & Omar",
    city: "Lahore",
    triedFor: "7 years",
    treatment: "IVF",
  },
  {
    id: 2,
    quote:
      "From the very first consultation, we felt heard and understood. The team held our hands through every scan, every injection, every milestone. Today we finally have our baby girl.",
    couple: "Fatima & Bilal",
    city: "Karachi",
    triedFor: "4 years",
    treatment: "ICSI",
  },
  {
    id: 3,
    quote:
      "What stood out was the honesty. No false promises, just clear science and genuine compassion. Within our second cycle, we were expecting our son. We cannot thank the clinic enough.",
    couple: "Zainab & Hassan",
    city: "Islamabad",
    triedFor: "3 years",
    treatment: "IVF",
  },
  {
    id: 4,
    quote:
      "We traveled all the way from Faisalabad for our treatment and it was worth every mile. The clinic feels like a second home — warm, modern, and full of hope.",
    couple: "Sana & Ahmed",
    city: "Faisalabad",
    triedFor: "5 years",
    treatment: "IUI",
  },
  {
    id: 5,
    quote:
      "After two heartbreaking losses, the recurrent miscarriage program gave us answers no one else had. Dr. Zaffar's care carried us through, and our healthy baby boy is here with us today.",
    couple: "Maryam & Usman",
    city: "Multan",
    triedFor: "6 years",
    treatment: "Recurrent Miscarriage",
  },
  {
    id: 6,
    quote:
      "The personalized plan, the gentle staff, and the world-class lab — everything about Hope IVF felt premium yet intimate. We conceived on our very first IVF cycle. Alhamdulillah.",
    couple: "Hira & Danish",
    city: "Lahore",
    triedFor: "2 years",
    treatment: "IVF",
  },
  {
    id: 7,
    quote:
      "As a couple living abroad, the virtual consultations made everything so easy. When we finally flew in for the transfer, everything was perfectly planned. We're now parents of beautiful twins.",
    couple: "Rabia & Fahad",
    city: "Peshawar (UK-based)",
    triedFor: "4 years",
    treatment: "IVF",
  },
  {
    id: 8,
    quote:
      "I remember sitting in the waiting room, scared and uncertain. Dr. Zaffar's calm confidence changed everything. Every nurse knew our name. Our daughter just turned one.",
    couple: "Nadia & Imran",
    city: "Karachi",
    triedFor: "3 years",
    treatment: "ICSI",
  },
];

export const FAQS = [
  {
    question: "What is IVF and how does it work?",
    answer:
      "In Vitro Fertilization (IVF) is a procedure where eggs are retrieved from the ovaries, fertilized with sperm in our laboratory, and the resulting embryos are transferred back into the uterus. It involves controlled ovarian stimulation, careful monitoring, and precise laboratory work — all guided by your personalized treatment plan.",
  },
  {
    question: "How much does IVF cost in Pakistan?",
    answer:
      "IVF costs in Pakistan vary based on your individual protocol, medication, and laboratory requirements. During your initial consultation, Dr. Zaffar will provide a clear, transparent breakdown of expected costs with no hidden charges. We are committed to making quality fertility care as accessible as possible.",
  },
  {
    question: "What is the success rate at Hope IVF?",
    answer:
      "Success rates depend on many factors including age, diagnosis, and history. We maintain a recommendation rate of 96% and have welcomed over 15,000 successful pregnancies. After your workup, we will give you honest, evidence-based expectations tailored to your unique case.",
  },
  {
    question: "How long does the IVF process take?",
    answer:
      "A complete IVF cycle typically takes about 4 to 6 weeks from the start of stimulation to the pregnancy test. This timeline can vary slightly based on your protocol and response to medication. Our team keeps you informed at every single step.",
  },
  {
    question: "Is IVF painful?",
    answer:
      "Most patients describe IVF as uncomfortable rather than painful. Stimulation injections are small and routine, while egg retrieval is performed under light sedation. Any mild discomfort is short-lived and fully supported by our team.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We understand fertility treatment is both an emotional and financial investment. We offer flexible packages and structured payment plans so you can focus on your journey rather than your finances. Please ask our front desk for current options.",
  },
  {
    question: "Can I do a virtual consultation first?",
    answer:
      "Absolutely. We offer confidential virtual consultations for local and international patients. You can discuss your history, ask questions, and receive initial guidance from the comfort of your home before visiting the clinic in Lahore.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid CNIC or passport, any previous medical reports, prescriptions, and a summary of any past treatments. If possible, both partners should attend. Our team will guide you through a calm, thorough first consultation.",
  },
];

export type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

export const TREATMENT_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "A private, detailed discussion of your history and goals.",
  },
  {
    step: "02",
    title: "Diagnostic Testing",
    description: "Complete fertility workup for both partners.",
  },
  {
    step: "03",
    title: "Treatment Plan",
    description: "A personalized, transparent protocol built just for you.",
  },
  {
    step: "04",
    title: "Stimulation & Monitoring",
    description: "Gentle medication with regular ultrasound tracking.",
  },
  {
    step: "05",
    title: "Egg Retrieval & Fertilization",
    description: "Precision lab work in our state-of-the-art embryology lab.",
  },
  {
    step: "06",
    title: "Embryo Transfer",
    description: "A comfortable, ultrasound-guided transfer procedure.",
  },
  {
    step: "07",
    title: "Pregnancy Test",
    description: "An emotional, hopeful day — we are with you either way.",
  },
];

export const AFFILIATIONS = [
  "Pakistan Medical Association",
  "ASPIRE",
  "ESHRE",
  "College of Physicians & Surgeons Pakistan",
  "Fertility Society of Pakistan",
  "International Society for Fertility",
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: "understanding-ivf-journey",
    category: "IVF Basics",
    title: "Understanding Your IVF Journey: A Complete Guide",
    excerpt:
      "From your first consultation to embryo transfer, here is exactly what an IVF cycle looks like, step by step, with honest answers to the questions every couple asks.",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80",
    featured: true,
  },
  {
    slug: "male-fertility",
    category: "Male Fertility",
    title: "Male Fertility: What Every Couple Should Know",
    excerpt:
      "Male factor issues affect nearly half of all couples facing infertility. Learn what the numbers mean and how modern treatments can help.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
  },
  {
    slug: "nutrition-lifestyle",
    category: "Nutrition",
    title: "Nutrition & Lifestyle Tips for Fertility",
    excerpt:
      "Simple, science-backed changes to your diet and daily habits that can support healthier eggs, sperm, and pregnancy outcomes.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80",
  },
  {
    slug: "emotional-side",
    category: "Emotional Wellness",
    title: "Managing the Emotional Side of Fertility Treatment",
    excerpt:
      "Fertility treatment is as emotional as it is medical. Practical strategies to protect your relationship and your peace of mind along the way.",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  },
  {
    slug: "pcos-options",
    category: "PCOS",
    title: "PCOS and Fertility: Your Options Explained",
    excerpt:
      "One in ten women has PCOS, yet it remains widely misunderstood. Here is what it means for your fertility and the treatments that work.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
  },
  {
    slug: "when-to-see-specialist",
    category: "Fertility Basics",
    title: "When Should You See a Fertility Specialist?",
    excerpt:
      "The timing myths, the signs to watch for, and why waiting too long can quietly change your options. Know the right moment to seek help.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80",
  },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&q=80",
  doctorPortrait:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=80",
  clinicInterior:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
  clinicLounge:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  laboratory:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  motherBaby:
    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80",
  familyJoy:
    "https://images.unsplash.com/photo-1556484687-30636164638b?w=1200&q=80",
  babyFeet:
    "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=1200&q=80",
  newborn:
    "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80",
  coupleSunset:
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
  doctorConsult:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
};