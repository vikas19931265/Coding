import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

 class Solution1234 {

     static ArrayList<ArrayList<String>> elements= new ArrayList<>();
     static ArrayList<String> childElements;

    static int num_coorinates_on_best_path(List<Integer> x_arr, List<Integer> y_arr) {

       for(int i=0,j=0 ; (i<x_arr.size() && j< y_arr.size()); i++, j++)
        {
            childElements= new ArrayList<>();
            String ele=x_arr.get(i) +"," +y_arr.get(j);
            childElements.add(ele);
            elements.add(childElements);

        }
        System.out.println(elements);

        Iterator itr= elements.iterator();
        int highestFrequencyNumber=-9999;
        HashMap<Integer,Integer> hasElements= new HashMap<>();
        while(itr.hasNext())
        {
            ArrayList childElements=  (ArrayList)itr.next();
            Iterator it1= childElements.iterator();
            while(it1.hasNext())
            {
                String childEle2= (String) it1.next();
                String frequencyElement="";
                for(int i=0; i<childEle2.length(); i++)
                {
                    if(childEle2.charAt(i)==',')
                    {
                        break;
                    }
                    else
                    {
                        frequencyElement= frequencyElement+ Character.toString(childEle2.charAt(i));
                    }
                }
                int frequencyElementString= Integer.parseInt(frequencyElement);
                if(hasElements.containsKey(frequencyElementString))
                {
                    int value= hasElements.get(frequencyElementString);
                    hasElements.put(frequencyElementString, value+1);
                }
                else
                {
                    hasElements.put(frequencyElementString, 1);
                }

            }
        }

        //System.out.println(hasElements);

        Set s= hasElements.entrySet();
        Iterator it2= s.iterator();
        int maxFrequency=-9999;
        while(it2.hasNext())
        {
            Map.Entry m1=(Map.Entry) it2.next();
            if((int)m1.getValue()>maxFrequency)
            {
                maxFrequency=(int)m1.getKey();
            }
        }

        System.out.println(maxFrequency);
        int finalValue= hasElements.get(maxFrequency);
        //System.out.println("valu is"+ hasElements.get(maxFrequency));


        return finalValue;
    }

    public static void main(String[] args) throws IOException {
       ArrayList ele1= new ArrayList();
       ele1.add(2);
       ele1.add(3);
       ele1.add(2);
       ele1.add(4);
       ele1.add(2);

       ArrayList ele2= new ArrayList();
       ele2.add(2);
       ele2.add(2);
       ele2.add(6);
       ele2.add(5);
       ele2.add(8);


      System.out.println(num_coorinates_on_best_path(ele1,ele2));


    }
}
