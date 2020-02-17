/*

Getting class information of Student from the class Class object creaated in heap memory
by the JVM.

*/
import java.lang.reflect.*;

class Student
{
    public String getName()
    {
        return null;
    }

    public int getRollno()
    {
        return 10;
    }


}


class Test
{
    public static void main(String[] args) throws Exception
    {
       int count=0; 
        
       Class c =Class.forName("Student");
        
       //methods informtion
       
       Method[] m =c.getDeclaredMethods();
       
       for(Method m1: m)
       {
           count++;
           
           System.out.println(m1.getName());
       
           
       }
    
       System.out.println("count is"+count);
       
    }
}

/*
run:
getRollno
getName
count is2
BUILD SUCCESSFUL (total time: 0 seconds)


*/