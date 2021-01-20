/*
Logic in order to solve this problem
===========================================

1. we need to choose a variable that is the maxValue which will store the maxValue
   from the array.
2. Another variable called as endValue will be used in order to keep track of sum
   of elements inside the array. If the sum of elements inside the array becomes
   negative then it means we need to reset its value to 0 and needs to start
   the new array.

Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_ending_here < 0)
            max_ending_here = 0
  (c) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
return max_so_far
Explanation:
Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array
(max_ending_here is used for this). And keep track of maximum sum contiguous segment among all positive segments
(max_so_far is used for this). Each time we get a positive sum compare it with max_so_far and update max_so_far
if it is greater than max_so_far.

*/

package StringAndWrapperClassPrograms;
import java.io.*;
import java.util.*;
class KdaneAlogrithm {
    public static void main(String[] args) {
        int[] element = {1,2,3,4,1,2,3,4,-5,20 };
        System.out.println(new KdaneAlogrithm().findLargestSubArray(element));
    }
    public int findLargestSubArray(int[] element) {
        int arraySize = element.length;
        int maxElement = Integer.MIN_VALUE;
        int endPoint = 0;
        int startIndex=0;
        int endIndex=0;
        int status=0;
        int startIndex2=0;
        for (int i = 0; i < arraySize; i++) {
            endPoint = endPoint + element[i];
            if (endPoint > maxElement) {
                maxElement = endPoint;
                endIndex=i;
            }
            if (endPoint < 0 ) {  // if the answer becomes negative we dont want it to be added to the next element, hence we start again and make its value as 0
                                  // if the end value becomes 0 then we want to start the next array.
                endPoint = 0;
                status=1;
                startIndex2=i+1;
            }
            if(status==1 && endPoint>=maxElement)
            {
                startIndex=startIndex2;
            }
        }
        for(int i=startIndex;i<=endIndex;i++)
        {
            System.out.print(element[i]+"\t");
        }
        System.out.println();
        return maxElement;
    }
}

/*
run:
1	2	3	4	1	2	3	4
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/