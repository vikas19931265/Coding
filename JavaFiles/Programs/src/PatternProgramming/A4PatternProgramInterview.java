/*

 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
 0 1 0 1 0 1
 0 1 0 1 0 1 0
 1 0 1 0 1 0 1 0

*/
package PatternProgramming;

import java.util.*;


class Samples
{
    public static void main(String[] args)
    {
        System.out.println("Enter the number");
        
        Scanner cn =  new Scanner(System.in);
        int input= cn.nextInt();
        
        int k=1;
        
        for(int i =1; i<=input; i++)
        {
            
            for(int j=1 ; j<=i ; j++  )
            {
                
                if(k%2 ==1 )
                {
                    System.out.print (" " +1);
                    
                    k++;
                    
                    
                
                }
                
                else
                {
                    System.out.print (" "+ 0);
                    
                    k++;
                    
                }
            
            
            
            }
        
        
            System.out.println();
        
        }
        
        
    }
    
    
}


/*
run:
Enter the number
8
 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
 0 1 0 1 0 1
 0 1 0 1 0 1 0
 1 0 1 0 1 0 1 0
BUILD SUCCESSFUL (total time: 3 seconds)

*/