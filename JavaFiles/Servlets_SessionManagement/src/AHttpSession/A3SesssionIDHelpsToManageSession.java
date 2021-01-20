/*

Q: If we allow multiple number of users to access present web application then automatically
container will create multiple number of HttpSession objects. In this case how container will
identify user specific HttpSession object in order to put user specific attributes and to get
attributes?
==================================================================================================

ANS:

-> In HttpSession Session Tracking Mechanism, when we create HttpSession object automatically
  container will create an unique identification number in the form of hexadecimal number called as
  Session Id.

-> Container will prepare session id in the form of Cookie with the name JSESSIONID.

-> In general the basic nature of Cookie is to transfer from server to client automatically along with
  response and it will be transferred from client to server automatically along with request.

-> Due to the above nature of Cookies session id Cookie will be transferred from server to client and from
   client to server automatically.

-> In the above context, if we use getSession() method or getSession(false) method first container will
   pick up session id value from request and it will identify the user specific HttpSession object on the
   basis of session id value.

-> To destroy HttpSession object explicitly we will use the following method from HttpSession.

                        public void invalidate()


-> If we want to destroy HttpSession object after a particular ideal time duration then we have to use the
following method.

                public void setMaxInactiveInterval(int time)


-> In web applications, HttpSession object will allow only attributes data, it will not allow parameters
   data.

-> To set an attribute on to the HttpSession object we have to use the following method.

                public void setAttribute(String name, Object value)


-> To get a particular attribute value from HttpSession object we have to use the following method.

                public Object getAttribute(String name)
       
-> To remove an attribute from HttpSession object we have to use the following method.

                public void removeAttribute(String name)


-> To get all attribute names from HttpSession object we have to use the following method.

               public Enumeration getAttributeNames()


*/