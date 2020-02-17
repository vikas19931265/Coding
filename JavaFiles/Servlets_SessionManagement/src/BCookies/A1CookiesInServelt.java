/*

Cookies in Servlet
======================================================

-> A cookie is a small piece of information that is persisted between the multiple client requests.

-> A cookie has a name, a single value, and optional attributes such as a comment, path and domain qualifiers,
   a maximum age, and a version number.

-> Cookie is a small object, it can be used to represent a single name value pair and which will be
   maintained permanently at client machine.

-> In HttpSession Session Tracking Mechanism, if we increase number of users then automatically
  number of HttpSession objects will be created at server. So that HttpSession Session Tracking
  Mechanism will increase burden to server machine.

-> To overcome the above problem we have to use an alternative mechanism, where we have to manage
   all the clients conversations at the respective client machines only.

-> To achieve the above requirement we have to use Cookies Session Tracking Mechanism.

-> In Cookies Session Tracking Mechanism, at each and every client we will pick up all the request
  parameters, prepare a separate Cookie for each and every request parameter, add all the Cookies to
  response object.

-> In the above context, when container dispatch response to client automatically all the added Cookies
  will be transferred to client and maintain at client machine permanently.

-> In the above context, when we send further request from the same client automatically all the Cookies
   will be transferred to server along with request.

-> By repeating the above process at each and every request we are able to manage clients previous data
  at the time of processing later request.

DRAWBACKS:
============

1. If we disable the Cookies at client browser then Cookies Session Tracking Mechanism will not
execute its functionality.

2. In case of Cookies Session Tracking Mechanism, all the clients data will be maintain at the
respective client machine only, which is open to every user of that machine. So that Cookies
Session Tracking Mechanism will not provide security for the application data.



*/