from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("indexDefault.html")


@app.route("/<name>")
def indexName(name):
    formatted_name = name.replace("+", " ")
    return render_template("index.html", name=formatted_name)


if __name__ == "__main__":
    app.run(debug=False)
