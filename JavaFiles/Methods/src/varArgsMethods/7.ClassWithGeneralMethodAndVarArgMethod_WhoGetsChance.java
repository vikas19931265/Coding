/*
 
1. In General VarArg method will get least priority that is if no other method matched then only
  VarArg method will get the chance.

2. It is exactly same as default case inside the switch statement.


*/
package varArgsMethods;


 class Test9
{
    
     public static void m1( int...x)
     {
         System.out.println("VarArgMethod");
     }
 
     public static void m1(int x)
     {
         System.out.println("GeneralMethod");
     }
 
 
     public static void main( String[] args)
     {
         m1(10); // The question here is that which method will get chance as varArg can accept this as well as general method can accept this.
                    // Since varArgs is newer feature, old feature will get the chance and in this case m1(int x) will get executed.
     }
 }

//--------------------------------------------------------------------------********--------------------------------------------------------------