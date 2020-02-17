
// Program using comparator and comparable both.

package c_SortingTechniques_Comparable_Comparator;

import java.util.*;


 class Employee3 implements Comparable 
 
 {
    
     String name;
     int eid;
     
     Employee3(String name, int eid)
     {
         this.name=name;
         this.eid=eid;
     }
    
     
     @Override
     public String toString()
     {
         return name +"....."+eid;
     }
     
     
     public int compareTo(Object obj)
     {
         
         int eid1= this.eid; // one the current object example e2.compareTo(e1) we call this.eid and store it in eid1.
     
         Employee3 e=(Employee3) obj; // here obj is already existing object.
         
         int eid2=e.eid;
         
         if(eid1<eid2)
         {
             return -1;
         }
     
         else if(eid>eid2 )
         {
             return 1;
         }
         
         else
         {
             return 0;
         }
     }
 
 
 
 }


class CompComp2
{
    public static void main(String[] args)
    {
        Employee3 e1= new Employee3("nag", 100);
        
        Employee3 e2= new Employee3("balaiah" ,200);
   
        Employee3 e3= new Employee3("chiru",50);
        
        Employee3 e4= new Employee3("venki",150);
        
        Employee3 e5= new Employee3("nag",100);
    
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
        
        
        TreeSet t1 = new TreeSet( new MyComparators11());
         
        t1.add(e1);
        
        t1.add(e2); //Assume e2 and e1 are added together.
        
        t1.add(e3);
        
        t1.add(e4);
        
        t1.add(e5);
       
       System.out.println(t1); 
        
 }
    
}


class MyComparators11 implements Comparator
{
    
    @Override
    public int compare(Object obj1, Object obj2)
    {
        
        Employee3 e1= (Employee3) obj1;
        
        Employee3 e2= (Employee3) obj2;
        
        String s1= e1.name;
        
        String s2= e2.name;
        
        return s1.compareTo(s2);
    
    }
}


/*
o/p

run:
[chiru.....50, nag.....100, venki.....150, balaiah.....200]
[balaiah.....200, chiru.....50, nag.....100, venki.....150]
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//------------------------------------------------------------********************************--------------------------------------------------