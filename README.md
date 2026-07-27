# GeoQuest Kids

An iPad-optimized geography quiz game for children with all 195 countries (193 UN members plus Palestine and Vatican City). It includes Easy, Medium, and Hard quiz levels, Learn Mode, saved progress, and an interactive map shown after wrong answers.

## Run locally

Open `index.html` in a browser, or start a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a repository named `geography-quiz` under the GitHub account `dj0894`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save.

The site will be available at:

`https://dj0894.github.io/geography-quiz/`

## Notes

- Progress is stored in the browser using `localStorage`.
- The interactive map uses Leaflet, OpenStreetMap tiles, REST Countries, and a public GeoJSON dataset, so the map requires internet access.
- No account, backend, or database is required.
