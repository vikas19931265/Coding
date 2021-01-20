/*

Memory leaks;
===============================================================

The objects which are not used in our program and which are not eligible for gc.
Such type of useless objects are called memory leaks. In our program if memory 
leaks is present then the program will get terminated by raising OutOfMemoryError.


Hence if the object is no longer required then it is highly recommended to make
the object eligible for the garbage collection.

The following are the various third party memory management tools to identify the
memory leaks.

HP OVO
HP J Meter
JProbe
Patrol
IBM Tivoli


*/
