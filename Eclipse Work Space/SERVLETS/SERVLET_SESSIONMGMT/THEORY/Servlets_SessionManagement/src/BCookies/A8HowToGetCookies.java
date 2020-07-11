/*
How to get Cookies?
=========================================


Let's see the simple code to get all the cookies.

Cookie ck[]=request.getCookies();  
for(int i=0;i<ck.length;i++){  
 out.print("<br>"+ck[i].getName()+" "+ck[i].getValue());//printing name and value of cookie  
}  


*/