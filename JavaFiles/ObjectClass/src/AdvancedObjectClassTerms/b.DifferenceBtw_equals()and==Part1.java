/*

Differenecs between == operator and .equals() method (part 1)
-----------------------------------------------

To use == operator, compulsory there should be some relationship between the argument 
types( either child to parent or parent to child or same type) otherwise we will get 
the compile time error saying

                CE: incomparable types

If there is no relationship between argument types , then .equals() method will not raise
any compile time or run time errors. Simply it will returns false.

*/
package AdvancedObjectClassTerms;


class Demo8
{
    
  public static void main(String[] args) 
  {
      
      String s1= new String("Durga");
      
      String s2= new String("Durga");
      
      StringBuffer sb1= new StringBuffer("Durga");
      
      StringBuffer sb2= new StringBuffer("Durga");
      
      System.out.println(s1==s2);// false
      
      System.out.println(s1.equals(s2)); // true
      
      try
      {
      
      System.out.println(s1==sb2); //illegal
            /*error: incomparable types: String and StringBuffer
             
             There must be some relationship between s1 and s2, if no relationship
             then we will get the compile time error.
            */
      }
      
      catch(Exception e)
      {
          
      }
            
      System.out.println(s1==s2);//false
      
      System.out.println(sb1.equals(sb2));//false
            /*
                If using .equals() both the objects are not of same type,
                then we will not get any compile time error. We will just get false
      
      
            */
        
      
  }


}

/*
run:
false
true
false
false
BUILD SUCCESSFUL (total time: 0 seconds)

*/
