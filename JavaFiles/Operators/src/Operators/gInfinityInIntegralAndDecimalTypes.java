package Operators;

/*

In integral types, byte , short, int , long there is no way to represent infinity. Hence 
if infinity is the result then we will get ArithmeticException in integral Arithmetic.


*/

class Demo2
{
    
    public static void main(String[] args)
    {
     /* Case 1
     In integral types, byte , short, int , long there is no way to represent infinity. Hence 
     if infinity is the result then we will get ArithmeticException in integral Arithmetic.*/ 
   
      
        
        System.out.println(10/0);   // CE: Arithmetic Exception / by zero.
     
    
    /*
        Case 2:
        In floating point Arithmetic (float and double) there is a way to represent infinity. For this float and double
        classes contain the following two constants.
        
        POSITIVE_INFINITY
        NEGATIVE_INFINITY
        
        Hence even though in this case the result is infinity we will not get any ArithemticException in the case 
        floating point Arithmetic.   */
        
        
        System.out.println(10.0/0); // Infinity
        
        System.out.println(-10.0/0);// -Infinity

    
        
     /*
        
        Case 3:(Nan)Not a Number--> In integral Arithmetic ( byte , short  , int long) there is no way to represent
        undefined results hence if the result is undefined then we will get saying ArithmeicException / by zero.
        
        Example Sytem.out.println(0/0);  RE: RuntimeException division by zero
        
        But in floating point Arithmetic( float and double) types there is a way to represent undefined results.
        For this float and double classes contains NaN constant hence if the result is undefined we will not get
        any ArithmeticException in the case of floating point arithmetic */  
        
       
         System.out.println(0.0/0); //NaN
         
         System.out.println(-0.0/0); //NaN
    
  
    
    
    
    
    
    
    
    
    
    }
}
