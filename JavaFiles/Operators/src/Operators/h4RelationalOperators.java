package Operators;

/*

Relational Operators( <, <=,>,>=)
======================================================================================


1. We can apply relational operators to every primitive type , except boolean.


2. Relational operators cannot be applied to the object types

        example
            
            System.out.println("durag123">"durga");
            
CE: Operator > cannot be applied to java.lang.String, java.lang.String


3. Relational operators are also evaluated from left to right.


4. Nesting of relational operators is not allowed in java , otherwise we will 
   get the compile time error.


*/

class Demo7{
    
    public static void main(String[] args)
    {
        
        System.out.println(10<20); //true
    
       
        System.out.println('a'<10);//false
       
        System.out.println('a'<97.6);// true
                // a will be prmoted to int first, hence it becomes 97 then it is promoted to double 97.0
        
        System.out.println('a'>'A');//true
        
        
     // System.out.println(true> false); operator > cannot be applied to the boolean type
    
    
     //  System.out.println("durga"<"durga");CE: Operator > cannot be applied to java.lang.String, java.lang.String
    
    
   
    // System.out.println(10<20<30) ;/ CE: Operator < cannot be applied to boolean, int
    //                     true<30         Nesting of relational operators is not allowed. 
    
    }


}

