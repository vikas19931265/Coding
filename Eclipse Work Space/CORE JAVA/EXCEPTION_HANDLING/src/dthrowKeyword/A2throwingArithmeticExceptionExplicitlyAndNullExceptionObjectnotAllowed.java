                    package dthrowKeyword;

/*

 Best use of throw keyword is for user defined exceptions or customized exceptions.

*/

//Case 1:

class Test11 {
    

     static ArithmeticException e = new ArithmeticException();
     
     public static void main(String[] args)
     {
         
         throw e; // we are throwing ArithmeticException explicitly here.
     }
 
 
 }



/*
run:
Exception in thread "main" java.lang.ArithmeticException
	at session4.Test11.<clinit>(NewClass1.java:18)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/


//Case 2:

class Test12 {
    

     static ArithmeticException e ;
     
     public static void main(String[] args)
     {
         
         throw e; // if e refers null , then we will get null pointer exception.
     }
 
 
 }


/*

run:
Exception in thread "main" java.lang.NullPointerException
	at session4.Test12.main(NewClass1.java:54)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/

//-------------------------------------------------------------------------REVISED---------------------------------------