// ========================================
// Vega-Lite Visualisation Loader
// ========================================

function maximiseChartWidth(spec) {
    if (Object.prototype.hasOwnProperty.call(spec, 'width')) {
        spec.width = 'container';
    }
}

function prepareResponsiveSpec(spec) {
    const isComposedChart = spec.facet || spec.repeat || spec.concat || spec.hconcat || spec.vconcat;

    if (isComposedChart) {
        return spec;
    }

    maximiseChartWidth(spec);
    spec.autosize = {
        type: 'fit-x',
        contains: 'padding',
        resize: true
    };
    return spec;
}

// Helper function to load Vega-Lite specifications
async function loadVisualization(specPath, elementId) {
    try {
        const response = await fetch(specPath);
        const spec = prepareResponsiveSpec(await response.json());
        
        // Render the Vega-Lite specification
        vegaEmbed('#' + elementId, spec, {
            renderer: 'svg',
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
    loadVisualization('js/malaysia_food_inflation_choropleth.vg.json', 'vis1');
    // Load the ranked lollipop chart for top food pressure states
    loadVisualization('js/top_food_pressure_states_lollipop.vg.json', 'vis2');
    loadVisualization('js/state_food_inflation_bump_chart_show_all.vg.json', 'vis_bump');
    // Load food item price small multiples
    loadVisualization('js/food_item_price_small_multiples.vg.json', 'vis_food_item_small_multiples');
    // Load food basket price index
    loadVisualization('js/food_basket_price_index.vg.json', 'vis_food_basket_index');   
    // Load urban versus rural food Consumer Price Index chart
    loadVisualization('js/urban_rural_food_cpi.vg.json', 'vis_urban_rural_food_cpi');
    // Load low-income household food pressure chart
    loadVisualization('js/low_income_food_pressure.vg.json', 'vis_low_income_food_pressure');
    // Load the Food Consumer Price Index trend chart
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
    // Load Chart 9 fish landing versus food inflation connected dot plot
    loadVisualization('js/fish_landing_vs_food_inflation_connected_dot.vg.json', 'vis9');
    // Load Chart 10 food security pressure profile
    loadVisualization('js/food_security_pressure_profile.vg.json', 'vis10');        

    console.log('Choropleth map, ranked lollipop chart, layered multi-line trend chart, state-versus-division heatmap, barcode timeline, slope chart, crop production map, production-versus-inflation bubble plot, fish landing connected dot plot, and a custom food security pressure profile strip loaded successfully.');
});

// ========================================
// Inline Visualization Function
// ========================================
// Use this if you prefer to define specs directly in JavaScript

function createInlineVisualization(spec, elementId) {
    vegaEmbed('#' + elementId, prepareResponsiveSpec(spec), {
        renderer: 'svg',
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
