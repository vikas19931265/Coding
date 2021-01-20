package A1SessionManagementTechniques;

/*

Session tracking mechanisms
===================================================================================

-> As part of the web application development it is essential to manage the clients previous request data
   at the time of processing later request.

-> To achieve the above requirement if we use request object then container will create request object
   when it receives request from client and container will destroy request object when it dispatch
   response to client

-> Due to this reason request object is not sufficient to manage clients previous request data at the time of
   processing later request.


-> To achieve the above requirement we able to use ServletContext object, but ServletContext object will
   share its data to all the components which are used in the present applications and to all the users of the
   present web application.

-> Due to this reason ServletContext object is unable to provide clear cut separation between multiple
   users.

-> In web applications, to manage clients previous request data at the time of processing later request and
   to provide separation between multiple users we need a set of mechanisms explicitly at server side
   called as Session Tracking Mechanisms.




*/