
/*

Pgm on Static and instance flow mixed
=========================================

o/p

run:
1
3
2

*/



package InstanceControlFlow;


 class initialization2 {
    

 private static String m1( String msg)
 {
     System.out.println(msg);
     
     return msg;
 }
 
 
 static String m=m1("1");
 
 {
     m=m1("2");
 }
 
 static
 {
     m=m1("3");
 }
         
 public static void main(String[] args)
 {
     Object obj= new initialization2();
 }
         
 }
 
/*


Steps of Execution.

1. Program looks for identification of static blocks and static variables.

2. static String m=m1("1");

    This is the first static variable identified , hence it will be assigned 
    with default value which is null.

3. Next is a static block which is identified.

    static
 {
     m=m1("3");
 }

   
4. Next steps static variables will be assigned with default values and blocks will be executed.

5.  static String m=m1("1"); 

    Here the value of m is now 1 and since m1 is called which prints string.

    hence o/p 1.

6. Now static block will also get executed.

      static
 {
     m=m1("3");
 }

    Now the output will be 3.

   o/p 1/3

7. Now static variables assignment and blocks execution is complete hence the control goes to the main method.

8. In the main method we are creating an object, hence the instance control flow will start.

9. Now instance variables and instance methods will be identified.

10. After identification of instance variables and instance blocks , variables will be assigned and blocks gets executed.

11. {
     m=m1("2");
    }

    This is the only instance block

    hence o/p 1/3/2

12. Now control comes back to main and exits.



*/

//--------------------------------------------------------------------------*******------------------------------------------