package Operators;

/*

instanceof operator
======================================================

1. We can use instanceof operator in order to check whether the given object is of particular
   type or not.


syntax of instanceof operators
----------------------------------

        r instanceof X
        |             |  
object reference        class|interface name.
        



*/

import java.util.*;

class InstanceOf
{
    
    public static void main(String[] args)
    {
        
        ArrayList a = new ArrayList();
        
       Students s1= new Students("Vikas",1);
       Students s2= new Students("Saching",2);
       Students s3= new Students("Dravid",3);
       
       Customer c1= new Customer("hari",1);
       Customer c2= new Customer("prakash",2);
       
       a.add(s1);
       
       a.add(s2);
       
       a.add(s3);
       
       a.add(c1);
       
       a.add(c2);
       
       Iterator itr = a.iterator();
       
       while(itr.hasNext())
       {
           Object o= itr.next();
           
           if(o instanceof Students)
           {
           
           System.out.println( ((Students) (o)).name   );
           }
           
           else if( o instanceof Customer)
           {
                  System.out.println( ((Customer) (o)).cname   );
           }
       
       
        
    }
    
}

}
class Students
{
    
    String name;
    
    int rollno;
    
    Students( String name , int rollno)
    {
        this.name=name;
        this.rollno=rollno;
        
    }
}


class Customer
{
    String cname;
    
    int cid;
    
    Customer( String cname , int cid)
    {
        this.cname=cname;
        this.cid=cid;
    }
}


/*
run:
Vikas
Saching
Dravid
hari
prakash
BUILD SUCCESSFUL (total time: 0 seconds)

*/