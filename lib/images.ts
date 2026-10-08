/**
 * Every photo on the site, with its true pixel size so the browser reserves the right space
 * (no layout shift) and no image is ever cropped. Files live in /public/images/gallery.
 * The pictures are illustrative (see ILLUSTRATIVE_NOTE) and are shown at their natural proportions.
 */
export type SiteImage = { src: string; width: number; height: number; alt: string; caption: string };

const d = "/images/gallery/";

export const IMAGES = {
  teamArriving: {
    src: `${d}orthopedic-home-visit-team-arriving-delhi-ncr.jpg`, width: 932, height: 700,
    alt: "Orthopedic doctor and nurse in scrubs arriving with a medical bag for a home visit in Delhi NCR",
    caption: "The doctor and nurse arrive at your door with the equipment needed for a home assessment.",
  },
  familyWelcome: {
    src: `${d}orthopedic-doctor-welcomed-at-home-delhi-ncr.jpg`, width: 1156, height: 696,
    alt: "Orthopedic doctor shaking hands with an elderly patient while his family welcomes the doctor at home",
    caption: "Families are welcome to be present during the consultation.",
  },
  homeTreatment: {
    src: `${d}orthopedic-doctor-examining-patient-at-home.jpg`, width: 936, height: 700,
    alt: "Orthopedic doctor examining a patient's bandaged foot on a sofa at home while a nurse takes notes",
    caption: "Examination in the comfort of your own living room.",
  },
  xrayConsultation: {
    src: `${d}orthopedic-doctor-reviewing-xray-with-patient.jpg`, width: 854, height: 600,
    alt: "Orthopedic doctor pointing to a leg X-ray on a tablet while explaining it to a patient at home",
    caption: "Your existing X-rays and reports are reviewed and explained clearly.",
  },
  plasterProcedure: {
    src: `${d}doctor-and-nurse-fracture-care-at-home.jpg`, width: 714, height: 600,
    alt: "Doctor and nurse wearing masks and gloves preparing dressing materials during care at home",
    caption: "Careful, hygienic care with a nurse assisting the doctor.",
  },
  fibreCast: {
    src: `${d}fibre-cast-fracture-support-closeup.jpg`, width: 734, height: 600,
    alt: "Close-up of a white fibre cast supporting a leg during fracture recovery",
    caption: "Support and follow-up during fracture recovery, as advised by your treating doctor.",
  },
  walkingBoot: {
    src: `${d}orthopedic-walking-boot-for-recovery.jpg`, width: 708, height: 600,
    alt: "Grey orthopedic walking boot with straps resting on a carpet in a living room",
    caption: "Guidance on supports such as walking boots during recovery.",
  },
  ankleXray: {
    src: `${d}ankle-xray-orthopedic-assessment.jpg`, width: 556, height: 652,
    alt: "Ankle and foot X-ray film with a finger pointing to the joint during orthopedic assessment",
    caption: "Joint and bone assessment, including review of your scans.",
  },
  followup: {
    src: `${d}orthopedic-follow-up-consultation-at-home.jpg`, width: 874, height: 708,
    alt: "Orthopedic doctor in a white coat talking with a patient who has a cast on his foot, at home",
    caption: "Unhurried follow-up conversations where your questions come first.",
  },
  equipment: {
    src: `${d}orthopedic-home-visit-medical-kit-preparation.jpg`, width: 604, height: 708,
    alt: "Nurse and doctor opening black medical kits with dressings and supplies before a home visit",
    caption: "A prepared medical kit travels with the team.",
  },
  vehicleReady: {
    src: `${d}orthopedic-doctor-home-visit-vehicle-delhi.jpg`, width: 706, height: 708,
    alt: "Doctor and nurse carrying medical bags towards a white van with its rear door open",
    caption: "Setting out for a home visit across Delhi NCR.",
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

/** Order used on the home page gallery (8 images) and the full gallery page (all). */
export const HOME_GALLERY: ImageKey[] = [
  "teamArriving", "homeTreatment", "xrayConsultation", "equipment",
  "followup", "plasterProcedure", "ankleXray", "walkingBoot",
];
export const FULL_GALLERY: ImageKey[] = [
  "teamArriving", "familyWelcome", "homeTreatment", "xrayConsultation", "equipment", "followup",
  "plasterProcedure", "fibreCast", "ankleXray", "walkingBoot", "vehicleReady",
];

export const ILLUSTRATIVE_NOTE = "Images are illustrative and show the kind of care and setting described on this site.";
