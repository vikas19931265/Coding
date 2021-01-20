package Operators;

/*

1. Consider the following declarations.

        String a= "Durga";

        int b =10, c=20, d=30;


Which of the following expressions are valid

1. a= b+c+d;

2. a= a+b+c;

3. b=a+c+d;

4. b=b+c+d;


*/

class StringConcatDemo2
{
    
    
    public static void main(String[] args)
    {
    
    String a ="Durga";
    
    String a1 ="Durga";
    
    String a2 ="Durga";
    
    String a3 ="Durga";
    
    int b =10, c=20 , d=30;
    
     //   a= b+c+d; CE: incompatible types, found int, required java.lang.String
     
            
     
      a=a+b+c; // valid
      
      
     //  b=a1+c+d; CE: incmopatible types, found java.lang.String required int.
    
    
     b=b+c+d;  // valid
    
     
    }
    

}


