package A1SessionManagementTechniques;

/*

SESSION:
==============================

Session is a time duration, it will start from the starting point of client conversation with server and
will terminate at the ending point of client conversation with the server.

The data which we transferred from client to server through multiple number of requests during a
particular session then that data is called State of the Session.

In general in web applications, container will prepare a request object similarly to represent a
particular user we have to prepare a separate session.

If we allow multiple number of users on a single web application then we have to prepare multiple
number of session objects.

In this context, to keep track of all the session objects at server machine we need a set of explicit
mechanisms called as Session Tracking Mechanisms.


-> HttpSession Session Tracking Mechanism
-> Coockies Session Tracking Mechanism
-> URL-Rewriting Session Tracking Mechanism
-> Hidden Form Fields Session Tracking Mechanism

From the above Session Tracking Mechanisms Servlet API has provided the first 3 Session Tracking
Mechanisms as official mechanisms, Hidden Form Fields Session Tracking Mechanism is purely
developers creation.


Session simply means a particular interval of time.

Session Tracking is a way to maintain state (data) of an user. It is also known as session management in servlet.

Http protocol is a stateless so we need to maintain state using session tracking techniques. 
Each time user requests to the server, server treats the request as the new request. So we need 
to maintain the state of an user to recognize to particular user.

HTTP is stateless that means each request is considered as the new request. 


*/