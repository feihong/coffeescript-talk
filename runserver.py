from SimpleHTTPServer import SimpleHTTPRequestHandler
from SocketServer import TCPServer

httpd = TCPServer(("", 8000), SimpleHTTPRequestHandler)
print "Serving on port 8000"
httpd.serve_forever()
