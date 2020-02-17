/*
program to remove the duplicate elements from the array.
*/
package New;
import java.util.*;
class RemoveDuplicateElementsFromArray
{
    public static void main(String[] args)
    {
        int[] elements={1,4,5,1,4,6};
        HashMap<Integer,Integer> m1 = new HashMap();
        int[] newElement=null;
        for(int ele:elements)
        {
            if(m1.containsKey(ele))
            {
                int value=m1.get(ele);
                m1.put(ele, value+1);
            }
            else
            {
                m1.put(ele,0);
            }
          Collection c =m1.keySet();
          newElement=new int[m1.size()];
          int i=0;
          for(Object c1: c)
          {
              newElement[i]=(int)c1;
              i++;
          }
        }
        elements=newElement;
        for(int ele:elements)
        {
            System.out.println(ele);
        }
    }
}

/*
program to remove the duplicate elements from the array
*/
