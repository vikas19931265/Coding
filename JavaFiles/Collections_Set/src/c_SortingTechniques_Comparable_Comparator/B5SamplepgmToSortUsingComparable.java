/*

Sample program to sort based on rollo using comparable by Vikas.

*/
package c_SortingTechniques_Comparable_Comparator;

import java.util.*;

 class Test {
    
public static void main(String[] args)
{
    TreeSet tree= new TreeSet();
    
    Employee e1 = new Employee("vikas",90);
    
    Employee e2 = new Employee("Sachin",50); //e2.compareTo(e1)
    
    
    

    /*
    
    As per understanding assume that e1 and e2 are added together.
    
   
    */
    
    Employee31 e3 = new Employee31("Dravid",70);
    
    
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


class Employee31 implements Comparable
{
    
    String name;
    
    int rollno;
    
    Employee31(String name, int rollno)
    {
        this.name=name;
        
        this.rollno=rollno;
    }

    public String toString()
    {
        return name +" "+ rollno;
    }
    

    @Override
    public int compareTo(Object o)   //e2.compareTo(e1)....o is already existing object.
    {
        int rollno = this.rollno;
        
        Employee31 e=(Employee31) o;
        
        int rollno2= e.rollno;
        
        if(rollno < rollno2)
        {
            return -1;
        }
    
    
        else if(rollno>rollno2)
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
[vikas 90, Dravid 70, Sachin 50]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------*********************************---------------------------------------