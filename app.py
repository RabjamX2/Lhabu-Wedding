from flask import Flask, render_template, send_file
from PIL import Image, ImageDraw, ImageFont

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/<name>")
def indexName(name):
    formatted_name = name.replace("+", " ")
    return render_template("index.html", name=formatted_name)


@app.route("/invite/<name>")
def inviteName(name):
    formatted_name = name.replace("+", " ")
    image = Image.open("static/images/Blank Name.png")
    draw = ImageDraw.Draw(image)
    biggestTextSize = 190
    font = ImageFont.truetype("static/fonts/Blacksword.otf", biggestTextSize)

    # Calculate text width and height
    text_width = draw.textlength(formatted_name, font=font)
    while text_width > 1550:
        biggestTextSize -= 10
        font = ImageFont.truetype("static/fonts/Blacksword.otf", biggestTextSize)
        text_width = draw.textlength(formatted_name, font=font)

    x = 3723 - (text_width / 2)  # Center the X coordinate
    y = 2635

    draw.text((x, y), formatted_name, fill="white", font=font)
    return send_file("modified_image.png", mimetype="image/png")


if __name__ == "__main__":
    app.run(debug=True)
