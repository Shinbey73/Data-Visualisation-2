// ========================================
// Vega-Lite Visualisation Loader
// ========================================

// Helper function to load Vega-Lite specifications
async function loadVisualization(specPath, elementId) {
    try {
        const response = await fetch(specPath);
        const spec = await response.json();
        
        // Render the Vega-Lite specification
        vegaEmbed('#' + elementId, spec, {
            actions: {
                export: true,
                source: false,
                compiled: false,
                editor: false
            }
        });
    } catch (error) {
        console.error(`Error loading visualization ${specPath}:`, error);
        document.getElementById(elementId).innerHTML = 
            `<p style="color: red;">Error loading visualization</p>`;
    }
}

// Load visualisations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load the Malaysia food inflation choropleth map
    loadVisualization('vega-specs/malaysia_food_inflation_choropleth.vg.json', 'vis1');
    // Load the ranked lollipop chart for top food pressure states
    loadVisualization('js/top_food_pressure_states_lollipop.vg.json', 'vis2');
    // Load the Food CPI trend chart
    loadVisualization('js/food_cpi_trend_selected_states.vg.json', 'vis3');
    // Load Chart 4 heatmap
    loadVisualization('js/state_vs_cpi_division_heatmap.vg.json', 'vis4');
    // Load Chart 5 barcode timeline
    loadVisualization('js/food_price_barcode_timeline.vg.json', 'vis5');
    // Load Chart 6 slope chart
    loadVisualization('js/food_inflation_before_vs_latest_slope.vg.json', 'vis6');
    // Load Chart 7 crop production map
    loadVisualization('js/crop_production_by_state_map.vg.json', 'vis7');
    // Load Chart 8 scatter plot
    loadVisualization('js/crop_production_vs_food_inflation_scatter.vg.json', 'vis8');

    console.log('Malaysia choropleth, lollipop, trend, heatmap, barcode timeline, slope charts, crop production map and scatter plot loaded.');
});

// ========================================
// Inline Visualization Function
// ========================================
// Use this if you prefer to define specs directly in JavaScript

function createInlineVisualization(spec, elementId) {
    vegaEmbed('#' + elementId, spec, {
        actions: {
            export: true,
            source: false,
            compiled: false,
            editor: false
        }
    });
}

// ========================================
// Example: Inline spec (uncomment to test)
// ========================================

/*
const exampleSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple bar chart with embedded data.",
    "data": {
        "values": [
            {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
            {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
            {"a": "G", "b": 19}, {"a": "H", "b": 87}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},
        "y": {"field": "b", "type": "quantitative"}
    }
};

// Uncomment to load on page load:
// document.addEventListener('DOMContentLoaded', function() {
//     createInlineVisualization(exampleSpec, 'vis1');
// });
*/
