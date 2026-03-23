import sys

try:
    from rembg import remove
    print("Executing rembg...")
    input_path = r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png"
    output_path = r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png"

    with open(input_path, 'rb') as i:
        input_data = i.read()
        
    output_data = remove(input_data)

    with open(output_path, 'wb') as o:
        o.write(output_data)
        
    print("Background removed successfully using rembg.")
except Exception as e:
    print("Failed with rembg, falling back to PIL thresholding.", e)
    from PIL import Image
    img = Image.open(r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png")
    img = img.convert("RGBA")
    datas = img.getdata()
    
    # Get top left pixel color
    bg_color = datas[0]
    
    newData = []
    
    # Tolerance for background removal
    tolerance = 20
    
    for item in datas:
        # Check if color is close to background
        if abs(item[0] - bg_color[0]) < tolerance and \
           abs(item[1] - bg_color[1]) < tolerance and \
           abs(item[2] - bg_color[2]) < tolerance:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png", "PNG")
    print("Background removed successfully using PIL fallback.")
