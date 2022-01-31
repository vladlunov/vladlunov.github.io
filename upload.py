from flask import Flask, request, send_file

app = Flask(__name__)

ip = "null"
file_path = "null"

@app.route("/", methods=["GET"])
def main():
    if (request.remote_addr == ip):
        return send_file(file_path)
    else:
        return "Access denied "+request.remote_addr

app.run(host="0.0.0.0")
