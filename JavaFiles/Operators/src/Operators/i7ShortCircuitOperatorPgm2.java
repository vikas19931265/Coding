package Operators;

/*

Example 2:
--------------

Which of the following is the output

1. RE:  Arithmetic Exception / by zero

2. CE:

3. Hello

4. Hi
*/


class Example2
{
    
    public static void main(String[] args)
    {
        
        int x =10;
        
        if(++x<10 && (x/0 >10))
        {
            System.out.println("Hello");
        }
    
        else
        {
            System.out.println("Hi"); 
        }
        
    
    
    }
}

/*

Hi is the output here

This is because ++x<10 returns false hence further arguments are not evaluated
and control straight away goes to the else part to execute.

If we replace && with & then we will get the Runtime exception saying Arithmetic
Exception: division by zero.

run:
Hi
BUILD SUCCESSFUL (total time: 0 seconds)

*/

