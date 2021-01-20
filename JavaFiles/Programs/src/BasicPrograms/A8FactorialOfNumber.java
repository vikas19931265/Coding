/*

Factorial of number.

*/
package BasicPrograms;

import java.util.*;

class Samples34
{
    
    public static void main(String[] args)
    {
        
        System.out.println("Enter the number");
        
        Scanner cn = new Scanner(System.in);
        
        int input = cn.nextInt();
        
        int result=1;
        
        for(int i =input ; i>=1; i--)
        {
            
            result= result*i;
            
            
        }
    
        System.out.println("The result is " + result);
        
    
    }
    
}

/*
run:
Enter the number
6
The result is 720
BUILD SUCCESSFUL (total time: 1 second)

*/