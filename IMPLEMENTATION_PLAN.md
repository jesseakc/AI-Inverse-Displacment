# Implementation Plan & Checklist

**Goal:** Convert the legacy static‑HTML site (now under `legacy-site/`) into a modern Next.js (TypeScript) application located in `site-next/`, then deploy to Vercel.

---

## 📋 Updated Implementation Plan (Phased)

| Phase | Goal | Key Tasks | Approx. Time |
|------|------|----------|------------|
| **0 – Discovery** | Verify repo state (read‑only) | - List repo files (already done).<br>- Confirm no `.cursor` or Copilot rules. | 5 min |
| **1 – Scaffold** | Create Next.js project | - `npx create-next-app@latest . --typescript --eslint --app --src` inside `site-next/` (already done).<br>- Commit scaffold. | 10 min |
| **2 – Layout & Shared Components** | Build reusable UI pieces | - `components/Header.tsx` (added).<br>- Create `components/Footer.tsx` (to be added).<br>- Create `components/Layout.tsx` that wraps `Header` and `Footer`. | 5 min |
| **3 – Page Migration** | Move each static HTML page to a Next.js route | - For each folder under `legacy-site/pages/` create `site-next/app/<slug>/page.tsx`.<br>- Convert HTML → JSX (class → className, self‑close tags, etc.).<br>- Move images, SVGs to `public/`.<br>- Add page‑specific `<title>` and meta via `metadata` in each page. | 30‑45 min |
| **4 – Global Styles & Assets** | Consolidate styling | - Move any `<style>` blocks from legacy HTML into `site-next/app/globals.css` or Tailwind classes.<br>- Ensure `globals.css` is imported in `app/layout.tsx`. | 5 min |
| **5 – Lint, Format & Test** | Ensure code quality | - Run `npm run lint` and `npm run format`.<br>- Add a single Jest + React‑Testing‑Library test (e.g., `Header.test.tsx`).<br>- Verify single‑test command: `npm test -- -t "Header"`. | 10 min |
| **6 – Deploy to Vercel** | Deploy & verify | - Install Vercel CLI (`npm i -g vercel`).<br>- `vercel login` → `vercel` (or connect via GitHub).<br>- Add any env vars (`.env.local` + `vercel env add`). | 5 min |
| **7 – Documentation & Cleanup** | Finalize repo | - Update **AGENTS.md** (already updated) with Next.js commands.
- Commit final changes (`git commit -m "feat: migrate static site to Next.js"`).
- Push to GitHub; Vercel auto‑deploys. | 5 min |
| **8 – Handoff** | Deliver to team | - Share updated **AGENTS.md** and this **IMPLEMENTATION_PLAN.md**.
- Ensure team knows new workflow (dev, build, lint, test, deploy). | – |

**Total estimated effort:** ~1 hour (depends on HTML complexity).

---

## ✅ Checklist (Markdown)

```markdown
- [ ] **Phase 0** – Verify repo state (no .cursor rules, etc.)
- [ ] **Phase 1** – Scaffold Next.js in `site-next/` (already done)
- [ ] **Phase 2** – Create Header, Footer, Layout components
- [ ] **Phase 3** – Convert each HTML page to a Next.js route (`src/app/.../page.tsx`)
- [ ] **Phase 4** – Move static assets to `public/`; add global CSS
- [ ] **Phase 5** – Run lint/format; add a single Jest test
- [ ] **Phase 6** – Deploy to Vercel (CLI or GitHub)
- [ ] **Phase 7** – Update AGENTS.md (already updated) and commit
- [ ] **Phase 8** – Handoff documentation and checklist
```

---

**Next steps:**
1. Add a `Footer` component (similar to `Header`).
2. Begin migrating pages (starting with `ai-career-transition-guide`).
3. Run `npm run dev` to verify the site renders.

*All tasks are ready to be executed when you give the go‑ahead.*