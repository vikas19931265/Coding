package d1_VectorMethods;

/*

void addElement(Object element):

            This will insert the element at the end of the Vector.
*/

import java.util.*;




 class AddElement {
    

 public static void main(String[] args)
 {
     Vector v = new Vector();
     v.addElement(10);
     
     v.addElement(20);
 
 
     
     for(Object o : v)
     {
         System.out.println(o);
     }
 
 
 }
 
 
 
 }

/*
run:
10
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------------------*****************--------------------------