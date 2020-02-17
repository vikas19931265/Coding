/*
 */
package StaticControlFlow;


 class Testing6 {
    

  static 
  {
      m1(); // We are trying to print value of x which is RIWO state using the method indirectly hence this is a valid declaration.
      
  }

    public static void m1()
    {
        System.out.println(x); 
    }

    static int x=10;  // value of x is in RIWO state( first step)

 
 
 public static void main( String[] args)
 {
     
 }
 
 
 }
