/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package StringAndWrapperClassPrograms;

import java.util.Arrays;

/**
 *
 * @author vikas
 */
public class F8ShiftZerostoRightAnotherWay
{
    public static void main(String[] args)
    {
        int arr[]= {0,2,0,4,5,0,6,0};
        int res[] = new int[arr.length];
        int elementsPositions=0;

        for(int i: arr)
        {
            if(i!=0)
            {
                res[elementsPositions]=i;
                elementsPositions++;
            }
        }

        System.out.println(Arrays.toString(res));

    }
}

/*
run:
[2, 4, 5, 6, 0, 0, 0, 0]
BUILD SUCCESSFUL (total time: 0 seconds)

*/