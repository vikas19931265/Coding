/*

unreachable statements
-------------------------

Please note that do-while are treated as one statement. It is never possible that do is reachable
separately but while is not reachable. This will never happen. They are a single unit which are
either reachable or not reachable.
*/


class Exampless1
{
    
    public static void Case1()
    {
        do
        {
            System.out.println("hello");
        } while(true);
        
        System.out.println("Hi"); //CE: Unreachable statement
        
    }

    /*
    do
        {
            System.out.println("hello");
        } while(true);
    
    while(true) is evaluated by the compiler and this program results
    in infinite loop which compiler catches it as a result compiler
    is not able to reach the next line and declares the statements
    below the do-while as unreachable.
    
    */

//----------------------------------------------------------------------------------

    public static void Case2()
    {
        do
        {
            System.out.println("Hello"); //do is always reachable
        }while(false);
        
        System.out.println("Hi");
    
    }

 /*
     do
        {
            System.out.println("Hello");
        }while(false);
    
    In this program first do executes and prints hello.
    After this while statement returns false hence this gives
    the chance to compiler to read the lines below while(false).
    The code does not become unreachable and compiles fine.
    
    o/p 
    
    Hello
    Hi   */
    
    
   //--------------------------------------------------------------------------------------- 
    
    
    
    public static void Case3()
    {
        
        int a =10,b=20;
        
        do
        {
            System.out.println("Hello");
            
        }while(a<b);
        
        System.out.println("Hi");
        
        
     }
    
/*
    
    Here a and b are normal variables hence there evaluation and operation will
    be performed by the JVM and not compiler. Hence compiler does not throw any
    unreachable statement error.
    
    o/p
    
        Hello
        Hello
         .
         .  ---->infinite loop
         .
   
    
    */

//--------------------------------------------------------------------------------------------
    
    
   public static void Case4()
   {
       int a =10, b=20;
       
       do
       {
           System.out.println("hello");
           
       }while(a>b);

       System.out.println("Hi");

   }


 /*
   
   Here a and b are normal variables hence there evaluation is done at the run time
   by the jvm.
   
   while(a>b) that is (10>20) returns false hence control comes out of do while and 
   prints Hi after printing Hello from the do part.
   
   
   o/p
   
   Hello
   Hi
   
 */
   
//---------------------------------------------------------------------------------------------   
   
   public static void Case5()
   {
       
       final int a =10,b =20;
       
       do
       {
           System.out.println("Hello");
       } while(a<b);
       
       System.out.println("hi"); //CE: unreachable statement
   }

   /*
   
   
   Here a and b are final variables , hence there evaluation and operation will be performed
   by the compiler at compile time only.
   
   compiler evaluate while (a<b) to result while(true) hence this will create an infinite
   loop in the do-while loop and compiler will not able to trace any statement below do-
   while loop.
   
  */
   
  //----------------------------------------------------------------------------------------
   
   
   public static void Case6()
   {
       
       final int a =10, b=20;
       
       do
       {
           System.out.println("Hello");
       }while(a>b);
   
       System.out.println("Hi");
   
   
   }
   
/*
   
   Here a and b are final variables hence there evaluation is done by the compiler at the 
   compile time.
   
   compiler evaluates while(a>b) that is while(10>20) and result is false.
   
   but do part is executed every time hence that part cannot be declared unreachable by compiler
   and since while(a>b) returns false hence compiler can reach the lines below while(a>b)
   
   Hence we will not get any unreachable statement issue.
   
   
   o/p
   
   hello
   Hi
   
   
   */

}

