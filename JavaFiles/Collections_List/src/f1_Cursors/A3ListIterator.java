/* ListIterator
============================================================

1. By using enumeration and iterator we can move only in the forward direction and we 
   cannot move in the backward direction. These are single direction cursors but not 
   bidirectional cursors.

2. By using iterator we can perform only read and remove operations and we cannot perform
   replacement and addition of new objects.

3. To overcome above limitations we should go for ListIterator.

4. By using ListIterator we can move either to the forward direction or to the backward
   direction and hence it is bidirectional cursor.

5. By using ListIterator we can perform replacement and addition of new objects in addition to
   read and remove operations.


How to create ListIterator object??

We can create ListIterator by using listIterator method of List interface

        public ListIterator listIterator();

        ListIterator ltr= l.listIterator(); 


ListIterator is the child interface of iterator and hence all methods which are present in iterator
are by default available to the listIterator.

                Iterator( 3 methods/ interface)
                    ^    
                    |        child
                    |    
                 ListIterator(6 methods/ child of Iterator)


ListIterator defines the following 9 methods.

forward movement

        public boolean hasNext();
        public Object next();
        public int nextIndex();

backward movement

        public boolean hasPrevious;
        public Object previous();
        public int prevoiousIndex();

Extra methods

        public void remove();
        public void add(Object o);
        public void set(Object o);
                    

The most powerful cursor is ListIterator but its limitation is that it applicable only for List objects.

*/
package f1_Cursors;

import java.util.LinkedList;
import java.util.ListIterator;
import java.util.*;

class Demo
{
    public static void main(String[] args)
    {
        LinkedList l = new LinkedList();
        l.add("balakrishna");
        l.add("venki");
        l.add("chiru");
        l.add("nag");
        
        System.out.println(l); //[balakrishna, venki, chiru, nag]
        ListIterator  itr= l.listIterator();
        
        while(itr.hasNext())
        {
            String s=(String)itr.next();
        
            if(s.equals("venki"))
            {
                itr.remove(); //[balakrishna, chairu, nag, chaitu]
            }
        
            else if(s.equals("nag"))
            {
                itr.add("chaitu");
            }
        
            else if(s.equals("chiru"))
            {
                itr.set("charan"); //replace chiru with charan.
            }
        
        }
            System.out.println(l); //[balakrishna, charan, nag, chaitu]
    }
}

/*
o/p

run:
[balakrishna, venki, chiru, nag]
[balakrishna, charan, nag, chaitu]
BUILD SUCCESSFUL (total time: 0 seconds)
*/



class TestCollection8{  

    public static void main(String args[]){  

        ArrayList<String> al=new ArrayList<String>();  
        
        al.add("Amit");  
        al.add("Vijay");  
        al.add("Kumar");  
        al.add(1,"Sachin");  

        int size= al.size();


        System.out.println("element at 2nd position: "+al.get(2));  
        ListIterator<String> itr=al.listIterator(size);  

        System.out.println("traversing elements in backward direction...");  
        while(itr.hasPrevious()){  
        System.out.println(itr.previous());  
}  
}  
}  

/*
run:
element at 2nd position: Vijay
traversing elements in backward direction...
Kumar
Vijay
Sachin
Amit
BUILD SUCCESSFUL (total time: 0 seconds)


*/
//-----------------------------------------------------------------------******************------------------------------