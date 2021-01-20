/*

We can specify char literal as integral literals which represents unicode value of
the character and that integral Literal can be specified in either decimal or octal
or hexadecmial form but allowed range is 0 to 65,535. 

Sometimes we can get same character as output for multiple Unicode values. The reason 
is that the font for that particular unicode is not present in system but there is 
definitely a unique character associated with it.



We can represent char literal in unicode representation which is nothing but

            '/uxxxx'
                |
                |---------->4 digit hexadecimal number


*/
package Literals;



class Examples
{
    public static void main(String[] args)
    {
        char ch=97; // char can take literal values from 0 to 65535. This is similar to short
                   // and byte where if the literal value is in the data type range then it is
                  //  treated as of that type only. If the range exceeds maximum then it 
                  // will be treated as int only. Output will be 'a' when ch is printed.
        
        System.out.println(ch);
        
        char ch1=0xFace;
        
        char ch2= 0777;
        
        char ch3=65535;
        
    
        char ch7='\u0061'; // 4 digit hexadecmial number converted to char
        
        System.out.println(ch7); // a
        
        try{
        
            char ch4=65536; // invalid, CE: possible loss  of precision found int, required char 
        
        }catch(Exception e){}
    }
}