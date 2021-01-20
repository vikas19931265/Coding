package GarbageCollection;

import java.util.*;

 class RunTimeDemo
{
    public static void main(String[] args)
    {
        Runtime r = Runtime.getRuntime();
        System.out.println(r.totalMemory()); //16252928
        System.out.println(r.freeMemory());//15732848
        /*Total and free memory before the program begins.  */
        for(int i=0; i<=1000;i++)
            {
                Date d = new Date(); //creating a  date object and them making it eligible for the deletion.
                
                d=null; //d =null, this will send request to JVM to delete the object, but does not guarantee
                        // if the garbage collector is going to run in the background or not.
                  /*
                    Here we did d=null , so we have made the object eligible for the 
                    garbage collcion. But complete deletion depends upon the acknowledgement
                    of JVM. Once JVM hands over its task garbage collector assistant
                    then the object will be removed. 
            
                */
           
           
           
            }
        
        System.out.println(r.freeMemory());//15648896
        r.gc(); //checking free space after running garbage collector. Please note that garbage 
                // here in r.gc() a call will be made to JVM to start the garbage collector 
                //assistant. In that process garbage collector will remove all the latest and old
                //orpahned object.
        System.out.println(r.freeMemory());//15971304
        
}

}
    
/*
$javac RunTimeDemo.java
$java -Xmx128M -Xms16M RunTimeDemo
16252928
15732848
15648896
15971304
*/

