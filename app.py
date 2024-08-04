from flask import Flask, send_from_directory, request, jsonify
from openai import AzureOpenAI
import os
import dotenv

# Load environment variables
dotenv.load_dotenv()
AOAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AOAI_KEY = os.getenv("AZURE_OPENAI_API_KEY")
MODEL_NAME = "gpt-35-turbo"

# Set up the client for AI Chat
client = AzureOpenAI(api_key=AOAI_KEY, azure_endpoint=AOAI_ENDPOINT, api_version="2024-05-01-preview")

SYSTEM_MESSAGE = "You are a helpful assistant."

# Function to get AI response with context
def get_response(question, chat_history):
    # Create the message history
    messages = [{"role": "system", "content": SYSTEM_MESSAGE}]
    messages.extend(chat_history)
    messages.append({"role": "user", "content": question})

    response = client.chat.completions.create(
        model=MODEL_NAME,
        temperature=0.7,
        n=1,
        messages=messages,
    )
    answer = response.choices[0].message.content
    return answer

# Create a flask app
app = Flask(__name__, static_folder='frontend/build/', static_url_path='/')

# Routes
@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

# API route for getting chat message
@app.route('/api/get-message', methods=['POST'])
def get_message():
    data = request.json
    question = data['message']
    chat_history = data.get('context', [])
    resp = get_response(question, chat_history)
    return jsonify({"resp": resp})


if __name__ == '__main__':
    app.run(debug=True)
