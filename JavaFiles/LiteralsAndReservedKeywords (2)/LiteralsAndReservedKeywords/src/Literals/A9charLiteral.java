/*

char literal
================================================

We can specify char literal as single character withing single quotes

                char ch='a';

char ch='a';// this is invalid
        
char ch1=a; // CE: cannot find symbol: variable a , location class Test
    
char ch4='ab'; // invalid

*/
package Literals;



class Example11
{
    
    public static void main(String[] args)
    {
        
        
        char ch='a';// this is invalid
        
        char ch1=a; // CE: cannot find symbol: variable a , location class Test
    
        char ch4='ab';
        
        /*
        
        CE1: unclosed char literal
        
        CE1: unclodes char literal
        
        CE2: not a statement.
        
        
        
        */
    
    
        char ch="ab"; 
                /*
        
        CE: incompatible types, found java.lang.String , required char
                */
                        
    }
    
    
}