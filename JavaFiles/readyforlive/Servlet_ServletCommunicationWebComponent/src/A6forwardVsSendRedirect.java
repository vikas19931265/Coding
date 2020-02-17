/*

Difference between Send Redirect and foward methods
============================================================





forward() method                                                                sendRedirect()
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The forward() method works at server side.                                   The sendRedirect() method works at client side.

It sends the same request and response objects to another servlet.           It always sends a new request.

It can work within the server only.                                          It can be used within and outside the server.

Example: request.getRequestDispacher("servlet2").forward(request,response);	Example: response.sendRedirect("servlet2");


*/