package GarbageCollection;

/*
Case 3:

Even though object is eligible for gc multiple times but the garbage collector 
calls the finalize() method only once.

In the below program even though the object is eligible for the garbage collection
two times but the garbage collector calls the finalize method only once.




*/

 class FinalizeDemo
{
    static FinalizeDemo s;
    
    public static void main(String[] args) throws InterruptedException
    {
        FinalizeDemo f = new FinalizeDemo();
        System.out.println(f.hashCode()); //hashcode of f
        f=null; //we are making object eligible for gc
        System.gc(); //we are calling the gc then control goes to finalize method
        Thread.sleep(5000);//till the time finalize work is going on our main thread is sleep
        System.out.println(s.hashCode()); // s got reference to which f was pointing.
                                          // so object is not destroyed.
        s=null; // now again we are trying to make the same object with different reference
                //eligible for the garbage collection but this time finalize() method will not
                // be called as it was called previously for doing the clean up activities.
        System.gc();
        Thread.sleep(1000);
        System.out.println("End of the main");
    }

    public void finalize()
    {
        System.out.println("finalize method called");
        s=this; // to the current object getting destroyed we are giving reference.
        
        
    }
    
    
}

/*
$javac FinalizeDemo.java
$java -Xmx128M -Xms16M FinalizeDemo
705927765
finalize method called
705927765
End of the mai
*/
