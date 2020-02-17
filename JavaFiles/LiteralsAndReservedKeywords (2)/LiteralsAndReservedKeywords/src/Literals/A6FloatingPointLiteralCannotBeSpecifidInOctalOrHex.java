/*


We can specify floating point literals only in the decimal form and we cannot
specify in octal or hexadecimal form


We can assign integral literal directly to floating point variables and that 
integral literal can be specified either in  decimal , octal or hexedecimal form.


We cannot assign floating point literals to integral types

    double d =10;

    int x =10.0; //CE: found double , required int


We can specify floating point even in the exponential form that is scientific notation.

        Example
         double d8 =1.2e3; // this is actual 1.2*1000=1200.0
      
         System.out.println(d8) ;//1200.0
    
         float f = 1.2e3; // this is actually double 1.2*1000=1200.0;
                       //CE: possible loss of precision , found double required float.
                       
    
        float f1=1.2e3f; // this is valid.
    
    

*/

package Literals;



class ex6
{
    public static void main(String[] args)
    {
    double d=123.456;
    
    double d1=0123.456; //This is valid as in floating point literals, prefixing number
                        // with 0 does not create any affect, number remains as it is
                        //It is equivalent to 123.456;     
    
    double d2= 0X123.456; // CE: malformed floating point literal


    /*very interesting */
    
    double d11= 0786;
    
            /*
                This is invalid as 0786 by default is integral literal
                This integral literal is prefixed with 0 hence its
                octal literal. And in octal literal(0--7) , 8 is not a valid
                number*/
    
    double d5 = 0XFace;
            /*
    
            This is valid as 0XFace is integral literal first and then it is 
            prefixed with 0X hence it becomes hexadecimal literal
            and all its numbers and chars are in the hexadecimal range.
    
             */
    
    double d9 =0786.0;
            /*
            
             in floating point literal suffix it with 0 does not does any affect. 
             Its same as writing 786.0 . however in case the literal would have 
             been of integral type then it would have been octal
            
            */
            
      double d4=10; // valid
      

      System.out.println(d4);// 10.0

      double d0=0777; valid
              

    
      int x =10.0; //CE: found double , required int
    
    
      //----------exponential literal------------------
      
      double d8 =1.2e3; // this is actual 1.2*1000=1200.0
      
      System.out.println(d8) ;//1200.0
    
    
      float f = 1.2e3; // this is actually double 1.2*1000=1200.0;
                       //CE: possible loss of precision , found double required float.
                       
    
      float f1=1.2e3f; // this is valid.
    
    
      
    
    }
}