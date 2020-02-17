
/*

1. It is possible to create an object with the keyword static 

    example

        static Test t= new Test();

2. In this case an object will be created during the time of the class loading
   and this object will be  shared by  the objects. 


3. Point to note is that this object will not be available inside the object as an instance.

*/

package SingletonClass;


class Test {
    
    int i=100;
    static Test t= new Test(); // Here we declared the object as static , so this object will be created
                              // during the class loading and is not an instance reference  
    
   /*
   1. In this program if we don’t declare the object as static then we will get 
      stack overflow error.
   
   */
   
   
    public void m1()
    {
        
    }

}


class Drivers
 
{
    
    public static void main(String[] args)
    {
    Test t1= new Test();
    
    /*
    How do you get stackOverflow Error?
    
    1. We created an object whose reference is held by t1 here.
    
    2. If we would not have declared our main object in test class as static then
       an object would have been created with variable i and reference t holding another 
       object.
    
    3. Now this object inside an object will contain instance members which is again
       variable i and an object.
    
    Now this will keep on continuing...that is we keep on getting an object inside the object
    Hence at last the stack will become full and we will get the stack overflow error.
    
    How to fix this?
    
    Simply use the static keyword.
    
        static Test t = new Test();
    
    What this will do is that it will create an object which will not be inside another object
    instead it will be outside which will be used by the respective objects.
    
    Hence we will never land up in the situation where we will have a chain of an object inside another 
    object leading to the stack overflow error.
    
    
    
    */
    
    
    
    System.out.println(t1.t); // Accessing the t reference.

    }

}
         
//--------------------------------------------------------------------------------------------**************---------------------------------------------------