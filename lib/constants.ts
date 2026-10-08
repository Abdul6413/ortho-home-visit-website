import type { ImageKey } from "./images";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string;
  image: ImageKey;
  short: string;
  intro: string;
  covers: string[];
  consult: string[];
  seoTitle: string;
  seoDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "orthopedic-home-visit",
    image: "teamArriving",
    title: "Orthopedic Home Visit",
    icon: "home",
    short: "A consultation at home for patients who find travelling difficult or prefer a familiar setting.",
    intro:
      "An orthopedic home visit brings the consultation to you in Delhi NCR. It can help patients who find travelling painful or tiring, and families who prefer a calm, familiar setting to talk through bone, joint and muscle concerns.",
    covers: [
      "A conversation about your symptoms, daily activities and medical history",
      "A physical examination of the joints, spine and movement",
      "A review of X-rays, MRI scans or reports you already have",
      "Guidance on next steps, including whether tests or an in-person hospital visit are advisable",
      "Practical advice on moving and caring for yourself at home",
    ],
    consult: [
      "Pain or stiffness that makes leaving home difficult",
      "A review visit the doctor has advised after an earlier consultation",
      "An elderly family member with limited mobility",
      "You want to discuss existing reports in a relaxed setting",
    ],
    seoTitle: "Orthopedic Doctor Home Visit in Delhi NCR",
    seoDescription:
      "Request an orthopedic home visit in Delhi NCR. Consultation at home for joint, knee, back pain and mobility concerns. Book by phone, WhatsApp or online.",
  },
  {
    slug: "joint-pain-treatment",
    image: "xrayConsultation",
    title: "Joint Pain Treatment",
    icon: "bone",
    short: "Assessment of pain, swelling or stiffness in the hips, knees, shoulders, hands and other joints.",
    intro:
      "Joint pain has many possible causes, from overuse and injury to arthritis. A careful assessment helps identify what is likely behind your symptoms and which treatment options are worth discussing.",
    covers: [
      "History of when the pain started and what makes it better or worse",
      "Examination of the affected joint, including range of movement",
      "Review of previous investigations and current medicines",
      "Discussion of treatment options and any further tests that may help",
    ],
    consult: [
      "Pain, swelling or stiffness that lasts more than a few days",
      "Difficulty with walking, climbing stairs or using your hands",
      "Pain at night or when resting",
      "A joint that feels unstable or locks",
    ],
    seoTitle: "Joint Pain Doctor in Delhi NCR — Consultation at Home",
    seoDescription:
      "Joint pain assessment at home in Delhi NCR. Discuss causes, examination and treatment options with an orthopedic doctor. Request a home visit.",
  },
  {
    slug: "back-pain-treatment",
    image: "followup",
    title: "Back Pain Treatment",
    icon: "activity",
    short: "Assessment of lower, middle and upper back pain, including pain that spreads to the legs.",
    intro:
      "Most back pain is related to muscles and posture, but some patterns need closer attention. An orthopedic assessment helps separate everyday strain from problems that need further investigation.",
    covers: [
      "Review of how the pain began, its pattern and daily impact",
      "Examination of posture, spine movement and nerve function",
      "Discussion of scans or tests when they are appropriate",
      "Guidance on activity, posture and treatment options",
    ],
    consult: [
      "Back pain that does not settle with rest",
      "Pain, tingling or numbness spreading to the legs",
      "Pain after a fall or lifting injury",
      "Stiffness that affects sitting, standing or sleeping",
    ],
    seoTitle: "Back Pain Doctor in Delhi NCR — Home Consultation",
    seoDescription:
      "Back pain consultation at home in Delhi NCR. Orthopedic assessment of spine and nerve-related symptoms. Request a home visit by phone or WhatsApp.",
  },
  {
    slug: "knee-pain-treatment",
    image: "homeTreatment",
    title: "Knee Pain Treatment",
    icon: "footprints",
    short: "Assessment of knee pain, swelling, stiffness and difficulty with stairs or walking.",
    intro:
      "Knee pain is common and can follow an injury, develop with age or come from arthritis. A focused examination and review of your history helps the doctor explain what is likely going on and what you can do next.",
    covers: [
      "Examination of the knee for swelling, alignment, stability and movement",
      "Review of X-rays or MRI reports you already have",
      "Discussion of treatment options suited to your age, activity level and health",
      "Advice on everyday activities, footwear and mobility",
    ],
    consult: [
      "Knee pain when walking, climbing stairs or standing up",
      "Swelling or a feeling that the knee gives way",
      "Pain after a twist, fall or sports injury",
      "Stiffness in the morning or after sitting",
    ],
    seoTitle: "Knee Pain Doctor in Delhi NCR — Consultation at Home",
    seoDescription:
      "Knee pain assessment at home in Delhi NCR. Orthopedic examination, report review and discussion of treatment options. Book a home visit.",
  },
  {
    slug: "arthritis-treatment",
    image: "ankleXray",
    title: "Arthritis Treatment",
    icon: "clipboard",
    short: "Assessment and ongoing guidance for osteoarthritis and other types of joint inflammation.",
    intro:
      "Arthritis can affect movement, sleep and independence. A consultation helps you understand the type of arthritis you may have, how it affects you and which treatment options are available.",
    covers: [
      "Discussion of symptoms, family history and current medicines",
      "Examination of the affected joints",
      "Review of blood tests and imaging you already have",
      "Planning follow-up, and referral when another specialist may help",
    ],
    consult: [
      "Joint pain with swelling or morning stiffness",
      "Reduced grip strength or difficulty with daily tasks",
      "Pain that is gradually getting worse",
      "You want guidance on managing a long-term condition",
    ],
    seoTitle: "Arthritis Doctor in Delhi NCR — Orthopedic Home Consultation",
    seoDescription:
      "Arthritis consultation at home in Delhi NCR. Understand your symptoms and treatment options with an orthopedic doctor. Request a home visit.",
  },
  {
    slug: "sports-injury-treatment",
    image: "walkingBoot",
    title: "Sports Injury Treatment",
    icon: "dumbbell",
    short: "Assessment of sprains, strains, ligament and tendon problems from sport or exercise.",
    intro:
      "Whether you play regularly or exercise to stay fit, injuries can happen. An early assessment helps clarify the nature of the injury and how to approach recovery safely.",
    covers: [
      "How the injury happened and what you can and cannot do now",
      "Examination of the joint, muscle or tendon",
      "Advice on rest, rehabilitation and a safe return to activity",
      "Guidance on when imaging or further specialist review is advisable",
    ],
    consult: [
      "Pain or swelling after a sprain or twist",
      "A strain that is not improving",
      "Recurring pain with exercise",
      "Questions about returning to sport after an injury",
    ],
    seoTitle: "Sports Injury Doctor in Delhi NCR — Orthopedic Consultation",
    seoDescription:
      "Sports injury assessment at home in Delhi NCR. Orthopedic consultation for sprains, strains and joint injuries. Request a home visit.",
  },
  {
    slug: "fracture-care",
    image: "fibreCast",
    title: "Fracture Care & Follow-up",
    icon: "bone",
    short: "Follow-up consultations during recovery after a fracture, as advised by your treating doctor.",
    intro:
      "A new or suspected fracture needs urgent hospital care. Home consultations are best suited to follow-up: reviewing how recovery is progressing, discussing reports and planning what comes next.",
    covers: [
      "Review of your recovery, pain and movement",
      "Discussion of X-rays and reports from your treating hospital",
      "Guidance on activity and mobility during recovery",
      "Advice on when to return to the hospital for further review",
    ],
    consult: [
      "You are recovering from a fracture and find travel difficult",
      "You would like a follow-up discussion of reports",
      "You are unsure about activity or mobility during recovery",
    ],
    seoTitle: "Fracture Follow-up Care at Home in Delhi NCR",
    seoDescription:
      "Orthopedic follow-up consultation at home in Delhi NCR for patients recovering from fractures. Review progress and reports. Request a home visit.",
  },
  {
    slug: "elderly-orthopedic-care",
    image: "familyWelcome",
    title: "Elderly Orthopedic Care",
    icon: "users",
    short: "Considerate orthopedic consultation at home for older adults with pain or limited mobility.",
    intro:
      "For many older adults, a trip to a clinic is tiring or stressful. A home consultation allows joint, bone and mobility concerns to be discussed in comfortable surroundings, with family members present.",
    covers: [
      "Assessment of joint pain, stiffness and difficulty walking",
      "Discussion about falls, balance and safety at home",
      "Review of current medicines and previous reports",
      "Guidance for family members and caregivers",
    ],
    consult: [
      "Pain that limits walking or getting out of bed or a chair",
      "Recent falls or fear of falling",
      "Long-standing joint problems that need review",
      "Family members who want advice on caring at home",
    ],
    seoTitle: "Elderly Orthopedic Care at Home in Delhi NCR",
    seoDescription:
      "Orthopedic consultation at home for elderly patients in Delhi NCR. Joint pain, mobility and falls concerns discussed in a comfortable setting.",
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const PROCESS = [
  { icon: "phone", title: "Contact Us", text: "Call, message on WhatsApp or fill in the online request form." },
  { icon: "clipboard", title: "Share Your Requirement", text: "Tell us about your problem, your location and any reports you have." },
  { icon: "calendar", title: "Schedule Home Visit", text: "We confirm a date and time that works for you, subject to availability." },
  { icon: "stethoscope", title: "Receive Medical Consultation", text: "The doctor assesses you at home and explains the next steps." },
];

export const WHY_CHOOSE = [
  { icon: "home", title: "Convenient home consultation", text: "No travel, no waiting rooms — helpful when moving is painful." },
  { icon: "heart", title: "Patient-focused approach", text: "Unhurried conversations in which your questions come first." },
  { icon: "bone", title: "Orthopedic-focused care", text: "Attention on bones, joints, muscles and mobility." },
  { icon: "calendar", title: "Easy appointment booking", text: "Request a visit by phone, WhatsApp or the online form." },
  { icon: "map", title: "Delhi NCR coverage", text: "Visits across selected areas of Delhi, Noida, Ghaziabad, Gurugram and Faridabad." },
  { icon: "phone", title: "Direct communication", text: "Speak to the clinic directly to confirm details before the visit." },
];

export const AREA_DETAILS: Record<string, string> = {
  Delhi:
    "Patients across Delhi can request an orthopedic home visit. Share your locality when you contact us so we can confirm timing.",
  Noida:
    "For patients in Noida who would rather avoid travelling through traffic, home consultation can be requested by sector or society.",
  "Greater Noida":
    "Residents of Greater Noida and nearby societies can enquire about home consultation and available time slots.",
  Ghaziabad:
    "Families in Ghaziabad can request a home visit for joint pain, back pain, arthritis and follow-up care.",
  Gurugram:
    "Patients in Gurugram (Gurgaon) can ask about orthopedic home consultation and the best time for a visit.",
  Faridabad:
    "Home consultation for patients in Faridabad can be arranged subject to location and the doctor's schedule.",
};

export const FAQS = [
  {
    q: "What is an orthopedic home visit?",
    a: "It is a consultation with an orthopedic doctor at your home instead of at a clinic or hospital. The doctor listens to your concerns, examines you, reviews any reports you have and explains the next steps.",
  },
  {
    q: "Which areas of Delhi NCR are covered?",
    a: "We offer visits across parts of Delhi, Noida, Greater Noida, Ghaziabad, Gurugram and Faridabad. Availability depends on your exact location and the doctor's schedule, so please confirm by phone or WhatsApp.",
  },
  {
    q: "How can I book a home visit?",
    a: "Use the Book Home Visit form, call us or message on WhatsApp. Tell us your area, the problem and your preferred date and time, and we will confirm the appointment.",
  },
  {
    q: "What orthopedic problems can be assessed at home?",
    a: "Many concerns can be discussed and examined at home, such as joint, knee and back pain, arthritis, sports injuries and follow-up after fractures. The doctor will tell you if you need tests or an in-person hospital visit.",
  },
  {
    q: "Can elderly patients request a home consultation?",
    a: "Yes. Home consultation can be especially helpful for older adults who find travelling difficult. Family members are welcome to be present.",
  },
  {
    q: "Is a home visit suitable for emergencies?",
    a: "No. Severe injuries, suspected new fractures, heavy bleeding, chest pain, or loss of movement or feeling need urgent care. Go to the nearest hospital emergency department or call 112.",
  },
  {
    q: "How can I contact the doctor?",
    a: "You can call, message on WhatsApp or use the online request form. Contact details are on the Contact page.",
  },
  {
    q: "How much does a home visit cost?",
    a: "Fees depend on the location and the type of consultation. Please ask when you contact us and the charges will be shared before the visit is confirmed.",
  },
];

export const TIME_SLOTS = ["Morning (9 am – 12 pm)", "Afternoon (12 pm – 4 pm)", "Evening (4 pm – 8 pm)", "Flexible"];

export const MEDICAL_DISCLAIMER =
  "The information on this website is for general awareness and does not replace professional medical advice, diagnosis or treatment. Always consult a qualified doctor about your health. In an emergency, go to the nearest hospital or call 112.";

export const LAST_UPDATED = "6 October 2026";
