# Hot Dang Site Handoff: Next Phase Is Contact

## Current State

This project is a deploy-ready Next.js recreation of the Amber Framer template, renamed and adapted for Hot Dang.

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

Latest confirmed state after the about-page pass:

- Public Vercel URL returns `200`.
- Vercel CLI auth works as `mageeye`.
- Vercel production deployment status is `Ready`.
- GitHub is connected to Vercel.
- Local git branch is `main`, clean, and pushed to `origin/main`.
- Latest about-page commit: `7bcdcc9 Add about hero parallax`.
- Live production deployment was manually verified after deploy.

## What Is Built

The homepage was built as a near-replica of:

```txt
https://amber.framer.media/
```

The projects section and three project detail pages were built as near-replicas of:

```txt
https://amber.framer.media/projects
https://amber.framer.media/projects/of-earth
https://amber.framer.media/projects/after-the-quiet
https://amber.framer.media/projects/echoes-of-us
```

The about page was built as a near-replica of:

```txt
https://amber.framer.media/about
```

The user owns the Amber template and requested use of the original media assets.

The current implementation includes:

- Fixed desktop nav with rolling hover text.
- Mobile `MENU` / `CLOSE` overlay.
- Full-screen video hero using original Amber media.
- Visible brand changed to `HOT DANG`.
- Visitor-local live clock in the homepage hero metadata.
- Original Framer marketplace/template buttons removed.
- Original Framer badge removed.
- Original ticker-line image and logo marquee assets.
- Sticky, cinematic homepage project video panels.
- Polished `/projects` grid page.
- Cinematic project detail template at `/projects/[slug]`.
- Three mock projects: `Of Earth`, `After the Quiet`, and `Echoes of Us`.
- Full `/about` page using Amber template copy, stats, awards, clients, team layout, localized Amber assets, and scroll parallax on the hero image.
- `/contact` still exists as a placeholder and needs the next template pass.

## Important Files

Homepage experience:

```txt
src/components/home-experience.tsx
src/app/page.tsx
src/app/globals.css
src/app/layout.tsx
```

Reusable site chrome:

```txt
src/components/site-chrome.tsx
```

Project system:

```txt
src/data/projects.ts
src/app/projects/page.tsx
src/app/projects/[slug]/page.tsx
src/app/globals.css
```

About page:

```txt
src/app/about/page.tsx
src/components/about-parallax-image.tsx
public/media/about/*
src/app/globals.css
```

Remaining placeholder routes:

```txt
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
public/media/about/*
```

## Current Project Data

The active project list now lives in:

```txt
src/data/projects.ts
```

The homepage imports that shared project data instead of keeping an inline array.

Current project entries:

- `Of Earth` / `2022` / `Commercial` / `/projects/of-earth`
- `After the Quiet` / `2023` / `Short Film` / `/projects/after-the-quiet`
- `Echoes of Us` / `2023` / `Wedding Film` / `/projects/echoes-of-us`

The current `Project` type is intentionally compact:

```ts
export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  detailCategory: string;
  client: string;
  overviewTitle: string;
  overview: string;
  credits: { label: string; value: string }[];
  media: string;
  mediaType: "video";
  objectPosition: string;
};
```

Important limitation: the current detail template repeats the primary project video in the gallery slots. This matched the available localized Amber assets for the first build, but the next optimization should add a real `gallery` array before adding media-rich Hot Dang case studies.

Recommended future data shape when real image/video sets arrive:

```ts
type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  objectPosition?: string;
};

export type Project = {
  title: string;
  slug: string;
  year: string;
  category: string;
  detailCategory: string;
  client: string;
  overviewTitle: string;
  overview: string;
  credits: { label: string; value: string }[];
  heroMedia: ProjectMedia;
  previewMedia: ProjectMedia;
  gallery: ProjectMedia[];
};
```

## How Project Pages Were Built

`/projects` was modeled from the Amber projects index:

- Black background.
- Fixed nav over the page.
- Huge centered uppercase `PROJECTS` title.
- Inline filter rail: `ALL`, `FILMS/TV`, `COMMERCIAL`, `STILLS`.
- Three-column desktop grid; one-column mobile grid.
- Each item has a large cinematic thumbnail/video, Antonio uppercase title, and right-aligned muted category.
- Footer repeats the existing ticker-line / `Start Your Story` CTA rhythm.

`/projects/[slug]` was modeled from the Amber project detail pages:

- Fixed nav over the page.
- Large full-width hero video at the top with controls.
- Four metadata columns directly under the hero: title, category, client, year.
- Large vertical pause before the overview block.
- Overview/credits split layout.
- Big editorial overview heading and muted supporting paragraph.
- Credits table with muted labels and bright right-aligned values.
- Stacked gallery moments.
- `More Projects` section using the same project-card pattern.
- Shared Hot Dang footer.

