/*
Write a program which should give an output
*
* *
* * *
* * * *
* * *
* *
*
*/
package PatternProgramming;
import java.util.*;
class Pattern_Programming
{
    public static void main(String[] args)
    {
        System.out.println("Enter the number");
        Scanner cn = new Scanner(System.in);
        int input= cn.nextInt();
        for(int i=1 ; ;i++) // No test condition
        {
           if(i==input) // When value of i becomes input then will start new star pattern
           {
               for(int i1=input-1;i1>=1;i1--)
               {
                   for(int j1=i1; j1>=1; j1--)
                   {
                     System.out.print("*");
                   }
                   System.out.println();
               }
               break;
           }
            // If i value is not equal to input passed contiune with normal start pattern //
            for(int j=1 ;j<=i;j++)
            {
                System.out.print("*");
            }
           System.out.println();
        }
    }
}
/*
run:
Enter the number
8
*
**
***
****
*****
******
*******
*******
******
*****
****
***
**
*
BUILD SUCCESSFUL (total time: 2 seconds)
*/