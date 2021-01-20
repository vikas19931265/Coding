package ObjectCloning;

/*

    Shallow Cloning
    =====================

*/


class Student12 implements Cloneable
{
    Graduate12 c;
    int rollNo;

    Student12(Graduate12 c, int rollNo)
    {
        this.c=c;
        this.rollNo=rollNo;
    }
    
    
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
        
    }
    
    
}

class Graduate12
{
    int i;

    Graduate12(int i)
    {
        this.i=i;
    }
    
    
}


 class Driver12
{
    public static void main(String[] args) throws  CloneNotSupportedException
    {
        
        // Created an object first.
        Graduate12 c = new Graduate12(10);
        Student12 s = new Student12(c, 1234);
        System.out.println("Orignial Object "+ s.rollNo+" "+s.c.i);
     
        
        // I will clone the object which is created.
        
        Student12 s1= (Student12)s.clone();
        System.out.println("Cloned object "+s1.rollNo+" "+s1.c.i);
       
        
        
        /*
        According to shallow cloning, new object is created only keeping primitives
        but for the referenced objects , original object is shared.
        
        So lets change the name value of cloned object which is of Graduate type
        and see if the change reflects in the original object or not */
        
        s.c.i=20;
        
        System.out.println("Chaging i value of original object "+ s.c.i);

        System.out.println("value of cloned object after change in original "+s1.c.i); //cloned object value also got changed.
        
        
        
        
        
    }
}

/*
$javac Driver.java
$java -Xmx128M -Xms16M Driver
Orignial Object 1234 10
Cloned object 1234 10
Chaging i value of original object 20
value of cloned object after change in original 20
*/