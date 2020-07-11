/*

HTTP Protocol.

1. The request sent by the computer to a web server, contains all sorts of potentially 
   interesting information; it is known as HTTP requests. 

2. Whenever you issue a URL from your browser to get a web resource using HTTP, e.g. http://www.nowhere123.com/index.html, 
  the browser turns the URL into a request message and sends it to the HTTP server. The HTTP server interprets the 
  request message, and returns you an appropriate response message, which is either the resource you requested or an error message. 
  This process is illustrated below:

        
        i. user issues a URL from a browser.
       
       ii. browser sends a request message
       
                    GET URL HTTP/1.1
                    Host: host:port

       iii) Server/servlet maps the URl to a file or a program under the document directory.

       iv) Server sends an HTTP response

            HTTP/1.1 200 OK

        v) Browser formats the response and displays it. 



3. A URL (Uniform Resource Locator) is used to uniquely identify a resource over the web.
   URL has the following syntax:

        protocol://hostname:port/path-and-file-name

        by default if we are not writing any port number then it is 80 that is HTTP protocol.

4. There are 4 parts in a URL:

    Protocol: The application-level protocol used by the client and server, e.g., HTTP, FTP, and telnet.
    Hostname: The DNS domain name (e.g., www.nowhere123.com) or IP address (e.g., 192.128.1.2) of the server.
    Port: The TCP port number that the server is listening for incoming requests from the clients.
    Path-and-file-name: The name and location of the requested resource, under the server document base directory.


5. For example, in the URL http://www.nowhere123.com/docs/index.html, the communication protocol is HTTP; 
   the hostname is www.nowhere123.com. The port number was not specified in the URL, 
   and takes on the default number, which is TCP port 80 for HTTP. The path and file name for the 
   resource to be located is "/docs/index.html".



6. Whenever you enter a URL in the address box of the browser, the browser translates the URL into
   a request message according to the specified protocol; and sends the request message to the server.


7. For example, the browser translated the URL http://www.nowhere123.com/doc/index.html into the following request message:

GET /docs/index.html HTTP/1.1
Host: www.nowhere123.com
Accept: image/gif, image/jpeg, 
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
(blank line)



8. When this request message reaches the server, the server can take either one of these actions:

    The server interprets the request received, maps the request into a file under the server's document directory, and returns the file requested to the client.
    The server interprets the request received, maps the request into a program kept in the server, executes the program, and returns the output of the program to the client.
    The request cannot be satisfied, the server returns an error message.


9. An example of the HTTP response message is as shown:

HTTP/1.1 200 OK
Date: Sun, 18 Oct 2009 08:56:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Sat, 20 Nov 2004 07:16:26 GMT
ETag: "10000000565a5-2c-3e94b66c2e680"
Accept-Ranges: bytes
Content-Length: 44
Connection: close
Content-Type: text/html
X-Pad: avoid browser bug
  
<html><body><h1>It works!</h1></body></html>



10.The browser receives the response message, interprets the message and displays the 
   contents of the message on the browser's window according to the media type of the response 
   (as in the Content-Type response header). Common media type include "text/plain", "text/html",
   "image/gif", "image/jpeg", "audio/mpeg", "video/mpeg", "application/msword", and "application/pdf".

*/


