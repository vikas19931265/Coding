/*
3. Write a program to print the following output for the given input. You can assume the string is of odd length
Eg 1: Input: 12345
       Output:
1       5
  2   4
    3
  2  4
1      5
Eg 2: Input: geeksforgeeks
         Output:
g                         s
  e                     k
    e                 e
      k             e
        s         g
          f      r
             o
          f     r
        s         g
      k             e
    e                 e
  e                      k
g                          s
*/
package PatternProgramming;
class ZohoProgramSample
{
    public static void main(String[] args)
    {
        String inp="vikasgautam";
        char input[]=inp.toCharArray();
        int size =inp.length();
        int k=size-1;
        l1: for(int i =0; i<size;i++)
        {
            l2: for(int j=0;j<size;j++)
            {
                if(i==k && i==j)
                {      System.out.print(input[i]);
                       continue l2;
                }
                if(i==j)
                   System.out.print(input[i]);
                if(j==k)
                    System.out.print(input[k]);
                else
                    System.out.print(" ");
            }
            System.out.println();
        k--;
        }
    }
}


/*
run:
v          m
 i        a
  k      t
   a    u
    s  a
     g
    s a
   a   u
  k     t
 i       a
v         m
BUILD SUCCESSFUL (total time: 0 seconds)

*/