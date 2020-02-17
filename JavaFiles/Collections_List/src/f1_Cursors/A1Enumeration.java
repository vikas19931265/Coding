/*

3 cursors of java.
===============================================================

If we want to get Objects one by one from the collection then we should go for the Cursor.

There are three types of cursors available in java.

    1.Enumeration
    2.Iterator
    3.ListIterator.


Enumeration.
=============

We can use enumeration to get Objects one by one at a time from legacy collection object

We can create the enumeration Object by using elements() methods of Vector class.

            public Enumeration elements();

eg:
        Enumeration e = v.elements(); ("v" is Vector Object)


Enumeration methods
=======================

public boolean hasMoreElements();

public Object nextElement();


*/
package f1_Cursors;

import java.util.Enumeration;

import java.util.Vector;


 class EnumerationDemo
{
   public static void main(String[] args)
   {
       Vector v = new Vector();
       
       for(int i=0; i<=10;i++)
       {
           v.addElement(i);
       }
       
      
      
       System.out.println(v);
   
       Enumeration e = v.elements();
       
       while(e.hasMoreElements())
       {
           Integer I =(Integer)e.nextElement();//return type of nextElement() is object. Hence we have to typecast it from object type to integer.
          
           if(I%2==0)
           {
               System.out.println(I);
           }
           
           
       }
       System.out.println(v);
   }
}

/*
o/p

run:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
0
2
4
6
8
10
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

/*
/*

Limitations of Enumerations.

1. We can apply enumeration concept only for the legacy classes and it is not a universal 
   cursor.

2. By using enumeration we can get only read access but we cannot perform any kind of 
   remove operation.

3. To overcome above limitations we should go for iterator.



*/

//-------------------------------------------------------------------**********************----------------------------------------------------