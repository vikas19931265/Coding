/*


Inside a static block if we are trying to read a variable that read operation is called Direct Read.

If we are calling a method and within that method if we are trying to read a variable that read operation is 
called Indirect Read operation.




1 If a variable is just identified by the JVM and original value is not yet assigned.
then the variable is said to be in Read Indirectly and Write Only State(RIWO).

2. If a variable is in RIWO state then we cant perform direct read but we can perform indirect Read.

3. If we are trying to read directly then we will get compile time error saying 
    
        compile error: Illegal forward reference

*/


package StaticControlFlow;


 public class Testing1 {
    
    static int i=10;   // in starting the variable is in RIWO state hence value is 0 after this in the second step actual value gets assigned.
    
   
   static
   {
       m1(); // this is indirect read as we are trying to read value of i from a method
       System.out.println(i); // this is direct read as we are directly printing the value without reading from any method but
   }                          // we dont get any error as the variable has changed to Read Write State(i value got assigned to 10 in second step)
 
 
   public static  void m1()
   {
       System.out.println(i);
   }
   
   
   public static void main( String[] args)
    {
        
    }
    
    
 }  

//-------------------------------------------------------------------------*********--------------------------------------------------------------