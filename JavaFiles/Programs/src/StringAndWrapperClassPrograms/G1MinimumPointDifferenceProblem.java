/*

2.Find the distance between two given points and round it to the
nearest number.

Example:
    Input: (2,4)(4,10)
    Output: 6


*/
package StringAndWrapperClassPrograms;
import java.util.*;
class DistanceBetweenPoints
{

    public static void main(String[] args)
    {

        String input="(13,4)(4,10)";
        input=input.replaceAll("\\)\\(", ",");
        input=input.replaceAll("[\\(||\\))]","");
        System.out.println(input);
        String[] inputReplace=input.split(",");
        int point1Diff= Math.abs(Integer.parseInt(inputReplace[0])-Integer.parseInt(inputReplace[1]));
        int point2Diff= Math.abs(Integer.parseInt(inputReplace[2])-Integer.parseInt(inputReplace[3]));

        if(point1Diff>point2Diff)
        {
            System.out.println(point1Diff);
        }
        else
        {
            System.out.println(point2Diff);
        }


    }
}

/*
run:
13,4,4,10
9
BUILD SUCCESSFUL (total time: 0 seconds)

*/