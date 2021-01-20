/*

how can we prevent creation of child classes without using the final keyword in the parent class??

Answer: By making all the constructors available in the parent class as private we can stop creation of the
        child classes.

*/

package SingletonClass;


 class Test4
{
    
   private  Test4(int j)
     {
         // made the constructor private to stop creation of child class.
     }
 
    
    Test4()
   {
      // We have to make it private Test4() in order to stop creation of child class.    
   }
 
 
 }


class Child4 extends Test4
{
    Child4()
    {
        
      /*
        1. Here Child4() constructor will be called be default if not specified by the programmer.
        
        2. This child constructor will have an immediate line that is super() which is no argument constructor
           call to the parent class.
        
        3. Now if we do not specify the no argument constructor in the parent class then we will get the error.
        
        4. To fix this error its always recommended to have at least one no argument constructor in the parent class.
        
        5. This can also be fixed by overriding the super() constructor call, instead of calling the default constructor
           not available in the parent class we can call the respective constructor which is available in the parent class.
        
        Stopping creation of Child class.
        
        1. From above scenarios if we can make all the constructors as private in the parent class , then child constructor
           having super() (argument or no argument type) will not be able to access the constructor available in the parent class and we
           will not be able to create the child class.
        
        
        
        */
    
    
    
    
    }
} 

//--------------------------------------------------------------------------------------------**************---------------------------------------------------