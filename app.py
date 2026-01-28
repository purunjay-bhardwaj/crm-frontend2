from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/message", methods=["POST"])
def receive_message():
    data = request.get_json()
    print("📩 Message from frontend:", data["message"])
    return jsonify({"status": "received"})

if __name__ == "__main__":
    app.run(debug=True)

