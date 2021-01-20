package SortedMap1_Hashtable1_PropertyFile1;

// Customized Sorting by Vikas in TreeMap : sorting based on employeeID

import java.util.*;

 class CustomizedSotringpgm
{
    
    public static void main(String[] args)
    {
        
        TreeMap m = new TreeMap(new Employee());
        
        Employee e = new Employee(10);
        
        Employee e1= new Employee(50);
        
        Employee e2= new Employee(34);
        
        m.put(e.EmployeeId, "Vikas");
        
        m.put(e1.EmployeeId, "Sachin");
        
        m.put(e2.EmployeeId , "Bhajji");
        
        
        System.out.println(m);
        
        
        
    }
    
    
}


class Employee implements Comparator
{
    int EmployeeId;
    
    
    Employee()
    {
        
        
        
    }
    
    Employee(int EmployeeId)
    {
        
      this.EmployeeId= EmployeeId;
    
        
    }
    
    public int compare( Object obj1, Object obj2)
    {
        
        Integer int1= (Integer) obj1;
        
        Integer int2= (Integer) obj2;
        
        if(int2> int1)
        {
            return -1;
            
       }
       
       else if(int2< int1)
       {
           
           return +1;
       }
        
      else
      {
          return 0;
          
      }
        
        
    }
    
    
    
}


/*
$java -Xmx128M -Xms16M CustomizedSotringpgm
{10=Vikas, 34=Bhajji, 50=Sachin}

*/

