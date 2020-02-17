/*
1. print d 1st non repetable character in a string ( traverse only once thru the string):
    ex:

Input:
    character
    zoho
Outpu:
    h
    z
*/
package StringAndWrapperClassPrograms;

import java.util.*;

class Demo12
{
    public static void main(String[] args)
    {

        String str="amitmishra";
        char[]  ch  = str.toCharArray();
        List<Integer> index = new ArrayList();
        Arrays.sort(ch);
        System.out.println(ch);
        for(int i=0; i<ch.length;i++)
        {
               if(i==0)
               {
                   if(ch[i]!=ch[i+1])
                   {

                       index.add(str.indexOf(ch[i]));

                   }
               }


              if(i>0&&i<ch.length-1)
              {
               if(ch[i]!=ch[i+1] && ch[i]!=ch[i-1] )
               {

                   index.add(str.indexOf(ch[i]));

               }
              }

             if(i==ch.length-1)
             {
                 if(ch[i]!=ch[i-1])
                   {

                       index.add(str.indexOf(ch[i]));

                   }
             }

        }

        Collections.sort(index);

        System.out.println(index);

        int first=index.get(0);

        System.out.println(str.charAt(first));

    }
}


/*
run:
aahiimmrst
[3, 6, 7, 8]
t
BUILD SUCCESSFUL (total time: 0 seconds)

*/