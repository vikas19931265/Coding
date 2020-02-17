/*
 
1. Internally varArg parameter will be converted into one dimensional array hence
   within the varArg method we can differentiate values by using index.



*/
package varArgsMethods;

// This program shows how we can compute sum for any number of arguments passed
 class Test1
{
    
  public static void main( String[] args)
  {
      
  sum(); // accessing sum directly as we are in static method and sum is also a static method.
  sum(10,20);
  sum(10,20,30);
  
  }


  public static void sum(int...x) // created a sum method which takes varArgs and stores elements in 1D array and performs calculation.
  {
      int total=0;
      
      for(int i:x)
      {
          total=total+i;
      }
  System.out.println("Total is "+total);
  
  }
 
}


//--------------------------------------------------------------------------********--------------------------------------------------------------