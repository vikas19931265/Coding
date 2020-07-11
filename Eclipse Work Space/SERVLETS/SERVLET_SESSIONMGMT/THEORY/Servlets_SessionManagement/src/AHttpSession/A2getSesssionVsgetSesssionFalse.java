/*

Q: What is the difference between getSession() method and getSession(false) method?
===========================================================================================================

ANS: Both the methods can be used to return HttpSession object.

-> To get HttpSession object if we getSession() method then container will check whether any
   HttpSession object existed for the respective user or not, if any HttpSession object is existed then
   container will return the existed HttpSession object reference.

-> If no HttpSession object is existed for the respective user then container will create a new HttpSession
  object and return its reference.

public HttpSession getSession()
EX: HttpSession hs=req.getSession();


-> To get HttpSession object if we getSession(false) method then container will check whether any
   HttpSession object existed w.r.t. user or not, if any HttpSession object is existed then container will
   return that HttpSession object reference.

-> If no HttpSession object is existed then container will return null value without creating new
   HttpSession object.

public HttpSession getSession(boolean b)
EX: HttpSession hs=req.getSession(false);

NOTE: getSession(true) method functionality is almost all same as getSession() method.


*/