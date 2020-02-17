/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package StringAndWrapperClassPrograms;

class PerfectSquareNumber
{
    public static void main(String[] args)
    {

        for(int i=2 ; i<=1000 ; i++)
        {   int k =1;
            while(k<=i)
            {
                if(k*k==i)
                {
                    System.out.println(i);
                }
            k++;
            }
        }
    }
}

/*
run:
4
9
16
25
36
49
64
81
100
121
144
169
196
225
256
289
324
361
400
441
484
529
576
625
676
729
784
841
900
961
BUILD SUCCESSFUL (total time: 0 seconds)

*/