/*
4. Find if a String2 is substring of String1. If it is, return the index of the first occurrence. else return -1.
Eg 1:Input:
        String 1: test123string
         String 2: 123
        Output: 4
Eg 2: Input:
        String 1: testing12
        String 2: 1234
        Output: -1
*/
package StringAndWrapperClassPrograms;
class ZohoPgmExample
{
    public int findSubstring(String input1, String input2)
    {
        if(input1.contains(input2))
        {
            System.out.println("found");
            int result=input1.indexOf(input2);
           return result;
        }
        else
        {
            return -1;
        }
    }
    public static void main(String[] args)
    {
      System.out.println(new ZohoPgmExample().findSubstring("testing12", "1234"));
    }
}

/*
run:
-1
BUILD SUCCESSFUL (total time: 0 seconds)

*/