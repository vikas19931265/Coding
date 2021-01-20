// find max number in array

package Arrays_ProgramsAndCollections;


class FindMaxNumberArray
{
    public static void main(String[] args)
    {
        int[] numbers={6,4,7,8,9,10,8,78};
        int maxNumber=0;

        for(int num:numbers)
        {
            if(num>maxNumber)
            {
                maxNumber=num;
            }
        }

        System.out.println(maxNumber);
    }
}

/*
run:
78
BUILD SUCCESSFUL (total time: 0 seconds)

*/