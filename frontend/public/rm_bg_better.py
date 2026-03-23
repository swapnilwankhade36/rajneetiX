import sys
from PIL import Image, ImageChops

def make_transparent_better(input_path, output_path):
    print(f"Processing {input_path} for better transparency...")
    try:
        img = Image.open(input_path).convert("RGBA")
    except Exception as e:
        print(f"Error opening image: {e}")
        sys.exit(1)
        
    datas = img.getdata()
    newData = []
    
    for r, g, b, a in datas:
        luminance = int(0.299 * r + 0.587 * g + 0.114 * b)
        
        # Pure white -> transparent
        if luminance > 240:
            newData.append((r, g, b, 0))
        elif luminance > 200:
            # Semi-transparent transition for anti-aliasing
            alpha = int(255 * (240 - luminance) / 40.0)
            newData.append((r, g, b, alpha))
        else:
            newData.append((r, g, b, 255))
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved better transparent image to {output_path}")

if __name__ == '__main__':
    make_transparent_better('Gemini_Emblem.png', 'Gemini_Emblem_transparent.png')
