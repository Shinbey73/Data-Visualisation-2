import json

# Load the spec
with open(r'c:\Users\user\Desktop\Data-Visualisation-2\js\food_security_pressure_profile.vg.json') as f:
    spec = json.load(f)

# Check hconcat array for issues
for i, chart in enumerate(spec.get('hconcat', [])):
    print(f"\nChart {i}:")
    for layer_idx, layer in enumerate(chart.get('layer', [])):
        print(f"  Layer {layer_idx}:")
        encodings = layer.get('encoding', {})
        for channel, encoding in encodings.items():
            has_type = 'type' in encoding
            has_field = 'field' in encoding
            has_datum = 'datum' in encoding
            has_condition = 'condition' in encoding
            print(f"    {channel}: field={has_field}, datum={has_datum}, type={has_type}, condition={has_condition}")
            if not has_type:
                print(f"      WARNING: {channel} missing type!")
                if has_condition:
                    print(f"      Has condition with: {list(encoding['condition'].keys()) if isinstance(encoding['condition'], dict) else type(encoding['condition'])}")
