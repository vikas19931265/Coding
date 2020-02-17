
/*

We cannot store a fractional data type variable value inside the integral data type variable.


CE: error: incompatible types: possible lossy conversion from float to short
                     short s1=10f;

*/


package DataTypes;



class Sample
{
    
    public static void main(String[] args)
    {
        
        short s =10; // completely valid 10 by default of int type , but int type has no integral part
                     // and short also has no integral part hence short can hold it.
                     
                    
        
        /*
                     
        short s1=10f;  short s1=10d
                     
              This is invalid, we will get the compile time error as 10 is now
              treated as float and float contains integral part hence we will 
              get the compile time error.
                     
               same logic applies to double types as well.      
                     
                     
                     CE: incompatible type : possible lossy conversion from float to short.       
                     
                     
                     
                     
                     
                     */             
                     
    }
}