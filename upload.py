from flask import Flask, request, send_file

app = Flask(__name__)

ip = "null"
file_path = "null"

@app.route("/", methods=["GET"])
def main():
    if (request.remote_addr == ip):
        return send_file(file_path)
    else:
        return "Access denied"

@app.route("/ip", methods=["GET"])
def ip():
    return "<h1>"+request.remote_addr+"</h1>"

app.run(host="0.0.0.0")
