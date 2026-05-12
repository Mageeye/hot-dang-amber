# Hot Dang Site Handoff: Next Phase Is Projects

## Current State

This project is a deploy-ready Next.js recreation of the Amber Framer template homepage, renamed and adapted for Hot Dang.

Workspace path:

```txt
D:\Hotdang\hot-dang-amber
```

Live production URL:

```txt
https://hot-dang-amber.vercel.app
```

GitHub repo:

```txt
https://github.com/Mageeye/hot-dang-amber
```

Vercel project:

```txt
lathan-mastellars-projects/hot-dang-amber
```

Latest confirmed state:

- Public Vercel URL returns `200`.
- Vercel CLI auth works as `mageeye`.
- Vercel production deployment status is `Ready`.
- GitHub is connected to Vercel.
- Local git branch is `main`, clean, and pushed to `origin/main`.

## What Was Built

The homepage was built as a near-replica of:

```txt
https://amber.framer.media/
```

The user owns the Amber template and requested use of the original media assets.

The current implementation includes:

- Fixed desktop nav with rolling hover text.
- Mobile `MENU` / `CLOSE` overlay.
- Full-screen video hero using original Amber media.
- Visible brand changed to `HOT DANG`.
- Visitor-local live clock in the hero metadata.
- Original Framer marketplace/template buttons removed.
- Original Framer badge removed.
- Original ticker-line image and logo marquee assets.
- Sticky, cinematic project video panels using the original Amber project videos.
- About/services section.
- Footer CTA: `Start Your Story`.
- Placeholder pages for future buildout.

## Important Files

Homepage experience:

```txt
src/components/home-experience.tsx
src/app/page.tsx
src/app/globals.css
src/app/layout.tsx
```

Placeholder routes:

```txt
src/app/projects/page.tsx
src/app/projects/[slug]/page.tsx
src/app/about/page.tsx
src/app/contact/page.tsx
```

Original Amber assets localized into this repo:

```txt
public/media/hero.mp4
public/media/of-earth.mp4
public/media/after-the-quiet.mp4
public/media/echoes-of-us.mp4
public/media/still-breathing.mp4
public/media/scent-silence.mp4
public/media/the-light-between.mp4
public/media/tick-line.png
public/logos/*.svg
```

## Current Project Data

The homepage project list currently lives directly in:

```txt
src/components/home-experience.tsx
```

Current project entries:

- `Of Earth` / `2022` / `Commercial` / `/projects/of-earth`
- `After the Quiet` / `2023` / `Short Film` / `/projects/after-the-quiet`
- `Echoes of Us` / `2023` / `Wedding Film` / `/projects/echoes-of-us`
- `Still Breathing` / `2025` / `Brand Film` / `/projects/still-breathing`
- `Scent & Silence` / `2022` / `Commercial` / `/projects/scent-silence`
- `The Light Between` / `2025` / `Short Film` / `/projects/the-light-between`

These are still Amber template placeholders. The next phase is to replace/build these as real Hot Dang projects.

## Next Phase Goal

Build out the project pages.

The immediate next chat should focus on creating a strong project system:

1. Decide or receive the real Hot Dang project names, descriptions, media, categories, and case-study content.
2. Extract the repeated project data into a shared file, likely something like:

```txt
src/data/projects.ts
```

3. Update the homepage to import project data from that shared source instead of keeping the array inside `home-experience.tsx`.
4. Build `/projects` as a polished index page, not just a placeholder.
5. Build `/projects/[slug]` as a cinematic project detail template.
6. Keep the Amber/Hot Dang visual language intact until the Claude Design design-system replacement pass happens.

## Recommended Project Detail Page Direction

The project detail pages should feel like the homepage:

- Black background.
- White uppercase Antonio display headings.
- Large full-bleed hero media.
- Sparse editorial layout.
- Big project title, year, category, and short logline.
- Sections for overview, challenge, approach, deliverables, and credits.
- Full-width video/image moments.
- Previous/next project navigation.
- Footer CTA back to contact.

Avoid making generic card-heavy SaaS pages. This should stay cinematic, minimal, and motion-forward.

## Suggested Data Shape

Use a shared typed data model:

```ts
export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  logline: string;
  overview: string;
  approach: string;
  deliverables: string[];
  credits: { label: string; value: string }[];
  heroMedia: string;
  previewMedia: string;
  gallery: { type: "image" | "video"; src: string; alt?: string }[];
};
```

For now, it is acceptable to keep using the Amber media as placeholders until the user provides Hot Dang-specific media.

## Design Constraints To Preserve

Do preserve:

- The fixed top nav.
- Rolling text hover interactions.
- The mobile overlay menu.
- Full-bleed cinematic media.
- Sticky/scroll-driven project feeling.
- Large Antonio-style type.
- Sparse black-and-white editorial presentation.

Do not reintroduce:

- Framer badges.
- Buy Template buttons.
- More Templates buttons.
- Generic marketing sections.
- Rounded card-heavy layouts.
- Stock-looking replacement visuals unless the user explicitly asks.

## Verification Commands

Run these after edits:

```powershell
npm run lint
npm run build
```

For local production verification:

```powershell
npm run build
npm run start -- --port 3001
```

Then check:

```txt
http://localhost:3001/
http://localhost:3001/projects
http://localhost:3001/projects/of-earth
```

Use Playwright/browser screenshots for desktop and mobile. The homepage is visual-heavy, so browser verification matters.

## Deployment Flow

GitHub is already set up:

```txt
origin https://github.com/Mageeye/hot-dang-amber.git
```

Normal publish flow:

```powershell
git status -sb
git add .
git commit -m "Build project pages"
git push
```

Vercel Git integration is connected, so pushing to `main` should trigger deployment.

Manual production deploy also works from the project root:

```powershell
npx vercel --prod --yes
```

If Vercel CLI auth acts weird, prior issue was an empty auth file in:

```txt
C:\Users\Lathan\AppData\Roaming\xdg.data\com.vercel.cli\auth.json
```

It was fixed by restoring auth from:

```txt
C:\Users\Lathan\AppData\Roaming\com.vercel.cli\Data\auth.json
```

Recheck with:

```powershell
npx vercel whoami
```

Expected user:

```txt
mageeye
```

## Prior Validation

Already completed successfully:

```powershell
npm run lint
npm run build
```

Public route checks returned `200` for:

```txt
https://hot-dang-amber.vercel.app/
https://hot-dang-amber.vercel.app/projects
https://hot-dang-amber.vercel.app/projects/of-earth
https://hot-dang-amber.vercel.app/about
https://hot-dang-amber.vercel.app/contact
```

## What To Ask User Next

Before building real project pages, ask for whichever of these they have:

- Real Hot Dang project names.
- Project descriptions or case-study notes.
- Project videos/images.
- Desired categories.
- Whether to keep the Amber placeholder project names temporarily.
- Whether each project detail page should be image-led, video-led, or mixed.

If they do not have real content yet, proceed with a robust project-page template using the current placeholder media/data so Claude Design can later reskin and content-swap cleanly.
