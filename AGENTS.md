# AGENTS.md

## Commands
- Dev: `npm run dev` (Turbopack on :3000)
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm test`
- Single test: `npm test -- -t "test name"`
- File test: `npm test -- path/to/file.test.ts`

## Style
- 2 spaces, <120 chars
- Absolute imports: `@/components/Header`
- TypeScript strict, PascalCase components
- kebab-case files, handle API errors
- Alt text, semantic HTML, ARIA

## Workflow
- Follow existing patterns
- Small, reversible changes
- Test before commit
- Deploy via Vercel