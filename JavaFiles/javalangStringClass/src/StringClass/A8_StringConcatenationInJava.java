package StringClass;

/*

String Concatenation in Java
===================================================

In java , String concatenation forms a new String that is a combination of multiple
String. There are two ways to Concat string in java.

    1. By +(String concatenation) operator

    2. By concat method.



                                  1) String concatentaion by +( String concatenation operator)
                                  --------------------------------------------------------------

   java string concatenation operator(+) is used to add strings. For example
*/


class StringConcatenation
{
    public static void main(String[] args)
    {
        
        String s ="Sachin"+ "Tendulkar";
        
        System.out.println(s); //Sachin Tendulkar
        
     }
}

/*

Java compiler will transform above code to this

String s =( new StringBuilder).append("Sachin").append("Tendulkar").toString(););

*/


/*
In java, String concatenation is implemented through the StringBuilder (or StringBuffer) 
class and its append method. String concatenation operator produces a new string by 
appending the second operand onto the end of the first operand. The string concatenation 
operator can concat not only string but primitive values also. For Example:

*/


    class TestStringConcatenation2{  
        
     public static void main(String args[]){  
     
         String s=50+30+"Sachin"+40+40;  
        System.out.println(s);//80Sachin4040  ...Here evaluation is done from left to right
                              // hence first 50+30 is done = 80 and then String is added hence result becomes String
                              // Once result becomes string everything added after it will also become a String only.
     
     }  
    }  

/*Note: After a string literal, all the + will be treated as string concatenation operator */


                                                



                                                  /* 2) String Concatenation by concat() method
                                                --------------------------------------------------- 

The String concat() method concatenates the specified string to the end of current string.

Syntax:

    public String concat(String another)   */


class TestStringConcatenation3{  
     public static void main(String args[]){  
       String s1="Sachin ";  
       String s2="Tendulkar";  
       String s3=s1.concat(s2);  
       System.out.println(s3);//Sachin Tendulkar  
      }  
    }
