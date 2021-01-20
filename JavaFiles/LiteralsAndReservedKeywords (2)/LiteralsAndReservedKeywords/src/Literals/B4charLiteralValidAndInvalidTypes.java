/*

Which of the following are valid???????????
======================================================

*/
package Literals;


class ex44
{
    
    public static void main(String[] args)
    {
        
        char ch = 65536 ; // invalid , as number is out of char range
        
        char ch1=0XBeef; // valid 
        
                /*
               
        This is valid as 0XBeef is firstly of integral type, and for integral
        types hexadecmial representation is possible. This hexadcimal representation
        will be converted into the corresponding character type.
        
        
                    */
        
        
        
       char ch2= \uface;  // invalid unclosd literal
        
    
       char ch3= '\ubeef'; // valid ->This will give unicode representation of 'beef" that 
                           // in hexadecimal and then the corresponding char value 
                           // associated with it will be returned.
    
    
     char ch4='\m'; // invalid escape character
     
     char ch='\iface'; // invalid unclosed character literal error as "\" is orphaned and
                      // compiler is expecting a proper escape character.
    
    
    }
}
