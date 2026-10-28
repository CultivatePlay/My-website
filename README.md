# cultivate-play.com

Website for Cultivate Play Pediatric Therapy, served by GitHub Pages.

## Pages
- `/` → `index.html` (built from `src/pages/home.html`)
- `/floortime/` → `floortime/index.html` (built from `src/pages/floortime.html`)

## Editing
The published HTML files are **generated**. Edit the sources instead:

- Page titles, descriptions, search data: `src/pages/*.html`
- Section text and layout: `src/components/*.jsx`
- Styles: `assets/css/site.css`
- Images: `assets/img/`

Then rebuild:

```
npm install -g esbuild
pip install playwright && playwright install chromium
python3 tools/build.py
```

The build pre-renders each page so search engines can read the full text
without running JavaScript. If you add a page, add it to `PAGES` in
`tools/build.py` and to `sitemap.xml`.

Note: exporting a new bundled site from a design tool and saving it over
`index.html` will undo the pre-rendering and remove the Floortime page links.
