/*

    Static Control flow in case of Inheritance
    ===============================================


1. Whenever we are executing child class the following sequence of events will be executed
   automatically as a part of static control flow.

    a) Identification of static members from parent to child.

    b) Execution of static variables assignments and static blocks from parent to 
       child.

    c) Execution of only child class main method..


                    java base class
              base class       Derived Class          

2. When running the same program keeping main as in parent the control does not flow in the child
  class as parent class does not hold the property of the child class. This is because when we are
  loading the child class, automatically the parent class is also loaded but vice versa is not true.


        o/p( when running the program with parent containing the main method).

0
Base Static Block
20
Base main


    [note by durga]
        
            Whenever we are loading child class automatically parent class will be loaded.
            but whenever we are loading parent class child class will not be loaded. This
            is because parent class members by default available to the child class whereas 
            child class members by default will not be available to the parent.

*/



package StaticControlFlow;


 class Base1
 {
     static int i=10;
     
     static
     {
         m1();
         System.out.println("Base Static Block");
     }
 
 
     public static void main(String[] args)
     {
         m1();
         
         System.out.println("Base main");
     }
 
 
     public static void m1()
     {
         System.out.println(j);
     }
     
     static int j=20;
 }


class Derived extends Base1
{
    
    static int x=100;
    
    static
    {
        m2();
        
        System.out.println("Derived Static Block");
    }


    public static void main(String[] args)
    {
        m2();
        
        System.out.println("Derived main");
    }



    public static void m2()
    {
        System.out.println(y);
    }
    
    
    static
    {
        System.out.println("Derived Second Static Block");
        
    }
    
    static int y=200;
    
}
    


/*

Steps of Execution.

1. This is  a scenario where a class containing all static method is inherited by another child class
   containing all the static methods.

 
Step 1
    
    First all the variables and static blocks are identified.

1. Here static int i=10, JVM will initialise the value of i to its default value which
   is equivalent to 0.

2. JVM does the same thing with the second variable that is static int j=20;

3. Next the control goes to the child class and JVM does the same thing as in point 1 and 2
   with static int x=100;  and static int y=200;


Step2

    Assignment of actual values to variables and execution of static blocks

    1.static
     {
         m1();
         System.out.println("Base Static Only");
     }
 
      In this block m1 method is getting called and m1 method is responsible for printing the
      value of j,. Since the variable j is in RIWO state but we are trying to read it indirectly
      hence its default value which is actually 0 gets printed.  o/p  0   /Base Static Only

    2. public static void m2()
    {
        System.out.println(j);
    }
    
     Next this is the method but this is method implementation which will get executed only once it is called.
        
                 
    

    3. static int j=20; Here the actual value of j is assigned to it and variable turn into read write state.


    4. Now the control goes to the child class.

    5. static int x=100  Here the default value of x that is 0 is assigned to it.


    6. static
    {
        m2();
        
        System.out.println("Derived Static Block");
    }

        Here m2 method is called responsible to print value of y which is 0 currently.
    
            o/p  0   /Base Static Only / 0 / Derived Static Block
    

    7. public static void m2()
    {
        System.out.println(y);
    }
    
       This is implemenation block hence it wont get executed.

    8. static
    {
        System.out.println("Derived Second Static Block");
        
    }

        o/p  0   /Base Static Only / 0 / Derived Static Block / Derived Second Static Block

Step 3:


    . At last main method  of child class gets executed which is calling m2 printing value of y hence 200 gets printed.

            o/p

     0 / Base Static Only /0 / Derived Static Block / Derived Second Static Block/ 200/ Derived main


*/

//----------------------------------------------------------------------------***********-------------------------------------------------------------------------//