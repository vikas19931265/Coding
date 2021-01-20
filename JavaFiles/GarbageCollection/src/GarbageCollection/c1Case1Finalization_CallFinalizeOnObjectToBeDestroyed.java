package GarbageCollection;

/*

Case 1:

    Just before destroying an object garbage collector calls finalize() method on the
    object which is eligible for the garbage collection. Then the corresponding class
    finalize() method will be executed. For example if string object is eligible for the
    garbage collection then String class finalize() method will be executed but not 
    Test class finalize() method.
    
In this example String object is eligible for the garbage collection and hence 
String class finalize() method got executed which has empty implementation and hence
the output is 

    o/p End of main.
    
If we replace String object with Test object then Test class finalize() method will
be executed. In this case the output is 

    End of main
    Finalize method called
    
     or
     
    Finalize method called
    End of main
    
This is because when we are writing System.gc() a new thread will start and which
thread will get the chance to execute is not really sure.
    

*/

 class Test12
{
    public static void main(String[] args)
    {
        String s = new String("durga");
        s=null;
        System.gc();
        System.out.println("End fo the main");
    }
        
    public void finalize()
    {
        System.out.println("finzlize metho called");
    }
    
}

/*
$javac Test.java
$java -Xmx128M -Xms16M Test
End fo the main
*/
