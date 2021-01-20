
//Accessing Instance Variables.

/*
1. We cant access instance variables directly from the static area. But we can access using object reference.

    But, we can access instance variables directly from instance area.

*/

package aInstanceVariables;


class Test1
{
   int x=10;
   
   public static void main( String[] args)
   {
       //System.out.println(x);
       /*
       This in invalid as we are trying to access instance variables which is object parts
       from a static method which is not related to the Object.
       
       error: non-Static Variable x cannot be referenced from a static context.
       */
   
      
       
       Test1 t= new Test1(); // created an object of Test Class to access instance variable indirectly.
       System.out.println(t.x);
       
       /*
       In order to access the instance variable from static block we have to create the object of the
       class and access it , as done in the above example.
       */
   }
}