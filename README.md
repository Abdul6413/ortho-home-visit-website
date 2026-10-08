# Dr. Mohammad Zubair — Orthopedic Home Visit website (Next.js)

Phone / WhatsApp: +91 94569 38356 · Email: mozubair1989@gmail.com (already set as defaults in `lib/site-config.ts`).

## Run it on your computer
1. Install **Node.js LTS** (https://nodejs.org).
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000. Edits show instantly.
4. To test the real production version: `npm run build` then `npm start`.

## Put it online (free): Vercel
1. Create a GitHub account, make a new repository, upload this folder (do not upload `node_modules` or `.env.local`).
2. At https://vercel.com sign in with GitHub, **Add New → Project**, pick the repository, **Deploy**.
3. In Vercel → Project → Settings → Environment Variables, add the values from `.env.example` (at least `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `APPOINTMENT_WEBHOOK_URL`), then **Redeploy**.
4. Add your domain under Settings → Domains.

## Google Analytics
1. https://analytics.google.com → Admin → Create property → Web data stream → copy the **Measurement ID** (`G-XXXXXXXXXX`).
2. Put it in `.env.local` (and in Vercel) as `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
3. Analytics loads only after a visitor accepts the cookie banner (privacy-friendly). Call, WhatsApp and booking clicks are tracked as events.

## Make the booking form work (required before going live)
1. Create a new Google Sheet. **Extensions → Apps Script**, paste in `docs/google-apps-script.gs`, Save.
2. **Deploy → New deployment → Web app**, Execute as **Me**, Who has access **Anyone**, Deploy, approve permissions.
3. Copy the web-app URL into `APPOINTMENT_WEBHOOK_URL`. Each request is saved to the sheet and emailed to you.

## Google Search Console (SEO)
Add your site at https://search.google.com/search-console, paste the verification code into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then submit `https://your-domain/sitemap.xml`.

## Things to edit
- **Qualifications, experience, registration number:** `lib/site-config.ts` (`doctor` section). They stay hidden until filled in.
- **Your photo:** save as `public/images/doctor/doctor-hero.jpg` and `doctor-about.jpg` (any shape, never cropped).
- **Photos:** `public/images/gallery/`, listed in `lib/images.ts` with their alt text and captions. Replace or remove any picture of a service you do not offer.
- **Services, FAQs, areas:** `lib/constants.ts`.

Medical note: the site states it is not for emergencies; keep that notice.
