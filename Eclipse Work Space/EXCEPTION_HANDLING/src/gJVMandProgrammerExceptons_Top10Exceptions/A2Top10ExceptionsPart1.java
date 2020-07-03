/*

Top 10 Exceptions
====================================

1. ArrayIndexOutofBoundsException
=====================================

  i)    It is the child class of RuntimeException and hence it is unchecked exception. 

  ii)   It is raised automatically by the JVM whenever we are trying to access Array element with
       out of range index.


    example

        int[] x = new int[4];
        System.out.println(x[0]); // valid
        System.out.printnl(x[10]); RE: ArrayIndexOutofBoundsException
        System.out.println(x[-10);// RE:ArrayIndexOutOfBoundsException



2. NullPointerException
====================================

  1) It is the child class of RuntimeException and hence it is unchecked.

  ii) This is raised automatically by the JVM whenever we are trying to perform any k kind
      of operation on null.


      Example

            String s= null;

            System.out.println(s.length()); // RE: NullPointerException


            
3. classCastException
==========================

i. It is the child class of RuntimeException and hence it is unchecked.

  ii) This exception is raised automatically by the JVM whenever we are trying to typecast parent 
      object to child type.
    

        case 1:
              String s = new String("Durga");

              Object o =(Object)s;

            This is fine as we are trying to typecast child type to parent type.
            that String type is typecasted to object type

                ---refer to typecasting chapter for more details.

        case 2:   
               Object = new Object();

               String s= (String)o;

               This is illegal as we cannot typecast parent type to child type

               Hence we will get RunTime Exception saying 

                    RE: ClassCastException

        case 3:

                Object o = new String("Durga");

                String s =(String)o;

                This is also valid, don’t confuse with case 2 
                Here the run time object is String type and not object type and hence 
                String type can be typecasted to String type.

                Internal object is child object only.


4. StackOverflowError
==========================

      1) It is the child classs of Error and hence it is unchecked.

      ii) This is raised automatically by the JVM whenever we are trying to perform
          recursive method calls.

*/

// stack overflow error

package gJVMandProgrammerExceptons_Top10Exceptions;

class Test
{
    public static void m1()
    {
        m2();
                
    }

    public static void m2()
    {
        m1();
    }

    public static void main(String[] args)
    {
        m1();
    }
    
/*
This program contains only one thread that is the main thread. Hence a stack will be created and 
all method calls will be stored in that. Once the call and program terminates stack will be destroyed.
But this will not happen in the case of this program as there is recursive method call happening in this.    
    
        |  .    |        
        |  .    |
        |-------|    
        |  m2();|  
        |-------|
        |   m1()|
        |-------|
        |  m2() |
        --------|   
        |  main()
        ---------    
    
        StackOverflowError.
   
    
    
    */




}

/*

5. NoClassDefFoundError.
==============================

  i) It is the child class of error and hence it is unchecked.

  ii) This is raised automatically by the JVM whenever JVM is unable to find
      required .class file.


   Example

        Java Test ----> if Test dot class file is not available then we will get the 
                        RuntimeException saying NoClassDefFoundError : Test




6. ExceptionInInitalizerError
==================================


i) It is the child class of error and hence it is unchecked

  ii) This is raised automatically by the JVM if any exception occurs while executing static
      variable assignments and static blocks.

example 1

    class Test11
{
    
    static int x=10/0;
}

RE: ExceptionInInitializerError caused by java.lang.ArithmeticException/zero


example 2

 class Test
{

    static
    {

        String s =null;
        System.out.println(s.length());

    }
}

RE: ExceptionInInitializerError caused by java.lang.NullPointerException.

 */


//--------------------------------------------------------------------------REVISED------------------------------------------


