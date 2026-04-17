# Portfolio Site

An elegant, premium-feeling personal portfolio website built for Sahil Pavaskar.

## Tech Stack
- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run locally:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Updating Content (Data-Driven Architecture)

All content for this portfolio is isolated from the React components. You do not need to modify the UI code to update your resume details.

Simply edit `src/data/config.ts`.
This configuration file contains all the textual content, links, and structured data like Experience, Projects, Skills, and Certifications.

## Deployment to GitHub Pages

This project is configured with a GitHub Actions workflow to automatically deploy to GitHub Pages on every push to the `main` branch.

### Setup Instructions
1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. Push a commit to the `main` branch, and the Action will automatically build and publish the site.

**Note on Repository Names:**
- If your repository is named `<username>.github.io`, no further configuration is needed. The site will deploy at the root (`/`).
- If this is a project repository (e.g., `portfolio`), you must edit `vite.config.ts` and set the `base` property to `'/portfolio/'`.

## Final Checklist
- [ ] Add your actual LinkedIn URL to `src/data/config.ts`.
- [ ] Add your actual GitHub URL to `src/data/config.ts`.
- [ ] Add actual URLs to your project demo/source links in `src/data/config.ts`.
- [ ] Replace `public/vite.svg` with your own favicon.
