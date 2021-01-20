/*

1. This is similar to apporach 1.

2. But in apporach 1 we created an object in starting.

3. Here in this case instead of creating object in starting , we will create the object when needed and the same
   Object will be reused.


[note]
. At any point of time for Test class we can create only one object hence Test class is singleton class

*/
package SingletonClass;


 class Test2 {
    
     private static Test2 t= null;
 
     private Test2()
     {
         // making constructor private to stop outside creation of object.
     }
     
     
     public static Test2 getObject()
     {
         if(t==null)// Check condition to see if t is pointing to some object or not, in starting it wont point to anything and hence will create object
         {          // From the next time t wil not be null hence the same object will be returned everytime.    
             t= new Test2();
         }
     
         return t;
     
     }
 
 }
    class TestDriver
    {
        public static void main(String[] args)
        {
        
        Test2 t= Test2.getObject();
        
        Test2 t1= Test2.getObject();
    
        System.out.println(t); //SingletonClass.Test2@15db9742
        
        System.out.println(t1);//SingletonClass.Test2@15db9742
       
        
        }
    }
 
//--------------------------------------------------------------------------------------------**************---------------------------------------------------