# AGENTS.md

## Build / Run
- Static HTML site; no build step.
- Preview: `python -m http.server 8000`.

## Lint / Validation
- `npx htmlhint "**/*.html"` or `tidy -e -q **/*.html`.
- Run before committing.

## Test
- No automated tests; manually open pages.
- When tests exist: `npm test -- -t "<test>"`.

## Style Guidelines
- **Indent:** 2 spaces, no tabs.
- **HTML:** lowercase tags/attrs, double‑quoted values.
- **Naming:** kebab‑case for files/dirs.
- **Includes:** header/footer/nav in `includes/`.
- **Accessibility:** `alt` text, semantic tags.
- **Links:** `rel="noopener"` & `target="_blank"` for external.
- **Lines:** <120 chars, wrap long lines.
- **Commit:** lint‑free, formatted files only.

## Repo Rules
- No `.cursor` or Copilot instruction files present.

*Guides AI agents on workflow and style.*