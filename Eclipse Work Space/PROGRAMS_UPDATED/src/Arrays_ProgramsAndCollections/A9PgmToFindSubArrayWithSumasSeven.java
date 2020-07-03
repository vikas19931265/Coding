package Arrays_ProgramsAndCollections;

/*
There is an array [1,2,5,4,8,3] and sum = 7. Find all the sub set array such that sum of elements is 7
Example [1+2+4]=7, [2+5]=7, [4+3]=7
*/
import java.util.*;
 class DriverSample
{
    public static void main(String[] args)
    {
        int[] number={1,2,5,4,8,3};
        ArrayList<ArrayList> l = new ArrayList<>();

       l2: for(int i =0; i<number.length;i++)
        {
            ArrayList elements= new ArrayList();
            elements.add(number[i]);
            int resNumber=number[i];
        l1: for(int j=i+1; j<number.length;j++)
            {
               resNumber=resNumber+number[j];

                if(resNumber<7)
                {

                    elements.add(number[j]);

                }

                else if(resNumber>7)
                {

                    resNumber=resNumber-number[j];

                    continue l1;
                }

                else
                {
                    if(resNumber==7)
                    {

                        elements.add(number[j]);
                        l.add(elements);
                    }
                }
            }



        }

    System.out.println(l);
    }
}