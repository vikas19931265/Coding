/*

Exception propagation
-------------------------------------------------------------------------

    m1()
    
        {

            m2();

        }
        

        m2()

    { 
        System.out.println(10/0);

    }    

Here the exception is occurring in m2() , but the caller of m2() is m1() hence the exception object will
be transferred to the caller method.


1. Inside a method if an exception is raised  and if we are not handling that exception then exception
   object will be propagated to caller then the caller method is responsible to handle the exception.

   This process is called as Exception propagation.

*/


package aException_Intro_RuntimeStack_DefaultException_Propogation_Hierarchy;


class ExceptionPropogationExample

{
    
    public static void main(String[] args)
    
    {
        try
        {
        
            m1();
        }
        
        catch(ArithmeticException e)
        {
            
            System.out.println("Divison by zero");
        }
    
        
        }


    public static void m1()
    {
        
       m3();
    
    }


    public static void m3()
    {
        System.out.println(10/0); //Exception object is created here.
    }


}

/*

1. Here the exception occurs in m3() method. Hence the Exception object is created in the m3() method..

2. Now in m3() method the exception is not handled hence it is passed to the caller method that is m1() method.

3. In m1() method also the exception is not handled hence it is passed to the caller of m1() method that is the
   main method.

4. If in main method also the exception is not handled then the program will terminate abnormally.

5. If we are handling the exception in the main method then the program will terminate normally.


*/

//--------------------------------------------------------------------------REVISED-------------------------------------------------------