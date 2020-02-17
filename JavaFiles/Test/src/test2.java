
import java.util.*;

class Testing
{
    public static void main(String[] args)
    {
        List list = new ArrayList();
        
        Student s = new Student();
        
        
        list.add("vikas");
        list.add(s);
        
        Iterator it= list.iterator();
        while(it.hasNext())
        {
            
           
            if(it.next() instanceof Student)
            {
                System.out.println("True");
            }
            
            System.out.println(it.next());
            
        }
           
    }
    
}


class Student
{
    
    String name="vikas";
    
}