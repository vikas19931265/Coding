/*

this: to refer current class instance variable
==========================================================================


The this keyword can be used to refer current class instance variable. If there is 
ambiguity between the instance variables and parameters, this keyword resolves the problem of ambiguity.

In this program we are going to use "this" keyword to distinguish between the instance variable
and the local variable.

*/


package this_keyword;


 class Test1 {
    
 int i;  // Here i and j are instance variables.
 int j;
 
 Test1(int i, int j)// Here i and j are local variables
 {
     /*
     1. Here the aim is to pass the value of i  and j recived to the instance variable.
     
     2. But since we are using the same variable name for the instance variables as well as the local variables
        compiler gets confused that which one is which.
     
     3. Hence to distinguish between both types of variables we can use "this" keyword.
     
     4. this keyword followed by dot with variable name tells the compiler to treat it as a 
        instance variables differentiating it from the local variable with the same name
     
     5. If the name of both local variables is different then it will not cause any issue but
        it is recommended to use this keyword.
     
     */
     
     this.i=i; // we have used this.i so that i could be identified as the instance variable 
     this.j=j;
 }
 
 
 public static void main(String[] args)
 {
     Test1 t= new Test1(10,20);
 
     System.out.println(t.i+" "+t.j);
 
 }
 
 
 
 } 
 
 /*
 $javac this_keyword/Test1.java
$java -Xmx128M -Xms16M this_keyword/Test1
10 20
*/

//------------------------------------------------------------------------------------------************************-------------------------