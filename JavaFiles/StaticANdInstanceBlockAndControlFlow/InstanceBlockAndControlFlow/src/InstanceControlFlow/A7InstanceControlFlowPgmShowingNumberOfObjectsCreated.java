/*

Instance control flow program showing how many objects are Created
===================================================================


*/
package InstanceControlFlow;


class Student
{
    static int count=0;
    
    Student(String i)
    {
        
    }
    
    Student()
    {
        
    }
    
    {
        count++;
    }
    public static void main(String[] args)
    {
        Student s = new Student();
        
        Student s1= new Student ("Vikas");
    
        System.out.println("Number of objects created are"+ count);
    
    }
}

/*
run:
Number of objects created are2
BUILD SUCCESSFUL (total time: 0 seconds)

*/