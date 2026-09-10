# Mohamed Sameh — Portfolio

A static, dependency-free portfolio site. No build step — just open `index.html` in a browser, or deploy the folder as-is (e.g. GitHub Pages, Netlify, Vercel).

## Structure

```
portfolio/
├── index.html        All page content and structure
├── css/styles.css     Design tokens (colors, type, spacing) + all styling
├── js/main.js         Mobile nav toggle + hero background animation
└── assets/
    ├── profile.jpg              Hero photo
    └── Mohamed_Sameh_CV.pdf      CV served by the "Download CV" buttons
```

## Common edits

- **Personal info / About text** — edit directly inside `index.html`, in the `<section id="about">` block.
- **Skills** — each `.skills__row` in the `#skills` section is one category; add or remove `<span>` chips inside `.skills__chips`.
- **Projects** — each project is a `.project-card` (or `.project-card--featured` for the two highlighted ones) inside `#projects`. Copy an existing card to add a new one. Add a GitHub button only once you have a real repository link.
- **Education / Training / Courses** — plain text blocks and list items in their respective sections; edit directly.
- **Social links** — the email/GitHub/LinkedIn URLs appear in two places: the `#contact` section and the `<footer>`. Update both.
- **CV** — replace `assets/Mohamed_Sameh_CV.pdf` with a new file of the same name, or update the `href` in the two "Download CV" links in `index.html` if you rename it.
- **Photo** — replace `assets/profile.jpg` with a new image of the same name (recommended: portrait orientation, ~1000px wide).
- **Colors / fonts** — all design tokens live at the top of `css/styles.css` under `:root`.
