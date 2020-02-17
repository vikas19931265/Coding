
/*

    Calling paramterized constructor from no argument constructor
    ====================================================================


*/
package this_keyword;


 class Test9 {
    
 Test9()
 {
     
     this(10); // Here we are inside the default constructor, from this default constructor we are calling the parameterised constructor.
     
  
     // [note] call to this must be first statement inside the method.
     
     System.out.println("Default Constructor");
 
 }
 
 
 Test9( int i)
 {
     System.out.println("Parameterised Constructor");
 }
 
 
 
 public static void main(String[] args)
 {
     Test9 test= new Test9();
     
 }
 
 }

/*
run:
Parameterised Constructor
Default Constructor
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//------------------------------------------------------------------------------------------************************-------------------------