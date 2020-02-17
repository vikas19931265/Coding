/*

Inside a class we cannot declare varArg method and the corresponding one dimensional array

method simultaneously otherwise we will get compile time error.


*/
package varArgsMethods;


 class Test5
{

 
 /*
 public static void m1( int...x)
 {
     System.out.println("int...x");
 }
    

 public static void m1(int[] x)
 {
     System.out.println("int[] x");
 }
 

 This is illegal as int...x is same as int[] and in a class now we have 2 methods with the same signature
     
 that is m1( int[]) and m1(int[]) hence this becomes invalid.
     
 
     
     Error: Cannot declare both m1( int[]) and m1( int...) in test.    
     
     
 */ 

}

//--------------------------------------------------------------------------********--------------------------------------------------------------