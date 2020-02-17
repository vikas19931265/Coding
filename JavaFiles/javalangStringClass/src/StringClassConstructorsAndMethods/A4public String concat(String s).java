/*

public String concat(String s)
===============================================================================

The java string concat() method combines specified string at the end of the string.
It returns combined string as the string object. It is like appending another string.


Signature
------------

public String concat( String anotherString);


parameter
-----------

anotherString: anohterString is the string to be combined at the end of the String.


Returns
----------

combined string




The overloaded + and += operators are also meant for concatenation purpose only


*/

// Java concat() example

package StringClassConstructorsAndMethods;


 class Concat {
    
     public static void main(String[] args)
     {
         
         String s ="Durga";
         
         s=s.concat(("software"));
         
         // or, s=s+ "software";
         
         // or, s += "software";
         
         System.out.println(s); //Durgasoftware

       }
 
}



 
  class concatExample
  {
      
      public static void main(String[] args)
      {
          
          String s1= "java string";
          
          s1.concat("is immutable");
          
          System.out.println(s1); // java string
          
          s1= s1.concat("is immutable to assign it explicitly");
          
          System.out.println(s1); //java string is immutable to assign it explicitly
          
          
      }
      
      
  }
