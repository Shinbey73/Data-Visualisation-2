import json

with open(r'c:\Users\user\Desktop\Data-Visualisation-2\js\food_security_pressure_profile.vg.json') as f:
    spec = json.load(f)

# Find all encoding definitions without type
def check_encoding(encoding, path=""):
    for channel, def_obj in encoding.items():
        if isinstance(def_obj, dict):
            if 'type' not in def_obj and 'datum' not in def_obj and channel not in ['tooltip']:
                print(f"MISSING TYPE: {path}.{channel} = {def_obj}")
        elif isinstance(def_obj, list):
            # tooltip array
            for item in def_obj:
                if isinstance(item, dict) and 'type' not in item and 'field' in item:
                    print(f"ARRAY ITEM MISSING TYPE: {path}.{channel} = {item}")

for i, chart in enumerate(spec.get('hconcat', [])):
    for layer_idx, layer in enumerate(chart.get('layer', [])):
        encoding = layer.get('encoding', {})
        check_encoding(encoding, f"chart[{i}].layer[{layer_idx}]")
