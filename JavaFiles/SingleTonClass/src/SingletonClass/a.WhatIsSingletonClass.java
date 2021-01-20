/*

1. For any java class , if we are allowed to create only one object such type of 
   class is called Singleton class.

        Example
            
            Runtime

            BusinessDelegate

            ServiceLocator

Advantages of Singleton Class.

1. If several people have same requirement then it is not recommended to create
   a separate object for every requirement.

2. We have to create only one object and we can reuse the same object  every time
   similar requirement come so that performance and memory utilizations will be improved.
   This is the central idea of singleton classes. 


Example

            Runtime r = Runtime.getRuntime();

            Runtime r1= Runtime.getRuntime();

            .
            .
            .
            
            Runtime r10000= Runtime.getRuntime();


Here only one object is there and the same reference is held by r, r1, r100000

*/

//--------------------------------------------------------------------------------------------**************--------------------------------------------------- 
