/*

DRAWBACKS:
======================================

1. In HttpSession Session Tracking Mechanism, we will create a separate HttpSession object for each
and every user, where if we increase number of users then automatically number of HttpSession object
will be created at server machine, it will reduce the overall performance of the web application.


2. In case of HttpSession Session Tracking Mechanism, we are able to identify user specific
HttpSession object among multiple number of HttpSession objects by carrying Session Id value from
client to server and from server to client.


In the above context, if the client browser disable Cookies then HttpSession Session Tracking
Mechanism will not execute its functionality.




*/