package StringBuffer2;

/*
StringBuffer[ thread safe]
================================================================================

If the content is fixed and wont change frequently then it is recommended to go for String.

If the content is not fixed and keep on changing then it is not recommended to use String because
for every change a new object will be created which affects performance of the system.

To handle this requirement, we should go for StringBuffer. The main advantage of the StringBuffer
over String is that all the required changes will be performed in the existing object only.


Java StringBuffer class
================================================================================

Java StringBuffer class is used to create mutable (modifiable) string. The StringBuffer 
class in java is same as String class except it is mutable i.e. it can be changed.



Note: Java StringBuffer class is thread-safe i.e. multiple threads cannot access it simultaneously. 
So it is safe and will result in an order.



*/

