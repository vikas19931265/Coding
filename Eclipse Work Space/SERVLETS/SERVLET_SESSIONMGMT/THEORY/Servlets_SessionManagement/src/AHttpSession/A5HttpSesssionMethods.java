/*

How To get HttpSession object
==================================

The HttpServletRequest interface provides two methods to get the object of HttpSession:

public HttpSession getSession():

    Returns the current session associated with this request, or if the request does not have a session, creates one.


public HttpSession getSession(boolean create):

    Returns the current HttpSession associated with this request or, if there is no current session and create is true, returns a new session.
    If return is false and no HttpSession object is associated with the request then null will be returned.



Commenly used methods of the HttpSession
=============================================

public String getId()

    Returns a string containing the unique identifier value.

public long getCreationTime():

    Returns the time when this session was created, measured in milliseconds since midnight January 1, 1970 GMT.

public long getLastAccessedTime():

    Returns the last time the client sent a request associated with this session, as the number of milliseconds since midnight January 1, 1970 GMT.

public void invalidate():

    Invalidates this session then unbinds any objects bound to it.


*/