# Kiran Kumar — Principal SDET Portfolio

A responsive, modern dark professional portfolio built with plain HTML, CSS, and JavaScript. It is designed for GitHub Pages hosting.

## Files

- `index.html` — portfolio content and page structure
- `style.css` — responsive dark theme and layouts
- `script.js` — mobile navigation, current year, and reveal effects
- `assets/` — add your profile photo, resume PDF, and other assets here

## Before publishing

Update these placeholders in `index.html`:

1. `your.email@example.com`
2. `YOUR-LINKEDIN`
3. `YOUR-GITHUB`
4. Earlier company names and employment dates in the experience section.
5. Add your actual resume PDF and link it from the page if desired.

Review all experience statements and adjust them to match your exact employment titles, dates, and achievements. Do not publish confidential employer or customer information.

## Run locally

Open `index.html` in a browser. For a local development server, you can use the VS Code Live Server extension.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `my-portfolio`.
2. Upload the contents of this folder to the repository root (the `index.html` file must be at the root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for the deployment and open `https://YOUR_USERNAME.github.io/my-portfolio/`.

## Git commands

```bash
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin main
```

GitHub Pages is suitable for this static site. A working contact form would require a form service or backend; this starter uses email and profile links instead.
