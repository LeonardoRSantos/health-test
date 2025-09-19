# Copilot Instructions for HealthTestFrontEnd

## Project Overview
This is an Angular 20+ application generated with Angular CLI. The codebase is organized for modularity and server-side rendering support. The main entry points are in `src/`, with application logic in `src/app/` and public assets in `public/`.

## Architecture & Key Patterns
- **App Structure:**
  - Main app logic: `src/app/`
  - Routing: `src/app/app.routes.ts` and `app.routes.server.ts`
  - Config: `src/app/app.config.ts` and `app.config.server.ts`
  - Pages: `src/app/pages/` (e.g., `public/pagina-principal/` for main public page)
  - Server-side entry: `src/main.server.ts`, `src/server.ts`
- **Component Pattern:**
  - Each page/component has its own folder with `.component.ts`, `.component.html`, and `.component.scss` files.
  - Example: `src/app/pages/public/pagina-principal/pagina-principal.component.*`
- **Styling:**
  - Global styles: `src/styles.scss`
  - Component styles: colocated `.scss` files
- **TypeScript Configs:**
  - Multiple `tsconfig` files for app, specs, and server

## Developer Workflows
- **Start Dev Server:**
  - `ng serve` or `npm start` (see tasks)
- **Run Tests:**
  - Unit: `ng test` or `npm test`
  - E2E: `ng e2e` (framework not included by default)
- **Build:**
  - `ng build`
- **Scaffold Components:**
  - `ng generate component <name>`

## Conventions & Patterns
- **Angular CLI conventions** are followed for file/folder structure and naming.
- **Routing and config files** are split for client/server logic.
- **Component folders** contain all related files for maintainability.
- **No custom rules or agent instructions found** beyond standard Angular/CLI practices.

## Integration Points
- **No external API/service integration detected** in the provided context.
- **Public assets** are served from `public/`.

## Example: Adding a Page
1. Create a folder under `src/app/pages/`.
2. Add `.component.ts`, `.component.html`, `.component.scss` files.
3. Register the route in `app.routes.ts`.

## References
- [README.md](../../README.md) for CLI commands and workflow basics
- `src/app/` for main app logic and patterns

---
**If any conventions, integrations, or workflows are unclear or missing, please provide feedback so this guide can be improved.**
