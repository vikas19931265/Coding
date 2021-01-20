/*void A_add(int index,Object element) 	

It is used to insert element into the invoking list at the index passed in the
index */


package a2_ListInterface_Methods;
import java.util.*;

 class A_add 

{
    
    public static void main(String[] args)
    {
        ArrayList a = new ArrayList();
        a.add("sachin");
        a.add("sehwag");
        a.add(0, "dravid"); // inserting element at the 0th index. This will push the 
                            // existing element at the 0th index into the first index.
        
        System.out.println(a);
        
        
    
    }


}

/*
run:
[dravid, sachin, sehwag]
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//---------------------------------------------------------------------*******************-------------------------------------------------------------------------------------