/*
ListIterator listIterator()

    It is used to return an iterator to the start of the invoking list.
*/

package a2_ListInterface_Methods;

import java.util.*;

 class F_listIterator {
    
public static void main(String[] args)
{
    ArrayList a = new ArrayList();
    
    a.add("Ravi");
    a.add("vikas");
    a.add("imran");
    
    ListIterator itr= a.listIterator();
    
    while(itr.hasNext())
    {
        System.out.println(itr.next());
    }


    System.out.println("------hasPrevious()------");
    
    while(itr.hasPrevious())
    {
        System.out.println(itr.previous());// Traversing backwards with the help of ListIterator previous() method.
    }

    
    /*
    
    Note that once we start ,itr.hasNext() loop, the pointer reaches end of Collection object
    and from there on we are checking for hasPrevious ,however if we dont take the pointer to 
    end of the collection using hasNext() method then we will not get the proper output.
    
    Hence to take the pointer to end we can do
            
            ListIterator itr = a.listIterator(a.size());
    
    */

}}


/*
run:
Ravi
vikas
imran
------hasPrevious()------
imran
vikas
Ravi
BUILD SUCCESSFUL (total time: 0 seconds)




*/

//-----------------------------------------------------------------------*************-----------------------------------------------------------------------------------