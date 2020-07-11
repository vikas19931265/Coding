/*

How to get the object of RequestDispatcher
========================================================

The getRequestDispatcher() method of ServletRequest interface returns the object of RequestDispatcher. Syntax:

Syntax of getRequestDispatcher method

    public RequestDispatcher getRequestDispatcher(String resource);  

Example of using getRequestDispatcher method


RequestDispatcher rd=request.getRequestDispatcher("servlet2");  

//servlet2 is the url-pattern of the second servlet  
  
    rd.forward(request, response);//method may be include or forward  



*/