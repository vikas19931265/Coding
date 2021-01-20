/*
 public void remove();

*/
package f1_IteratorMethods;

import java.util.*;

class Remove {
    
public static void main(String[] args)
{
    ArrayList a = new ArrayList();
    
    a.add(10);
    
    a.add(20);
    
    a.add("Vikas");
    
    a.add(new Student());
    
    Student s = new Student();
    
    
    ListIterator itr2 = a.listIterator();
    
    while(itr2.hasNext())
    {
      
        Object o = itr2.next(); // note how we have stored the value of collections into object reference 
                                // we will perform test condition on this. This will ensure that we do
                                // not use next() several times inside one time loop. If we try to put if condition
                                //using hasNext() then cursor will move few places more and will give us irregular output.
        
        if(o instanceof Student)
       {
          
           
           itr2.remove();
           
           /*
           Student s1= (Student)o;
           
           System.out.println(s1.name);
           
           */
           
       
       }
        

       else
      {
       
       
           System.out.println(o);
    
       }
       
    }
    
}


/*
run:
10
20
Vikas
Vikas Gautam
BUILD SUCCESSFUL (total time: 0 seconds)


note

While iterating do not use itr.next() multiple time as it will take the cursor
to next place and we will get the irregular output.

Instead of that use obj.next() one time and store its value on some variable and perform
test condition on that.
*/

}


class Student
{
    
    String name="Vikas Gautam";
}


//---------------------------------------------------------------------*********************----------------------------------------------