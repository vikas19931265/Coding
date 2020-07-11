/* Interface Variables
===================================

1. An interface can contain variables. The main purpose the interface variables is to define requirement level constants.

2. Inside the interface which of the following variable declarations are allowed.

    int x; (invalid as interface variable should be compulsory initialized.)
    private int x=10;(  invalid  by default interface variable is public)
    protected int x=10;( invalid by default interface variable is public)
    volatile int x=10; (invalid by default interface variable is final and final-volatile combination is illegal)
    transient int x=10; (invalid  we cannot create object of interface and transient is Object related term to serialization hence this modifier is illegal)
    public static int x=10;( valid)


    [note]

    In interface also variables are inherited by the implemented class as in the case of the normal classes but the only thing is that
    they are **like constants and cannot be changed by the implemented class as they are declared as static and final.

*/


 interface Interface1
{
   public static final int x=10; // We need not right public static final...It will be available by default.

 /*
 Every interface variable is always public-static-final by default whether we are declaring it or not does not matter.  
   
 
  public-> to make this variable available to every implementation class.
   
  static--> without creating object which is not possible for interfaces, implementation class can access the variable.
   
  final---> if one implementation changes variable value then remaining implementation classes will be affected. To restrict this
            every interface variable is always final.
   
 
   Within the interface all these declarations will be valid.
   
   int x=10;
   public int x=10;
   static int x=10;
   final int x=10;
   public static int x=10;
   public final int x=10;
   static final int x=10;
   public static final int x=10;
   
   
   
   As every interface variable is always public-static-final hence we cannot declare with the following modifiers.
   
   public --> private
   public--->protected
   
   static--->transient( serialization is not possible for interface hence object creation is not possible , transient is serialization keyword hence its illegal here)
   final---->volatile (volatile variable keep on changing and final variable is always fixed hence this combination is illegal.)*/
   

   
   int y=30; // by default this value is static final and static final variables must be initialized during declaration or inside static block, but static block not allowed in interface.
   
   /*
      
   1. For interface variables compulsory we should perform initialization at the time of the declaration otherwise we will get below compile time error.
        
       Error: = expected
      int y;
      1 error
 
   */
   




  }


class Test implements Interface1
{
    public static void main(String[] args)
    {
        /* x=777; This is invalid as x is a final variable accessed by Test class and it cannot be changed.
        
       Compile error: cannot assign a value to a final variable x. 
        
        */
        
        int x=888; // This is valid as this variable is declared as a local variable in the local block 
                   // hence variable it inherited from interface (x) and the variable declared in local block are different. 
        
        System.out.println(x);
    
    }
}


//---------------------------------------------------------------------------------*******************--------------------------------------