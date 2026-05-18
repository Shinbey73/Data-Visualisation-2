# Data Visualisation 2 - Project Setup

This is your project template for creating a Vega-Lite data visualization web page.

## Project Structure

```
Data-Visualisation-2/
├── index.html              # Main webpage
├── css/
│   └── style.css          # Styling
├── js/
│   └── main.js            # JavaScript for loading specs
├── data/
│   └── (your CSV/JSON files)  # Data files
├── vega-specs/
│   └── (your .json specs) # Vega-Lite specifications
├── assets/
│   └── (images, icons)    # Supporting graphics
└── README.md              # This file
```

## Quick Start

### 1. Edit Your Page Content

Open `index.html` and update:
- Title and subtitle
- Author name and date
- Section descriptions and narrative text
- Data source URLs

### 2. Create Your Vega-Lite Specifications

Create JSON files in the `vega-specs/` folder. Example: `chart1.json`

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple bar chart",
  "data": {"url": "../data/yourfile.csv"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "category", "type": "nominal"},
    "y": {"field": "value", "type": "quantitative"}
  }
}
```

### 3. Load Your Visualisations

In `js/main.js`, uncomment and update the `loadVisualization()` calls:

```javascript
loadVisualization('vega-specs/chart1.json', 'vis1');
loadVisualization('vega-specs/chart2.json', 'vis2');
loadVisualization('vega-specs/map.json', 'vis3');
```

### 4. Add Data Files

Place your CSV or JSON data files in the `data/` folder. Reference them in your Vega-Lite specs:

```json
"data": {"url": "../data/yourfile.csv"}
```

## Tips

### Adding More Visualisations

In `index.html`, duplicate and modify the visualisation containers:

```html
<div class="pure-u-1 pure-u-md-1-2">
    <div class="vis-container">
        <h3>Your Chart Title</h3>
        <div id="vis4"></div>
        <p class="vis-caption">Chart description.</p>
    </div>
</div>
```

Then load in `js/main.js`:
```javascript
loadVisualization('vega-specs/chart4.json', 'vis4');
```

### Responsive Layout

- Use `pure-u-1` for full width
- Use `pure-u-md-1-2` for half width (two columns on medium+ screens)
- Use `pure-u-md-1-3` for thirds, etc.

### Styling

Customize `css/style.css` to match your design. Key sections:
- `.header` - Title area
- `.section` - Content sections
- `.vis-container` - Visualization boxes
- `.footer` - Footer area

## Publishing on GitHub

1. Push this project to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to `main` branch
4. Your site will be at `https://yourusername.github.io/Data-Visualisation-2/`

## Resources

- **Vega-Lite Documentation**: https://vega.github.io/vega-lite/
- **Vega-Lite Examples**: https://vega.github.io/vega-lite/examples/
- **Pure.css Documentation**: https://purecss.io/

## Important Notes

- Keep all data files under a few MB for fast loading
- Use meaningful chart titles and captions
- Ensure all external resources have proper attribution
- Test on mobile devices (use browser DevTools)
