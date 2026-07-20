# Adding Your Images to the Cold Circuit Website

This folder holds all the photos for the Cold Circuit website.

## How to Add Your Photos

1. Copy your photos into this `/images/` folder
2. Name them to match the references in the HTML pages (see below), **or** open the HTML file and change the `src` attribute to match your file name
3. Each page has comments like `<!-- Replace with images/filename.jpg -->` to show you exactly where to swap photos in

## Recommended Photo Names

> **Note:** The service photos below are already in place across the homepage,
> services page and each service sub-page. Swap any file for your own photo of
> the same name to update it everywhere it's used.

| File Name | Used On | Description |
|---|---|---|
| `residential.jpg` | index.html + services.html (service cards) | ✅ Added – residential condenser units |
| `commercial.jpg` | index.html + services.html (service cards) | ✅ Added – commercial VRV system |
| `industrial.jpg` | index.html + services.html (service cards) | ✅ Added – industrial rooftop chillers |
| `residential-hero.jpg` | residential.html | ✅ Added – split systems hero |
| `commercial-hero.jpg` | commercial.html | ✅ Added – commercial chiller plant hero |
| `industrial-hero.jpg` | industrial.html | ✅ Added – cooling tower hero |
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
<img src="images/residential.jpg" alt="Residential aircon cleaning by Cold Circuit Brisbane">
```

## Supported Formats
JPG, PNG, or WebP. JPG recommended for photos (good quality, smaller file size).
Aim for images around 1200×800px for best results.
