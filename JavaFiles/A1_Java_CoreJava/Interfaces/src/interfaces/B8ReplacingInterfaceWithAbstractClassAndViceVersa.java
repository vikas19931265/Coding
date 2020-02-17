/*

Inside interface every method is always abstract and we can take only abstract methods in abstract class  also.
Then what is the difference between abstract and interface. Is it possible to replace interface with abstract class?


We can replace interface with abstract class but it is not a good programming practice this is something like recruiting
IAS officer for sweeping activity. 

If everything is abstract then it is highly recommended to go for interface.


by durga.

 1. while extending abstract class , it is not possible to extend another class and hence we will miss
    inheritance benefits. Here the Object creation (Test t = new Test()) will also be costly example 2 minutes it could take.
    This is because when the child object will be created it will also call the super class constructor.

        

2. by implementing interface , we can extend some other class and hence we will not miss any inheritance benefit.
   Here the object creation will not be costly ( Test t = new Test();) 2 seconds time. Interface does not allow a constructor
   hence amount of time needed to create the child class object is going to be lesser.
    

*/
package interfaces;


abstract class Y
{
    
    //     1.  Every method is abstract here.

}


interface Z
{
    // all abstract methods
}


// approach 1
class Test11 extends Y
{
    /*
   
        1. Now the aim of the child class will be to extend this class and provide implementation.
        
        2. But since a class can extend only one class at a time , hence we will loose multiple
           inheritance feature which is applicable to interface.
        
        3. Also when we are creating child class object then parent class constructor will be executed ,
           this can reduce the amount of object creation time decreasing performance.

      
    */    

}



// approach 2
class Test112 implements Z
{
    /*
    1. Here the child class can implement and extend another class at the same time, inheritance feature fully supported
    
    2. interface does not contain any constructor, hence if want to create object of the child class then its creation
       will be fast as control does not need to flow to the interface.
    
    */
}