Keep this structure intact when adding projects unless the user asks for a new design system pass.

## Reusable Skill For New Projects

A new local skill was created for future agents:

```txt
C:\Users\Lathan\.codex\skills\hot-dang-project-builder
```

Use it when the user wants to add a new Hot Dang project from supplied project data and media.

Example invocation:

```txt
Use $hot-dang-project-builder to add a new project called River House with the video at D:\...\river-house.mp4, category Brand Film, year 2026, client River House, and these credits...
```

The skill includes:

- Current repo file map.
- Exact visual/implementation checklist.
- A helper script to generate or write a project entry from JSON.
- Validation and deployment guidance.

## Completed Phase: About Page

The about page now follows the original Amber template closely.

Reference used:

```txt
https://amber.framer.media/about
```

Implemented:

1. Preserved Hot Dang nav/footer/site chrome.
2. Replaced `src/app/about/page.tsx` placeholder with Amber-style about content.
3. Localized Amber about media in `public/media/about/`.
4. Added `src/components/about-parallax-image.tsx` for the hero image scroll parallax.
5. Kept Amber template content, awards, clients, team names, and stats for later content swap.
6. Verified desktop/mobile screenshots, local build, production deploy, and public `/about` route.

## Next Phase Goal: Contact Page

The next template-replication task should build the contact page from the original Amber template.

Reference to analyze next:

```txt
https://amber.framer.media/contact
```

Likely implementation targets:

1. Inspect the live Amber contact page with desktop and mobile screenshots.
2. Preserve existing Hot Dang nav/footer/site chrome.
3. Replace `src/app/contact/page.tsx` placeholder with the template contact layout.
4. Keep template copy/contact fields first unless the user provides final Hot Dang contact details.
5. Avoid adding auth, databases, generic forms, or SaaS styling unless requested.

## Design Constraints To Preserve

Do preserve:

- The fixed top nav.
- Rolling text hover interactions.
- The mobile overlay menu.
- Full-bleed cinematic media.
- Sticky/scroll-driven project feeling where appropriate.
- Large Antonio-style type.
- Sparse black-and-white editorial presentation.
- The ticker-line / `Start Your Story` footer rhythm.

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
npm run start -- --port 3011
```

If `3011` is busy, use the next open port.

Then check:

```txt
http://localhost:3011/
http://localhost:3011/projects
http://localhost:3011/projects/of-earth
http://localhost:3011/projects/after-the-quiet
http://localhost:3011/projects/echoes-of-us
http://localhost:3011/about
```

Use Playwright/browser screenshots for desktop and mobile. This site is visual-heavy, so screenshot verification matters.

## Deployment Flow

GitHub is already set up:

```txt
origin https://github.com/Mageeye/hot-dang-amber.git
```

Normal publish flow:

```powershell
git status -sb
git add <explicit changed files>
git commit -m "Describe the site update"
git push origin main
```

Vercel Git integration is connected, so pushing to `main` should trigger deployment.

Manual production deploy also works from the project root:

```powershell
npx vercel --prod --yes
```

After deployment, verify the public alias directly:

```powershell
Invoke-WebRequest -UseBasicParsing -Uri "https://hot-dang-amber.vercel.app/projects"
Invoke-WebRequest -UseBasicParsing -Uri "https://hot-dang-amber.vercel.app/projects/of-earth"
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

Already completed successfully for the current deployed state:

```powershell
npm run lint
npm run build
git push origin main
npx vercel --prod --yes
```

Public route checks returned `200` for:

```txt
https://hot-dang-amber.vercel.app/
https://hot-dang-amber.vercel.app/about
https://hot-dang-amber.vercel.app/projects
https://hot-dang-amber.vercel.app/projects/of-earth
https://hot-dang-amber.vercel.app/projects/after-the-quiet
https://hot-dang-amber.vercel.app/projects/echoes-of-us
```

Content checks confirmed live pages contain:

```txt
Amber Films is a creative studio
Clara Wynn
Of Earth
Terrae Botanicals
Independent
Private Couple
```

## What To Ask User Next

For the contact-page pass, ask for or infer:

- Whether to duplicate the Amber contact page exactly first, then content-swap later.
- Final Hot Dang email, phone, location, and social links.
- Whether any contact form should be functional now or just visually matched.
- Whether to keep template contact copy until real Hot Dang copy is ready.

If the user does not have final Hot Dang contact content yet, proceed with a strong Amber-template replica and clearly isolate editable copy/contact details.
