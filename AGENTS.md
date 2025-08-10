# AGENTS.md

## Build / Run
- Project uses **Next.js** with TypeScript in `site-next/` directory
- Development: `npm run dev` (starts `next dev` with Turbopack on http://localhost:3000)
- Production build: `npm run build` (creates `.next`)
- Preview built app: `npm start`

## Lint / Validation
- Lint: `npm run lint` (ESLint + Next.js defaults)
- Format code before committing (uses Prettier via IDE)
- Always run lint before committing

## Test
- Tests use Jest with React Testing Library and ts-jest
- Run all tests: `npm test`
- Run single test: `npm test -- -t "<test name>"`
- Run specific file: `npm test -- path/to/file.test.ts`
- Run tests in watch mode: `npm test -- --watch`
- Test files: `__tests__/*.test.tsx` or `*.test.tsx` alongside components
- Uses jsdom environment with ts-jest preset

## Style Guidelines
- **Indent:** 2 spaces, no tabs
- **Imports:** Absolute imports preferred (`@/components/Header` not `../../components/Header`)
- **Types:** Use TypeScript for all new code, strict typing
- **Naming:** kebab-case for files/dirs, PascalCase for components
- **Components:** Reusable in `components/`, page-specific in `app/`
- **Error handling:** Always handle API errors gracefully
- **Accessibility:** alt text for images, semantic tags, ARIA when needed
- **Lines:** <120 chars, wrap long lines

## Repo Rules
- No `.cursor` or Copilot instruction files
- Use `git` for version control; commit often
- Deploy to Vercel via GitHub integration
- Only commit lint-free, formatted files

*This file guides AI coding agents on workflow, style, and deployment for the project.*