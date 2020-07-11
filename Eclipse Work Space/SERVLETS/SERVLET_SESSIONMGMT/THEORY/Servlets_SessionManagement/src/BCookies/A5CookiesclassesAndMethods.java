/*

Cookies Classes And methods
===================================================

-> javax.servlet.http.Cookie class provides the functionality of using cookies. It provides a lot of useful methods for cookies.


Constructors of Cookie classes
===================================================


Cookie()	

    constructs a cookie.

Cookie(String name, String value)

    constructs a cookie with a specified name and value.


Useful Methods of Cookie class
===========================================================

There are given some commonly used methods of the Cookie class.


public void setMaxAge(int expiry)

        Sets the maximum age of the cookie in seconds.

public String getName()

    Returns the name of the cookie. The name cannot be changed after creation.


public String getValue()	

    Returns the value of the cookie.

public void setName(String name)

    changes the name of the cookie.


public void setValue(String value)	


    changes the value of the cookie.


Other methods required for using Cookies
==================================================

For adding cookie or getting the value from the cookie, we need some methods provided by other interfaces. They are:


public void addCookie(Cookie ck):

        method of HttpServletResponse interface is used to add cookie in response object.

public Cookie[] getCookies():

        method of HttpServletRequest interface is used to return all the cookies from the browser.


*/