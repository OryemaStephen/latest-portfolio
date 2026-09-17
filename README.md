# Stephen Oryema – personal site

A personal portfolio built with React, Vite, React Router and Tailwind CSS v4, laid out like the Minimal Mistakes Jekyll theme, with light and dark themes.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Editing content

- `src/data/site.js`: name, tagline, bio, contact details, social links and navigation order (which also sets the Previous/Next buttons)
- `src/data/projects.js`: projects; each one gets a page at `/projects/<slug>`
- `src/pages/Now.jsx`, `Uses.jsx`, `Services.jsx`, `Home.jsx`: page copy; bump `updated` when you change them
- `src/index.css`: colours, fonts and the dark theme (all colours are tokens in `@theme` and `.dark`)
- `src/assets/avatar.jpg` and `public/Stephen_Oryema_CV.pdf`: photo and CV

## Deploy

`public/_redirects` makes client-side routes work on Netlify.
