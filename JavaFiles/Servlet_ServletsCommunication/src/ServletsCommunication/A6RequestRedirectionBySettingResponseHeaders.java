/*

2. Request Redirection by setting Response Headers:
================================================================

-> In this mechanism, first we will send a request to first web application, where first web application
  will set Redirectional Status Code to Status Line field and new web application URl to Location 
  Response Header.

-> When the Response Format reached to the client then client will pick up Redirectional status code
  value from Status Line field, with this client browser will pick up Location Response Header value i.e.
  new web application URL then client browser will send a new request to new web application.

-> By executing some resources at new web application the required response will be generated at client
  machine.

To represent Request Redirection HttpServletResponse has introduced the following 2 constants.

1. public static final int SC_MOVED_TEMPORARILY;
2. public static final int SC_MOVED_PERMANENTLY;

To set a particular status code value to Response Header we will use the following method.

    public void setStatus(int statuscode)

To set a particular Response Header value in Response Format we have to use the following method.

    public void setHeader(String header_name, String value)


Drawback
==========================

To perform Request Redirection, if we use this approach then every time we have to set Redirectional
status code and new web application URL to Location Response Header.
*/