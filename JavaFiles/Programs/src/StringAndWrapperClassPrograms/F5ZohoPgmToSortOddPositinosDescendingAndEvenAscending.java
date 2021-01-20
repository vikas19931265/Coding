/*
2. Write a program to sort the elements in odd positions in descending order and elements in ascending order
Eg 1: Input: 13i,2 4i,15,12i,10,5i
        Output: 13i,2,12i,10,5i,15,4i
Eg 2: Input: 1i,2,3i,4,5i,6,7i,8,9i
        Output: 9,2,7,4,5,6,3,8,1
*/
package StringAndWrapperClassPrograms;
import java.util.*;
class ZohoPgm2
{
    public static void main(String[] args)
    {
        HashMap<Integer,Integer> m1 = new HashMap<>();
        ArrayList<Integer> oddPositions= new ArrayList();
        ArrayList<Integer> evenPositions=new ArrayList();
        int[] input={1,2,3,4,5,6,7,8,9};
        int count=1;
        for(int input1: input)
        {
            m1.put(count,input1);
            count++;
        }
        Set s = m1.entrySet();
        Iterator itr=s.iterator();
        while(itr.hasNext())
        {
            Map.Entry m2=(Map.Entry)itr.next();
            int key=(int)(m2.getKey());
            if(key%2!=0)
            {
                oddPositions.add((int)m2.getValue());
            }
            else
            {
                evenPositions.add((int)m2.getValue());
            }
        }
        Collections.sort(evenPositions);
        Collections.sort(oddPositions,(p1,p2)
                              ->
                      {
                           return -p1.compareTo(p2);
                       }
        );
        //System.out.println(oddPositions);
        //System.out.println(evenPositions);
        for(int i =0;i<oddPositions.size();i++)
        {
            if(i>oddPositions.size()-1)
               System.out.print(evenPositions.get(i)+"\n" );
            else if(i>evenPositions.size()-1)
               System.out.print(oddPositions.get(i)+"\n");
            else
                System.out.print(oddPositions.get(i)+","+ evenPositions.get(i) + ",");
        }
    }
}

/*
run:
[9, 7, 5, 3, 1]
[2, 4, 6, 8]
9,2,7,4,5,6,3,8,1BUILD SUCCESSFUL (total time: 0 seconds)

*/