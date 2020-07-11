package aSERVLETS_CREATION;
/*

HttpServlet class
=================================

The HttpServlet class extends the GenericServlet class and implements Serializable interface. 
It provides http specific methods such as doGet, doPost, doHead, doTrace etc.

Methods of HttpServlet class
===================================

There are many methods in HttpServlet class. They are as follows:

public void service(ServletRequest req,ServletResponse res) 
            **dispatches the request to the protected service method by converting the request and response object into http type.

protected void service(HttpServletRequest req, HttpServletResponse res) 
            receives the request from the service method, and dispatches the request to the doXXX() method depending on the incoming http request type.

protected void doGet(HttpServletRequest req, HttpServletResponse res) 
            handles the GET request. It is invoked by the web container.

protected void doPost(HttpServletRequest req, HttpServletResponse res) 
            handles the POST request. It is invoked by the web container.

protected void doHead(HttpServletRequest req, HttpServletResponse res)
            handles the HEAD request. It is invoked by the web container.

protected void doOptions(HttpServletRequest req, HttpServletResponse res)
            handles the OPTIONS request. It is invoked by the web container.

protected void doPut(HttpServletRequest req, HttpServletResponse res) 
            handles the PUT request. It is invoked by the web container.

protected void doTrace(HttpServletRequest req, HttpServletResponse res)
            handles the TRACE request. It is invoked by the web container.

protected void doDelete(HttpServletRequest req, HttpServletResponse res)
            handles the DELETE request. It is invoked by the web container.

protected long getLastModified(HttpServletRequest req) 
            returns the time when HttpServletRequest was last modified since midnight January 1, 1970 GMT.

*/