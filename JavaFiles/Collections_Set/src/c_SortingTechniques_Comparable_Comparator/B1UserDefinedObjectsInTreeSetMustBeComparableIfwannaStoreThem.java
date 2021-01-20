/*

To store objects inside the TreeSet the class of respective types of objects 
must implement comparable interface.

String and wrapper classes implements comparable interface by default.

*/
package c_SortingTechniques_Comparable_Comparator;

import java.util.*;

class CompComp
{
    public static void main(String[] args)
    {
        Employee e1= new Employee("nag", 100);
        
        Employee e2= new Employee("balaiah" ,200);
   
        Employee e3= new Employee("chiru",50);
        
        Employee e4= new Employee("venki",150);
        
        Employee e5= new Employee("nag",100);
    
        TreeSet t  = new TreeSet();
        
        t.add(e1);
        
        t.add(e2);
        
                // e2.compareTo(e1);...current object is e2 now
        t.add(e3);
                //e3.compareTo(e2);
        
        t.add(e4);
                //e4.compareTo(e3);
                
        t.add(e5);
                //e5.compareTo(e4);
        
        System.out.println(t);
        
    }
} 
 class Employee implements Comparable
 
 {
    
     String name;
     int eid;
     
     Employee(String name, int eid)
     {
         this.name=name;
         this.eid=eid;
     }  

    @Override
    public int compareTo(Object t) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

  }

/*
Error

run:
Exception in thread "main" java.lang.UnsupportedOperationException: Not supported yet.
	at c.SortingTechniques_Comparable_Comparator.Employee.compareTo(NewClass.java:59)
	at java.util.TreeMap.compare(TreeMap.java:1294)
	at java.util.TreeMap.put(TreeMap.java:538)
	at java.util.TreeSet.add(TreeSet.java:255)
	at c.SortingTechniques_Comparable_Comparator.CompComp.main(NewClass.java:26)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)


*/

//----------------------------------------------------*********************************************--------------------------