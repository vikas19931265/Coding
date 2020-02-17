/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package New;

class PrimeNumberCheck
{
    public static void main(String[] args)
    {
        int number=11;
        int status=1;
        for(int i=2; i<number; i++)
        {
            if(number%i==0)
            {
                status=0;
                break;
            }
        
        }
        if(status==0)
        {
            System.out.println("Number is not prime");
        }
        else
        {
            System.out.println("Number is prime");
        }
    }
}
/*
run:
Number is prime
BUILD SUCCESSFUL (total time: 0 seconds)

*/