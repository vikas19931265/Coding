
package New;

class ReversNumber
{
    public static void main(String[] args)
    {
        int number=1234;
        int result=0;
        while(number>0)
        {
            int remainder=number%10;
            result=result*10+remainder;
            number=number/10;
        }
        System.out.println("resut is "+ result);
    }
}

/*
run:
resut is 4321
BUILD SUCCESSFUL (total time: 0 seconds)

*/