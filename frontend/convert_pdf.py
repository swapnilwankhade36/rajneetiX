import fitz  # PyMuPDF

pdf_path = r"C:\Users\prana\.antigravity\uireferance\Gemini_Generated_Image_eesptyeesptyeesp (1).pdf"
png_path = r"c:\Users\prana\.antigravity\RajneetiX\frontend\public\Gemini_Emblem.png"

# Open the PDF file
doc = fitz.open(pdf_path)

# Display the first page
page = doc[0]

# Generate a high-resolution pixmap
zoom = 4    # zoom factor
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=True)

# Save the pixmap to a PNG file
pix.save(png_path)
print(f"Saved {png_path} successfully!")
