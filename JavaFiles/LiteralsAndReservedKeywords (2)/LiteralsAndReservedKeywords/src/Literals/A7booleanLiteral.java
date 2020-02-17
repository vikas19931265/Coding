/*

boolean literals
======================================================

1. The only allowed values for the boolean data type are true or false


*/
package Literals;


class ex7
{
    
    boolean b =true; //valid
    
    boolean b1=0; //invalid
                /*
    
    CE: incompatible types  found , int, required boolean
                
    
                */
        
    boolean b =True;
    
                /*
    Cannot find symbol : variable True
    location :class Test
    
    
            */

    boolean b ="true";
    
         /*
    
    incompatible types : found: java.lang.String , required : boolean
    
        */
         


    


}