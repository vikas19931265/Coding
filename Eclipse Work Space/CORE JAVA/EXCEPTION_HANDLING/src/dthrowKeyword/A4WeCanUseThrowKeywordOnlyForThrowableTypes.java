/* Case 3:

 1. We can use throw keyword only for throwable types. If we are tyring to use
    for normal java objects then we will get compile time error saying

CE: incompatible types
found: test
required: java.lang.Throwable.

*/
package dthrowKeyword;

 class Test15 {
    
     public static void main(String[] args)
     {
         
         //throw new Test();  //CE: incompatible types
                              //  found: test
                              //  required: java.lang.Throwable.

     }
 
 
 }

//-------------------------------------------------------------------------------------


class Test16 extends RuntimeException // extends your class from RuntimeException to make it throwable.
{
    
    public static void main(String[] args)
    {
        
        throw new Test16();
    }
}