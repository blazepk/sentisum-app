# Deploying to GitHub Pages (Vite + React + Tailwind v4)

This repo is preconfigured to deploy to GitHub Pages using GitHub Actions.

## One-time setup

1. Push this repository to GitHub and ensure your default branch is `main`.
2. In the GitHub repository:
   - Settings → Pages → Build and deployment → Source: `GitHub Actions`.
   - (No further configuration needed, the workflow in `.github/workflows/deploy.yml` handles it.)

## How it works

- The workflow runs on pushes to `main` and on manual dispatch.
- It builds the site (npm ci && npm run build) and uploads `dist` as a Pages artifact.
- `actions/deploy-pages` publishes the artifact to GitHub Pages.
- `vite.config.ts` sets the correct `base` automatically based on the repo name when running in Actions.

## Local preview

- `npm run build && npm run preview`
- Open the printed URL (default http://localhost:4173)

## Troubleshooting

- 404 on refresh or nested routes: We include a 404.html that redirects back to index.html, preserving the path. Ensure your Pages site serves 404.html (default behavior). Also confirm `base` is correct; the workflow sets `GITHUB_REPOSITORY` so `vite.config.ts` computes it. If you run a custom build outside Actions, set `BASE` explicitly:

```bash
BASE=/yourrepo/ npm run build
```

Then serve the `dist` folder.

- Pages not showing the latest build: check Actions tab for errors and ensure Pages is set to “GitHub Actions” in Settings.

