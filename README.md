# 3D Animated Background Test Site

A single-page test site that uses `get.jfif` only as the animated 3D page background. The image is not rendered as a foreground picture or standalone visual block.

The background is built from layered CSS surfaces that reuse the image at different depths, with parallax, blur, glow, and light-sweep effects.

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
