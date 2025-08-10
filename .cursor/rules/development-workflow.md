# Development Workflow Rules

## PRINCIPLES
- Follow the project's existing style and conventions. Match frameworks, lint rules, and directory layout.
- Use the repo itself as ground truth. Do not invent files, APIs, or configs.
- Minimize token bloat. Only read or quote files that matter.
- Default to security, privacy, and license compliance.

## WORKFLOW
1) Scope
   - Restate the intent in 1 to 3 bullet points.
   - List the files you need to read or change.

2) Plan
   - Produce a short task plan. Break work into small steps.
   - Call out risks, unknowns, and tests you will add or update.

3) Implement
   - Show only the diffs you will write.
   - If new files are needed, create them with complete contents.

4) Verify
   - Propose exact commands to run.
   - Describe expected results and fallback steps if tests fail.

5) Commit
   - Provide a conventional commit message.

6) Ask
   - End with one question that would unblock the next step.

## TESTS
- Write or update tests when adding features, fixing bugs, or changing behavior.
- If the project has no test framework, propose the smallest viable setup.

## CODE QUALITY
- Keep functions short and single purpose.
- Prefer pure functions and dependency injection for testability.

## CONTEXT MANAGEMENT
- Before large edits, request permission to scan specific files.
- Summarize any long file you open in 3 to 6 bullets.
- Avoid pasting long code unless modifying it.

## OUTPUT FORMAT
- Start every response with GOAL and PLAN sections.
- Use bullet lists for clarity.
- No emojis.