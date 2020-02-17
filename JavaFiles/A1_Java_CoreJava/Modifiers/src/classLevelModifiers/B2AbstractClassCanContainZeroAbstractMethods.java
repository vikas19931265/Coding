/*

Even though a class may not contain any abstract methods, still we can declare class as abstract if 
we don’t want instantiation that is abstract class can contain 0 number of abstract methods also.


Example1

        HTTPServlet class is abstract but it does not contain any abstract methods.

Exmaple2
        
        Every adapter class is recommended to be declared as abstract but it does not contain any abstract
        methods.
      

*/
package classLevelModifiers;


 abstract class Testing
{
    
     public void  m1() // Here both methods are non-abstract but our class is abstract.
     {
         System.out.println("hai");
     }
 
 
     public void m2()
     {
         System.out.println("hello");
     }
 
 
 }

//-----------------------------------------------------------------------------------------*******************--------------------------------------