from PIL import Image

def remove_white_background(img_path, out_path, threshold=200):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    
    # Simple thresholding logic
    for item in datas:
        # Check if color is close to white
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # White pixel becomes transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(out_path, "PNG")

if __name__ == '__main__':
    in_file = r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png"
    out_file = r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png"
    remove_white_background(in_file, out_file)
    print("Background removed using PIL successfully.")
