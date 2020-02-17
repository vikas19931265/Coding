/* 

Why to go for the Collection????
==============================

An Array is an indexed collection of fixed number of homogeneous data elements.

The main advantage of array is that we can represent multiple values by using a single variables so 
that the readability of the code will be improved.

Limitations of arrays.
==============================================

1. Arrays are fixed in size that is once we create an array there is no chance of increasing or
   decreasing the size based on our requirement due to this  to use arrays concepts compulsory we 
   should know the size in advance which may be not be always possible.

2. Arrays can hold only homogeneous data type elements example 

     Student[] s = new Student[100000];
     s[0]= new Student(); valid
     s[1]= new Customer(); invalid
     
    CE: incompatible types
    found: Customer
    required: Student
     
   We can still solve this problem by using Object type arrays.

    Object[] a = new Object[1];
    a[0]= new Student(); valid
    a[1] = new Customer(); valid

3. Arrays concept is not implemented based on some standard data structure and hence readymade method support
   is not available. For every requirement we have to write the code explicitly which increases the 
   complexity of programming.


To overcome above problems of arrays we should go for Collections concept


1. Collections are grow able in nature that is based on our requirement we can increase our 
   decrease the size.

2. Collections can hold both homogeneous and heterogeneous Objects.(COLLECTION STORES ONLY OBJECTS NOT PRIMITIVES).

3. Every collection class is implemented based on some standard data structure hence for every
   requirement ready made method support is available. Being a programmer we are responsible to use those
   methods and we are not responsible to implement those methods.

*/

//---------------------------------------------------------------------**************************---------------------------------