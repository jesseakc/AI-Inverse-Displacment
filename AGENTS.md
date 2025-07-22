# AGENTS.md

## Build/Lint/Test Commands
- **Serve**: `python3 -m http.server 8000` or `npx serve .`
- **Validate HTML**: `npx html-validate index.html`
- **Test**: Manual browser testing across devices
- **Format**: Use Prettier for HTML/CSS/JS formatting

## Code Style Guidelines
- **HTML**: Semantic elements, proper indentation (2 spaces), lowercase tags
- **CSS**: Tailwind classes preferred, custom CSS in `<style>` blocks
- **JS**: ES6+, minimal inline scripts, prefer external files
- **Naming**: kebab-case for IDs/classes, semantic naming
- **Accessibility**: ARIA labels, alt text, keyboard navigation
- **Performance**: Optimize images, minify assets, lazy loading
- **SEO**: Meta tags, structured data (JSON-LD), semantic HTML