/*

Case 1:
=============

Every enum constant represents an object of the type Enum. And hence whatever methods
we can apply on the normal java objects can also be applied to on Enum constants also.

Exmaple

    Beer.KF.equals(Beer.RC) ; //valid
    Beer.KF.hashCode()> Beer.BC.hashCode(); //valid
    Beer.KF<Beer.RC  //invalid
    Beer.KF.ordinal()>Beer.RC.ordinal() //valid.
    
    
Case 2:
=================

If we want to use any class or interface directly from outside from the package then
the required import is normal import.

If we want to access static members without the use of class name. Then the required 
import is static import.

    import static java.lang.Match.sqrt;
    import java.util.ArrayList();
    class Test
    {
        public static void main(String[] args)
        {
            ArrayList l = new ArrayList();
            System.out.println(sqrt(4));
        }
    }


With respect to enum

Example 1:
================
package pack2;
public class Test
{
    public static void main(String[] args)
    {
        Fish f = Fish.GUPPY;
        System.out.println(f);
    }
}
        
The required import is 
    import  pack1.Fish
            or
    import pack1.*;




Example 2:
================

 package pack3;
 public class Test2
 {
     public static void main(String[] args)
     {
         System.out.println(STAR);
     }
 }

The required import is 
    import static  pack1.Fish.STAR;
            or
    import static pack1.Fish.*;




Example 3:
======================
package pack4;
public class Testing
{
    public static void main(String[] args)
    {
        Fish f = Fish.STAR;
            
            Required import is import pack1.Fish or import pack1.*;
            
        System.out.println("GUPPY");
    
            Required import is import static pack1.Fish.GUPPY or
                               import static pack1.Fish.*;
        
    }
}
        



*/
