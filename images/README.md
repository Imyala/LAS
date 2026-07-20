# Adding Your Images to the LAS Website

This folder holds all the photos for the LAS website.

## How to Add Your Photos

1. Copy your photos into this `/images/` folder
2. Name them to match the references in the HTML pages (see below), **or** open the HTML file and change the `src` attribute to match your file name
3. Each page has comments like `<!-- Replace with images/filename.jpg -->` to show you exactly where to swap photos in

## Recommended Photo Names

| File Name | Used On | Description |
|---|---|---|
| `residential.jpg` | index.html (service card) | General residential aircon photo |
| `commercial.jpg` | index.html (service card) | General commercial aircon photo |
| `industrial.jpg` | index.html (service card) | General industrial HVAC photo |
| `residential-hero.jpg` | residential.html | Hero image for residential page |
| `commercial-hero.jpg` | commercial.html | Hero image for commercial page |
| `industrial-hero.jpg` | industrial.html | Hero image for industrial page |
| `about-team.jpg` | about.html | Team or founder photo |
| `luke.jpg` | about.html | Luke's headshot |
| `split-system.jpg` | residential.html | Split system unit photo |
| `ducted.jpg` | residential.html | Ducted system photo |
| `window-unit.jpg` | residential.html | Window/wall unit photo |
| `multi-split.jpg` | residential.html | Multi-split system photo |
| `gallery-res-1.jpg` | gallery.html | Residential job before |
| `gallery-res-1-after.jpg` | gallery.html | Residential job after |
| `gallery-ducted-1.jpg` | gallery.html | Ducted system job |
| `gallery-comm-1.jpg` | gallery.html | Commercial cassette unit |
| `gallery-comm-2.jpg` | gallery.html | Restaurant HVAC |
| `gallery-ind-1.jpg` | gallery.html | Industrial AHU |
| `gallery-coil-ba.jpg` | gallery.html | Coil before/after |
| `gallery-mould.jpg` | gallery.html | Mould treatment job |
| `gallery-retail.jpg` | gallery.html | Retail store service |
| `gallery-cold-room.jpg` | gallery.html | Cold room evaporator |
| `gallery-fan-before.jpg` | gallery.html | Fan barrel before |
| `gallery-fan-after.jpg` | gallery.html | Fan barrel after |

## Swapping a Placeholder for a Real Image

Find this in the HTML:
```html
<div class="img-placeholder">
  <span class="img-placeholder__icon">🏠</span>
  <span>Residential Aircon Cleaning</span>
</div>
```

Replace it with:
```html
<img src="images/residential.jpg" alt="Residential aircon cleaning by LAS Brisbane">
```

## Supported Formats
JPG, PNG, or WebP. JPG recommended for photos (good quality, smaller file size).
Aim for images around 1200×800px for best results.
