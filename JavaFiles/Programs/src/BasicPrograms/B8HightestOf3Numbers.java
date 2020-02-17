/*

Highest of 3 Numbers
==============================================================================

*/
package BasicPrograms;

import java.util.*;

class HighestOfThreeNumber
{
    
    public static void main(String[] args)
    {
        
        System.out.println("Enter the first number");
        
        Scanner cn = new Scanner(System.in);
        
        int number1 = cn.nextInt();
        
        System.out.println("Enter the Second Number");
        
        int number2= cn.nextInt();
        
        System.out.println("Enter the Third Number");
        
        int number3= cn.nextInt();
        
        
        if(number1>number2)
        {
            
            if(number1>number3)
            {
                
                System.out.println( number1+ "is the greatest");
            }
            
        
            else
            {
                
                System.out.println(number3+ "is the greatest");
                
            }
        
        
        }
        
        
        else
        {
            
            if(number2>number3)
            {
                
                System.out.println(number2+"is greatest");
            }
        
        
            else
            {
                System.out.println(number3+"is greatest");
                
            }
        
        }
        
        
        
        
        
    }
    
    
    
}
