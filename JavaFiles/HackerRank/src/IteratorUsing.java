/*

itr is basically a cursor which is pointing to the elements
*/
import java.util.ArrayList;
import java.util.Iterator;

class IteratorUsing
{
    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();
        l.add(1);
        l.add(2);
        l.add(3);
        l.add("#");
        l.add(4);
        
        Iterator itr= l.iterator();
       while(itr.hasNext())
       {
           Object element= itr.next();
           if(element instanceof java.lang.String)
           {
               break; // after this line itr cursor is pointing to last element that is 4.
           }
       }
    
       while(itr.hasNext())
       {
           System.out.println(itr.next());
       }
    }
}

/*
run:
4
BUILD SUCCESSFUL (total time: 0 seconds)

*/