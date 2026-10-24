# Quinton Bosch — Synthwave Developer Profile

An 80s synthwave-style developer profile: neon sunset, scrolling grid, chrome lettering and CRT scanlines.
It's plain HTML, CSS and JavaScript with no build step, so it runs on GitHub Pages or any static host as-is.

```
index.html        page skeleton
404.html          "Game Over" page for broken links
css/style.css     all styling (colour tokens are at the top)
js/profile.js     ← YOUR CONTENT: edit this file
js/main.js        renders the content and runs the effects
assets/           favicon, plus your photo / résumé if you add them
.nojekyll         tells GitHub Pages to serve the files untouched
```

## Make it yours

1. Open `js/profile.js` and replace everything in `[square brackets]`.
2. To add a photo, save it as `assets/me.jpg` and set `photo: "assets/me.jpg"`.
3. To add a résumé button, save it as `assets/resume.pdf` and set `resumeUrl: "assets/resume.pdf"`.
4. To hide a section, set its list to `[]` (for example `certifications: []`).
5. Update the `<title>`, `description` and `og:` tags at the top of `index.html`.
   Link previews on LinkedIn, Slack and X read those tags directly, not `profile.js`.

To preview locally, open `index.html` in a browser, or run a tiny server from this folder:

```bash
npx --yes http-server -c-1 -p 8080
```

## Host it on GitHub Pages (your personal page)

Your personal page lives at `https://quincybosch.github.io` and comes from a repo with exactly that name.

> **That repo already exists** and holds your current portfolio. To replace it with this site, clone it,
> delete its old files, copy these files in, then commit and push. Its history keeps the old version if you want it back.
> To start fresh instead, follow the steps below.

1. On GitHub, create a **public** repo named `quincybosch.github.io` (no README).
2. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Synthwave developer profile"
   git branch -M main
   git remote add origin https://github.com/QuincyBosch/quincybosch.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then branch `main`, folder `/ (root)`.
4. After a minute or two the site is live at `https://quincybosch.github.io`.

Each later push to `main` redeploys automatically.

## Host it on the wider web

**Custom domain on GitHub Pages:** in **Settings → Pages → Custom domain**, enter your domain (for example `quintonbosch.dev`).
At your DNS provider, add a `CNAME` record for `www` pointing to `quincybosch.github.io`.
For the bare domain, add `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
Then tick **Enforce HTTPS**.

**Other static hosts** need no build command and serve this folder as-is:

- **Netlify:** drag the folder onto app.netlify.com/drop, or connect the GitHub repo.
- **Cloudflare Pages:** connect the repo and leave the build command empty, with output directory `/`.
- **Vercel:** import the repo with framework preset "Other".

> `404.html` uses root-relative paths (`/css/style.css`). That's correct for a personal `username.github.io` site or a custom domain.
> If you serve the site from a sub-path such as `username.github.io/profile`, change those paths to include the sub-path.

## Easter eggs

- The **CRT** button in the nav toggles the scanlines, and your choice is remembered.
- Type the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) for turbo mode.
- Animations switch off automatically for visitors who prefer reduced motion.
