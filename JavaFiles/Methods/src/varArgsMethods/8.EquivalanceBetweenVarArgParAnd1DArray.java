/*
 
    1 Wherever one dimensional array is present , we can replace with varArg parameter.

    m1(int[] x) can be replaced with m1(int...x)


    example main( String[] args) can be replaced to main(String...args)

   

    2 But point to note is that wherever varArg parameter is there we cannot replace it with one dimesional array.

    example m1( int...x) replace to m1(int[] x) is invalid.

    Proof: lets take an example we pass m1(10) , m1(int[] {10}) and use m1(int..x) to accept it.
           this will work perfectly fine here as varArg can accept all this that is it can take a number 
           and store it in array or accept the array reference

           But if we replace m1(int...x) with m1(int[] x) then m1(10), m1(10,20) will stop working.

*/


package varArgsMethods;


 class Testing
{
    
     public static void m1(int... x) // we have replaced int[] x to int...x
     {
         for( int x1: x)
         {
             System.out.println(x1);
         }
     }
     
     public static void main(String...args)
     {
         
         m1(new int[] {10}); // this is a way of passsing array which will be in detail in array concept
         
     }
}
