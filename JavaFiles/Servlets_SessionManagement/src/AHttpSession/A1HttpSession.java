/*

HttpSession Tracking Mechanism
===========================================================

In HttpSession Session Tracking Mechanism, we will create a separate HttpSession object for each
and every user, at each and every request we will pick up the request parameters from request object
and we will store them in the respective HttpSession object for the sake of future reusability.

After keeping the request parameters data in HttpSession object we have to generate the next form at
client browser by forwarding the request to particular static page or by generating dynamic form.

In HttpSession Session Tracking Mechanism, to create HttpSession object we will use either of the
following methods.


1. req.getSession();
2. req.getSession(false);



*/