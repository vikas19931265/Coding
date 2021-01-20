/*

Odd or even.

*/
package BasicPrograms;

import java.util.*;

class SamplePgm

{
    
    public static void main(String[] args)
    {
        
        System.out.println("Enter the number");
        
        Scanner cn = new Scanner(System.in);
        
        int input= cn.nextInt();
        
        if(input%2==1)
        {
            System.out.println("Odd Number");
            
        }
        
        else
        {
            System.out.println("Even Number");
            
        }
    
    
    }
    
}


/*
run:
Enter the number
7
Odd Number
BUILD SUCCESSFUL (total time: 1 second)

*/