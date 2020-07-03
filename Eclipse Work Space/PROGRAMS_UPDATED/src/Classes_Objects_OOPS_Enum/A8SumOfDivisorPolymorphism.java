import java.util.*;
interface AdvancedArithmetic{
  int divisor_sum(int n);
}
class MyCalculator implements AdvancedArithmetic
{
    int sum=0;
    public int divisor_sum(int n)
    {
        for(int i=1; i<=n; i++)
        {
            if(n%i==0)
            {
                sum=sum+i;
            }
        }

    return sum;
    }
}

class Driver
{
    public static void main(String[] args)
    {
        MyCalculator c = new MyCalculator();
        System.out.println(c.divisor_sum(6));
    }
}

/*
run:
12
BUILD SUCCESSFUL (total time: 0 seconds)

*/