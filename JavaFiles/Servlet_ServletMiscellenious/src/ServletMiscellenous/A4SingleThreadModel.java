/*

SingleThreadModel interface
================================================

-> The servlet programmer should implement SingleThreadModel interface to ensure that servlet can handle 
   only one request at a time. It is a marker interface, means have no methods.

-> This interface is currently deprecated since Servlet API 2.4 because it doesn't solves all 
   the thread-safety issues such as static variable and session attributes can be accessed by
   multiple threads at the same time even if we have implemented the SingleThreadModel interface. 
   
-> So it is recommended to use other means to resolve these thread safety issues such as synchronized block etc.



*/