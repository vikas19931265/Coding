/*
public boolean hasNext();

*/
package f1_IteratorMethods;

import java.util.*;

class Demo4 {
    
    public static void main(String[] args)
    {
        ArrayList a = new ArrayList();
        
        a.add(10);
        
        a.add(20);
        
        Iterator itr = a.iterator();
        
        while(itr.hasNext())
        {
            System.out.println(itr.next());
        }
        
    }
}
/*
run:
10
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//------------------------------------------------------------------**************************------------------------------------------