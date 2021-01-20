/*

Program to check if the number is prime or not.


*/
package BasicPrograms;

import java.util.*;

class CheckPrime
{
    
    public static void main(String[] args)
    {
        
        System.out.println("Enter the number");
        
        Scanner cn = new  Scanner(System.in);
        
        int input = cn.nextInt();
        
        int status=0;
        
        for(int i=2 ; i< input-1 ;i++)
        {
            
            if(input%i==0)
            {
                status=0;
                
                break;
                
            }
            
            else
            {
                
                status=1;
                
                
            }
            
        }
        
        if(status==0)
        {
            System.out.println("Non prime");
            
        }
        
        else
        {
            System.out.println("Prime numbers");
            
        }
    
    
    
    }
    
    
}

/*
run:
Enter the number
115
Non prime
BUILD SUCCESSFUL (total time: 1 second)


*/