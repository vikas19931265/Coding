/*

ListIterator listIterator(int index)

    It is used to return an iterator to the invoking list that begins at the specified index.
*/


package a2_ListInterface_Methods;

import java.util.*;

 class G_listIterator {
    
public static void main(String[] args)
{
    ArrayList a = new ArrayList();
    
    a.add("Ravi");
    a.add("vikas");
    a.add("imran");
    
    ListIterator itr= a.listIterator(1); // This List iterator will begin from the index 1 not from 0.
    
    while(itr.hasNext())
    {
        System.out.println(itr.next());
    }


    ListIterator itr2= a.listIterator(1);// This will iterate backwards after 1 position. The only element
                                         // left after the first position is "Ravi" hence the output is Ravi.
    
    System.out.println("------hasPrevious()------");
    
    while(itr2.hasPrevious())
    {
        System.out.println(itr2.previous());// Traversing backwards with the help of ListIterator previous() method.
    }


}}

/*
run:
vikas
imran
------hasPrevious()------
Ravi
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//-----------------------------------------------------------------------************-----------------------------------------------------------------------------------