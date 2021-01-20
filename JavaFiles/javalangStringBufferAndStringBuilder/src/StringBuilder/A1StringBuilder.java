/*

StringBuilder
===============================================================================-

1.Every method present inside the StringBuffer is synchronized method and hence only one
 thread is allowed to operate on StringBuffer object at a time which may create performance
 problems.

2. To handle this requirement SUN introduced StringBuilder concept in 1.5 version.

3. StringBuilder is exactly same as StringBuffer except the following differences.

    
Java StringBuilder class is used to create mutable (modifiable) string. The Java StringBuilder class 
is same as StringBuffer class except that it is non-synchronized. It is available since JDK 1.5.



StringBuffer                                                                                 StringBuilder
-----------------------------------------------------------------------------------------------------

1. Every method present inside the StringBuffer is synchronized .                    1. Every method  present inside StringBuilder is non synchronized.


2. At a time only one thread is allowed to operate on StringBuffer                   2. At a time multiple threads are allowed to operate on the StringBuilder   
   object and hence StringBuffer object is Thread Safe.                                 object and hence StringBuilder is not thread safe.



3. Threads are required to wait to operate on StringBuffer object and hence          3. Threads are not required to wait to operate upon StringBuilder object and hence 
   relatively peroformace is low.                                                       hence relatively performace is high.


4. StringBuffer concept came in 1.0 version.                                        4. StringBuilder concept was introduced in 1.5 version.



Note
-------

Except the above differences everything is same in StringBuffer and StringBuilder (including methods and constructors)


*/

