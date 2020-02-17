
/*
public boolean hasPrevious();

public Object previous();


*/


package f3_ListIteratorMethods;

import java.util.*;

/*

This has all methods of Iterator + its own methods.

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


//------------------------------------------------------------------*****************************------------------------------------------------