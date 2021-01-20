/*

Creating Multiplication Table

*/
package BasicPrograms;

import java.util.*;
class Table
{
    public static void main(String[] args)
    {
        
        System.out.println("Enter the Number");
        
        Scanner cn = new Scanner(System.in);
        
        int input = cn.nextInt();
        
        for(int i =1 ; i<=10 ; i++)
        {
            
            System.out.print(input + " * "+ i +"  = "+ input*i);
            
            System.out.println();
            
        }
        
        
    }
    
    
}

/*
run:
Enter the Number
9
9 * 1  = 9
9 * 2  = 18
9 * 3  = 27
9 * 4  = 36
9 * 5  = 45
9 * 6  = 54
9 * 7  = 63
9 * 8  = 72
9 * 9  = 81
9 * 10  = 90
BUILD SUCCESSFUL (total time: 2 seconds)

*/