/*

forward vs include methods
========================================

Forward() vs include
====================


-> This can be done in two ways by Request & ServeletContext. 
   Forwarding a request from a servlet to another resource (servlet, JSP file, or HTML file) on the server. 
   Forward is done at server side, without the client's knowledge.

-> When you invoke a forward request, the request is sent to another resource on the server, 
   without the client being informed that a different resource is going to process the request. 
   This process occurs completely with in the web container.

Simply

include: will include another file in our current file

forward: will forward the current request to the forwarding page


-> The main difference is that when you use forward the control is transferred to 
   the next servlet/jsp you are calling, while include retains the control with the current servlet, 
   it just includes the processing done by the calling servlet/jsp(like doing any out.println or other processing).

-> Example you have a servlet which provides registration, in order to do a caluclation it needs another servlet,
   hence in case of include() method servlet will just transfer the objects to calculator servlet. Once the caculation
   is done control will come back to the main servlet which does not happen in case of forward where the control is lost.


nice explanation
=====================

The difference between the two tags is that the way they work. Well, I will say an example so
that you can imagine it better.

Assume you have two pages, pageA, and pageB. In pageA you wrote the include tag. In this case
the control was in pageA til you called the include tag. At this point the full control goes to pageB. 
When It's done, control is returned to pageA starting from the next point of coding after the 
include tag and continuing to the rest of pageA.

Well, to get things much clearer, let's say that we have the same pages, pageA and pageB, 
but this time we will use the forward tag in pageA, not the include tag. Again, the control will
begin in pageA till we call the forward tag in pageA, at this point, control is transfered to pageB, 
just like the include tag. But the difference is what happens when pageB completes. In case of the forward tag, 
control doesn't go back to pageA again.



*/