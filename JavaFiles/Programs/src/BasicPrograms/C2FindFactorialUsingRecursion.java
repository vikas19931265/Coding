// Find factorial of number by using Recursion.

/*

note
===========

After return is encounteed program stops and control goes to calling function.

*/

package BasicPrograms;

class Fact
{
    public static int factorial(int n)
    {
        if(n==0)
        {
            return 1;
        }
        
        else
        {
            return (n*factorial(n-1));
        }
    }

    public static void main(String[] args)
    {
        System.out.println("factorial is "+factorial(5));
    }


}