package collections_utilityclass;

/*

Collections class
=========================

1. Collections class defines several utility methods for Collection objects like sorting
   searching,reversing etc.


2. Collection class contains these sort methods because for Set and Queue we have sorting feature
   but its absent in case of List. 


Sorting elements of the List
==================================


1. Collections class defines the following two sort methods.


i. public static void sort(List l)

        To sort based upon Default Natural Sorting Order.

   But in this case List should compulsary contain homogenous and comparable objects otherwise we will get RunTime
   Exception saying ClassCastException.

   Also the List should not contain null otherwise we will get NullPointerException.



****ii. public static void sort(List , Comparator c)

        To Sort based upon Customized sorting order.




*/

//------------------------------------------------------------------*********************---------------------------------------------
