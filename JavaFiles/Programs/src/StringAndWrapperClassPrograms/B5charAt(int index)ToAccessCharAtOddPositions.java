/*

Using charAt() to access the character in String present at the odd places
===============================================================================

*/
package StringAndWrapperClassPrograms;

import java.util.*;

class StringProgram

{
    
    public static void main(String[] args)
    {
        
        System.out.println("Enter the String");
        
        Scanner cn = new Scanner (System.in);
        
        String input = cn.nextLine();
        
        for(int i= 0 ; i< input.length(); i++)
        {
            
            if(i% 2 == 1)
            {
                
                System.out.println( input.charAt(i) );
                
                
            }
            
            
        }
        
    }
    
    
}

/*
run:
Enter the String
Aamir
a
i
BUILD SUCCESSFUL (total time: 2 seconds)
*/