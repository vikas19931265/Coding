// Automatic Initialization of Instance Variables.

/*

1. For Instance Variables JVM will provide the default values and we are not required to perform initialization explicitly.

*/



package aInstanceVariables;


 class Test3 {
    
 int x;   // instance variables also known as attributes whose behavior is defined by methods.
 boolean b;
 double d;
 String s;
 
 public static void main( String[] args)
 {
     Test3 t= new Test3();
     System.out.println(t.x);  // JVM automatically provided default values to instance variables.
     System.out.println(t.b);
     System.out.println(t.d);
     System.out.println(t.x);
 }
 

 }
