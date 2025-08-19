# AEYEPICS — Static Gallery

## Quick Start
1) Put your images into **assets/** (JPG/PNG/WebP). The folder already exists.
2) Edit **gallery.json** (already templated for 10 images): update file names + alt text.
3) Double-click **index.html** to preview locally.
4) Deploy free on:
   - **GitHub Pages:** push repo → Settings → Pages → Deploy from main → /(root)
   - **Netlify:** drag-and-drop the folder

### Example gallery.json
```json
[
  {"src":"assets/image_01.jpg","alt":"Cosmic City"},
  {"src":"assets/image_02.jpg","alt":"Dragon Realm"}
]
```

### Notes
- Keep paths case-sensitive.
- To force-load more than 8 at a time, change `PAGE` in `script.js`.
- The `assets/.keep` file exists only to keep the folder in the zip; safe to delete.
