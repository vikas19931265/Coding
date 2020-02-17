
package Concepts;

/*
1. String  class constructor supports many constructors.

2. To create a String object with no data in it....String str= new String();

3. String class is declared as final in system , hence it cannot be inherited by
   any class in the system.

4. String class is declared in the java.lang package, hence it is available by 
   default as , also we do need to import java.lang package as it is imported by
   default
.
5. String constructor will be used when we want to initialise the string object.



*/


public class StringConstructor {
    
/*  -------------------------EMPTY CONSTRUCTOR---------------------
1. To create an empty constructor simply write
                String str= new String() , 
                will create a String object with no values into it.
 
    */
    
    
 public static void main( String[] args)
 {
      
    
 //--------STRING CONSTRUCTOR WITH NO PARAMETER
     
     String const1= new String();
     System.out.println("no parameter const"+const1); // this will create a reference const1 pointing
                                 // to string object with no or empty value in it.
     
     
            
 //-------STRING CONSTRUCTOR WITH INITIAL VALUES IN IT EX1.
     
    String const2= new String("vikas");// "vikas" is passed as initial value in string object.
    System.out.println("const with parameter ex1-> "+const2);
 
 
 
 //----STRING CONSTRUCTOR WITH INITIAL VALUES TAKING FROM AN ARRAY
    
    char[] ch={'1','2','3','4'};
    String arrayConst= new String(ch);
    System.out.println("const with parameter ex2-> "+arrayConst);
 
  /*
    
 1. Here firstly an array of char type is created , in which char data is stored.
 
 2. This array , here ch, is passed to String constructor.
    
 3. String construcor accepts it as a string and puts in an object whose reference
    is assinged to the reference variable arrayConst.
    
 4. Here the constructor String is initialising the object to which array const
    is pointing to ch.
    
    */
    
    
 // -----STRING CONSTRUCTOR WITH INITIAL VALUE BUT " IN RANGE ."
    
    char[] ch1={'1','2','3','4'};
    String arrayConst2= new String(ch1,1,2);// here 1 and 2 are acting as substr.
    System.out.println("const with parameter ex3-> "+ arrayConst2);
 
 
 
 
 //-----CONSTRUCT ONE STRING FROM ANOTHER
 
 String arrayConst3= new String("vikas");
 String arrayConst4= new String(arrayConst3);
 System.out.println("const with parameter ex4->"+arrayConst3+arrayConst4);



//----CONSTRUCT STRING FROM BYTE ARRAY
 
byte[] b={98,96,97,98};
String arrayConst5=new String(b);
System.out.println("const ex5 "+arrayConst5);
 
 /*
NOTE:
    The contents of the array are always copied from the array as string 
    parameter, hence any modification done in the string never gets reflected
    in the actual array.

    WHENEVER A STRING IS JOINED (+) WITH ANY OTHER DATA TYPE VARIABLE RESULT
    IS ALWAYS STRING.

EX.

System.out.println(a+" ");-------> result will be a string.
Below program will demonstrate this.
*/


// ----DEMO ON STRING CONCATENATION USING + OPERATOR.

int a =5;
String name="vikas";
System.out.println("concatenation example->"+a+name);
 
/*

1. In this example a is a int type and name is string type.

2. When '+' operator is used then compiler will convert 'a' which is of type int to string.

3. Hence the result will always be a concatenation or join never any operation like additon.

4. Any operation like a+a+name , will not result in calculation only string will be 
   printed.

*/
 
 }
}