package Operators;

/*

1. While using new operator at run time if the corresponding .class 
   file is not available we will get run time exception saying

RE: NoClassDefFoundError :Test


        Example

                Test t = new Test();

 At run time if Test .class file is not available then we will get runtime
 exception saying " NoClassDefFoundError: Test";
                


2. While using newInstance() method at run time if the corresponding .class
   file is not available we will get runtime exception saying

        RE: ClassNotFoundException: Test123

        Example

                Object o =Class.forName(args[0].newInstance();

           java Test123

At run time if Test123 .class file is not present then  we will get runtime exception 
saying.

ClassNotfoundException:Test123

    

3. NoClassDefFoundError is unchecked exception which we cannot handle , but ClassNotFoundException
   is the checked exception which programmer should handle.




*/
import java.util.*;

import java.util.Scanner;

class Testr11
{
 

    
    public static void main(String[] args) throws Exception
    {
        
              
 
            
     {  
            System.out.println("Enter the class name");
        
         Scanner cn = new Scanner(System.in);
        
      String input=cn.nextLine();
        
            Object o= Class.forName(input).newInstance();
        
                    /*
            
                    Class.forName(input) used to load our input class.
            
                    */
            
            
            
            System.out.println("Object created for the class "+ o.getClass().getName());
    
           
                    
       
       }

       
    
    
    }
 
  }
    

    
    class Student12
{
    
}


class Employee12
{
    
}

/*
run:
Enter the class name
se
Exception in thread "main" java.lang.ClassNotFoundException: se
	at java.net.URLClassLoader.findClass(URLClassLoader.java:381)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:424)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:349)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:357)
	at java.lang.Class.forName0(Native Method)
	at java.lang.Class.forName(Class.java:264)
	at Testr11.main(NewClass41.java:64)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 2 seconds)

*/
