import sys
from PIL import Image

def make_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error opening image: {e}")
        sys.exit(1)
        
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # If pixel is roughly white
        if item[0] >= 220 and item[1] >= 220 and item[2] >= 220:
            newData.append((255, 255, 255, 0)) # fully transparent
        else:
            # We can perform simple alpha blending for antialiasing
            # Lighter pixels become more transparent
            # Let's just do a linear ramp from 220-255 mapped to alpha 255-0
            # Wait, if it's less than 220, it's fully opaque.
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == '__main__':
    make_transparent('Gemini_Emblem.png', 'Gemini_Emblem_transparent.png')
