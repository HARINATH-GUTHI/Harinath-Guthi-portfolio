# Your Name — Portfolio

A simple, modern one-page portfolio in a warm brown/cream palette, built with
plain HTML, CSS, and JavaScript (no build tools, no frameworks — works
anywhere).

## Files

- `index.html` — page content and structure
- `style.css` — all styling, colors, and animations
- `script.js` — mobile menu, scroll reveal, back-to-top button, contact form

## Editing your content

Open `index.html` in any text editor and replace the placeholders:

- **Bio / hero**: your name, tagline, and short intro near the top
- **About**: the two paragraphs, plus education, location, interests, and the
  4 stat numbers (projects, languages, hackathons, CGPA)
- **Skills**: edit the `<span class="pill">` items in each category
- **Projects**: each `<article class="project-card">` — title, description,
  tech tags, and links (swap `#` for your real GitHub/live links)
- **Contact**: social links at the bottom, and the `mailto:` link if you add one
- **Résumé button**: point `Download résumé` to your PDF (e.g. `resume.pdf`
  placed in the same folder)

The contact form currently only validates input in the browser — it doesn't
send anywhere yet. To make it actually deliver messages, the easiest options
are:

- [Formspree](https://formspree.io) — free, no backend needed. Sign up, get a
  form endpoint, and set `<form action="https://formspree.io/f/yourid" method="POST">`
  on the form in `index.html`.
- [Web3Forms](https://web3forms.com) — similar, free, email-based.

## Publishing it for free

Any of these work well for a student portfolio. GitHub Pages is the most
common choice since it doubles as proof you use Git.

### Option 1 — GitHub Pages (recommended)

1. Create a free GitHub account if you don't have one.
2. Create a new repository, e.g. `portfolio`.
3. Upload `index.html`, `style.css`, and `script.js` to it (drag-and-drop on
   the GitHub website works, or use `git push` if you're comfortable with Git).
4. Go to **Settings → Pages** in the repo.
5. Under **Source**, select the `main` branch and `/ (root)` folder, then save.
6. After a minute, your site is live at:
   `https://your-username.github.io/portfolio/`

### Option 2 — Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free).
2. Drag the whole project folder onto the Netlify dashboard ("Deploy manually").
3. Netlify gives you a live URL instantly; you can rename it or connect a
   custom domain later for free.

### Option 3 — Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free).
2. Import the folder as a new project (or connect your GitHub repo).
3. Deploy — Vercel gives you a live URL automatically.

All three are free, don't need a credit card, and redeploy automatically
whenever you push changes (if connected to GitHub).

## Local preview

Just double-click `index.html` to open it in your browser — no server needed.
