/*
ServletOutputStream class
===============================================

ServletOutputStream class provides a stream to write binary data into the response. It is an abstract class.

The getOutputStream() method of ServletResponse interface returns the instance of ServletOutputStream class. It may be get as:

ServletOutputStream out=response.getOutputStream();  

Methods of ServletOutputStream class
=========================================================

The ServletOutputStream class provides print() and println() methods that are overloaded.

void print(boolean b){}
void print(char c){}
void print(int i){}
void print(long l){}
void print(float f){}
void print(double d){}
void print(String s){}
void println{}
void println(boolean b){}
void println(char c){}
void println(int i){}
void println(long l){}
void println(float f){}
void println(double d){}
void println(String s){}


*/