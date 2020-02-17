package Operators;

/*

using instanceof operator
------------------------------------

    Object          Runnable(interface)
     ^                  ^
     |                  |
     |                  |
    Thread -------------
        

Thread is child class of object, hence thread is of Object type

Thread implements Runnable interface, hence its of type Runnable.


To use instanceof operator compulsory there should be some relationship between
the argument types( either child to parent relationship or parent to child or same type)
otherwise we will get the compile time error saying 

inconvertible types

   
Another conclusion
-----------------------

For any class or interface X, null instanceof X is always false.

*/


 class Demo76 {
    

 public static void main(String[] args) 
 {
     
     Thread t = new Thread();
     
     System.out.println(t instanceof Object); // true
     
     System.out.println(t instanceof Thread);// true
     
     System.out.println(t instanceof Runnable);// true
 
     try{
     
     System.out.println(t instanceof String);// illegal
        /*
     
     
     
     CE: error: incompatible types: Thread cannot be converted to String
            found java.lang.Thread
            required java.lang.String.
        
        */
        }
     
     catch(Exception e){}
 
      System.out.println(null instanceof Thread); //false(null instanceof class/interface is always false)
 }
 
 
 }

