
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

/*

Ques2:- Given a positive integer ‘n'( 1 <= n <= 1015). Find the largest prime factor of a number.

*/

class LargestPrimeFactor
{
    public static void main(String[] args)
    {
        int number=145;
        ArrayList<Integer> factors= new ArrayList<>();
        ArrayList<Integer> largestFactor= new ArrayList<>();
         for(int i=2;i<number;i++)
        {
            if(number==2)
            {
                System.out.println("largest prime number is number itself " + number);
                break;

            }
            if(number%i==0)
            {
                factors.add(i);
            }
        }
        System.out.println(factors);

        Iterator itr= factors.iterator();
       if(!factors.isEmpty())
       {
        while(itr.hasNext())
        {
            int status=1;
            int element= (int)itr.next();
            for(int i=2; i<element; i++)
            {
                if(element%i==0)
                {
                    status=0;
                }
            }
            if(status==1)
            {
                largestFactor.add(element);
            }

        }
        Collections.sort(largestFactor);
        int size=largestFactor.size();
        System.out.println("largest prime factor for input "+number+ " is "+ largestFactor.get(size-1));
       }

       else
       {
           System.out.println("no largest prime factor is number itself "+ number);
       }
    }

}

/*
run:
[3, 37]
largest prime factor 37
BUILD SUCCESSFUL (total time: 0 seconds)

*/


