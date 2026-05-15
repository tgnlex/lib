from http.server import BaseHTTPRequestHandler, HTTPServer
import logging 

content = { 'html': "text/html", 'json': "application/json" }
headers = { 'ctype': "Content-Type" }


class Handler(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header(headers['ctype'], content['html'])
        self.end_headers()
    def do_GET(self):
        logging.info("[HTTP]\nMETHOD: GET \nPATH: %s \nHEADERS: %s\n ", str(self.path), str(self.headers))
        self._set_response()
        self.wfile.write(b"Hello World!")

def configure():
    logging.basicConfig(level=logging.DEBUG)
    HOST = input("Enter a host ip: ")
    PORT = input("Enter a host port: ")
    return [HOST, PORT]


def start():
    [HOST, PORT] = configure()
    logging.info('[HTTP] Serving on http://{}:{}'.format(HOST, PORT))
    server = HTTPServer((HOST, int(PORT)), Handler)
    try: 
        server.serve_forever()
    except KeyboardInterrupt:
        pass 
    server.server_close()
    logging.info('[HTTP] Shutting down server...')
    

start()
