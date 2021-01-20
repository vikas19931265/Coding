
/*

Sorting using Comparator.

*/


package c_SortingTechniques_Comparable_Comparator;

import java.util.*;

 class Test2 {
    
public static void main(String[] args)
{
    TreeSet tree= new TreeSet( new MyComp());
    
    Employees e1 = new Employees("vikas",90);
    
    Employees e2 = new Employees("Sachin",50); //e2.compare(e1)
    
    
    

    /*
    
    As per understanding assume that e1 and e2 are added together.
    
   
    */
    
    Employees e3 = new Employees("Dravid",70);
    
    
    tree.add(e1);
    
    tree.add(e2);
    
    tree.add(e3);
    
    System.out.println(tree);  
    
    
    /*
    
    note: when printing elements inside tree. Tree actually contains collections of 
    Employee reference. To get the actual name and rollno we have to override the toString method
    so that whenever employee reference is to be printed automatically it will call the toString()
    method in order to print the actual values.
    
    */
    
}
 



 
 
 }


class Employees 
{
    
    String name;
    
    int rollno;
    
    Employees(String name, int rollno)
    {
        this.name=name;
        
        this.rollno=rollno;
    }

    public String toString()
    {
        return name +" "+ rollno;
    }
    


}


class MyComp implements Comparator
{

    @Override
    public int compare(Object t, Object t1) {
        
           Employees s1  = (Employees) t;
           
           Employees s2  = (Employees) t1;
           
           int a1= s1.rollno;
           
           int a2=s2.rollno;
        
           if(a1< a2)
           {
               return -1;
           }
           
           else if(a1>a2)
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
run:
[Sachin 50, Dravid 70, vikas 90]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//-----------------------------------------------------------------****************************------------------------------------------------------