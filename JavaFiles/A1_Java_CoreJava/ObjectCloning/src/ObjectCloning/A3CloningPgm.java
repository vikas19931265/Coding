package ObjectCloning;

/*

    Cloning program
    ==================
    
    clone() method has protected access modifer hence this method can only be accesed
    inside the child classes and in the same package classes therfore it is mandatary
    to implement the Cloneable interface(marker interface).
    
*/

import java.lang.Cloneable;

class Student11 implements Cloneable
{
    String name;
    int rollNo;
    
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
    }


    Student11(String name, int rollNo)
    {
        this.name=name;
        this.rollNo=rollNo;
    }
}



 class Driver11
{
    public static void main(String[] args) throws CloneNotSupportedException
    {
        Student11 s = new Student11("vikas",1234);
        
        Student11 s2  =(Student11)s.clone(); // this will create another student object.
    
        System.out.println(s.name);
        
        System.out.println(s2.name);
        
        
    }
}

/*
run:
vikas
vikas
BUILD SUCCESSFUL (total time: 0 seconds)

*/