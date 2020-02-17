package c_SortingTechniques_Comparable_Comparator;

/*

Comparable vs Comparator.
================================================================================================


1. For predefined comparable classes default natural sorting order is already available.

2. If we are not satisfied with the default natural sorting order then we can define our own sorting
   by using Comparator.

3. For predefined non comparable classes( like StringBuffer) default natural sorting order is 
   not present. We can define our own sorting by using comparator.

4. For our own classes , like employee , the person who is writing the class is responsible
   to define natural sorting order by implementing comparable interface.


   The person who is using our class , if is not satisfied with default natural order then
   he/she can define his own sorting by using comparator.


5. String class already provides implementation for the compareTo() method.


pre-Defined comparable class----> like String------go for Comparator

pre-Defined noncomparable class---> like StringBuffer-----> go for Comparator

our own class---------------------> like Employees-------->  who is writing class to use (comparable)
                                                             the person not satisfied with class use (comparator)   



*/


//----------------------------------------------------------************************************-------------------------------------