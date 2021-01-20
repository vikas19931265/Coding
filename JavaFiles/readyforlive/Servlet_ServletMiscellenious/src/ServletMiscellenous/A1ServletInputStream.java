/*

ServletInputStream class
===================================================================

ServletInputStream class provides stream to read binary data such as image etc. 
from the request object. It is an abstract class.

The getInputStream() method of ServletRequest interface returns the instance of ServletInputStream class. So can be get as:

ServletInputStream sin=request.getInputStream();  

Method of ServletInputStream class
========================================================================

There are only one method defined in the ServletInputStream class.

int readLine(byte[] b, int off, int len) it reads the input stream.


*/
