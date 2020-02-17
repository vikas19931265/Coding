/*

How to delete Cookie?
=========================================

Let's see the simple code to delete cookie. It is mainly used to logout or signout the user.

Cookie ck=new Cookie("user","");//deleting value of cookie  

ck.setMaxAge(0);//changing the maximum age to 0 seconds  

response.addCookie(ck);//adding cookie in the response 


*/