import openai
from flask import Flask, render_template, request
from dotenv import dotenv_values
import json
from flask_cors import CORS


config = dotenv_values('.env');
openai.api_key = config["OPENAI_API_KEY"]


app = Flask(__name__,
    template_folder='templates',
    static_url_path='', 
    static_folder='static'
)
CORS(app, origins=['http://localhost:3001','http://127.0.0.1:5000'])
# configures the CORS (Cross-Origin Resource Sharing) extension to allow requests
# from two specific origins: http://localhost:3001 and http://127.0.0.1:5000.
# The Flask app will respond to requests from both http://localhost:3001 and http://127.0.0.1:5000 with the appropriate CORS headers,
# allowing the React app running on either of those origins to access the Flask app's resources without encountering CORS errors.

def get_colors(msg):
    prompt = f"""
    You are a color scheme generating assistant that responds to text prompts for color schemes
    Your should generate color schemes that fit the theme, mood, or instructions in the prompt.
    The schemes should be between 2 and 5 colors.

    Q: Convert the following verbal description of a color scheme into a list of colors: Google
    A: ["#4285F4", "#DB4437", "#F4B400", "#F4B400", "#0F9D58"]

    Q: Convert the following verbal description of a color scheme into a list of colors: christmas, warm, joy
    A: ["#165B33", "#146B3A", "#EA4630", "#F8B229"]


    Desired Format: a JSON array of hexadecimal color codes

    Q: Convert the following verbal description of a color scheme into a list of colors: {msg} 
    A:
    """

# tokens count: 1 token ~= 4 chars in English. 1 token ~= ¾ words. 100 tokens ~= 75 words.
# for davici models ,they cost 	$0.1200 / 1K tokens or 12 cents for approx every 750 words
# for different models visit https://platform.openai.com/docs/models/gpt-3-5
    response = openai.Completion.create(
        prompt=prompt,
        model="text-davinci-003",
        max_tokens=100,   
    )

    colors = json.loads(response["choices"][0]["text"])
    return colors

@app.route("/colorscheme", methods=["POST"])
def prompt_to_colorscheme():
    query = request.form.get("query")
    colors = get_colors(query)
    return {"colors": colors}
    

@app.route("/", methods=['GET'])
def index():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)
