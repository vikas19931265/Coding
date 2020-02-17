package aInnerClassIntroAndRegularInnerClass;

/*

From normal or regular inner class , we can access both static and non static members 
of outer class directly.


*/


class Outer6
{
    
    int x =10;
    
    static int y=20;
    
    class Inner
    {
        public void m1()
        {
           // int x=70; // If we changet the value of x from 10 to 70 then 70 will be printed.
            
            System.out.println(x);
            
            System.out.println(y);
        }
    }

   public static void main(String[] args)
   {
       new Outer6().new Inner().m1();
   
     //  System.out.println(new Outer6().x); Changing the value of x in inner class will not have any affect on instance variable
                                             // x which is initialized to 10
   
   }


}
/*
run:
10
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-------------------------------------------------------*******************************************-------------------------------------