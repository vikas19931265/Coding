/*
5. Given a two dimensional array of string like
  <”luke”, “shaw”>
  <”wayne”, “rooney”>
  <”rooney”, “ronaldo”>
  <”shaw”, “rooney”> 
Where the first string is “child”, second string is “Father”. And given “ronaldo” we have to find his no of grandchildren Here “ronaldo” has 2 grandchildren. So our output should be 2
*/
package StringAndWrapperClassPrograms;
import java.util.*;
 class FindTheFather1 {
     public static void main(String[] args)
     {
         HashMap<String,String> m= new HashMap<>();
         Set<String> parents= new HashSet();
         HashMap<String,ArrayList<String>> grandParents= new HashMap<>();
         ArrayList<String> l;
         String input="shaw";
         String[][] relations={
                                {"luke","shaw"},
                                {"wayne","rooney"},
                                {"rooney","ronaldo"},
                                {"shaw","rooney"},
                                {"ravi","luke"},
                                {"aarav","luke"},
                                {"amar","luke"}
         };
         for(String[] rel: relations)
         {
             m.put(rel[0], rel[1]);
         }
         Set s =m.entrySet();
         Iterator itr=s.iterator();
         while(itr.hasNext())
         {
             Map.Entry m1=(Map.Entry)itr.next();
             parents.add((String)m1.getValue());
         }
         l1: for(String s2: parents)
       {
           int count=0;
           Set s1=m.entrySet();
           Iterator itr1=s1.iterator();
           l=new ArrayList();
           while(itr1.hasNext())
           {
               Map.Entry m2=(Map.Entry)itr1.next();
               String key=(String)m2.getKey();
               String value=(String)m2.getValue();
               if(value.equals(s2))
               {   l.add(key);
                   count++;
               }
           }
           if(m.get(s2)!=null)
           {
            String father=m.get(s2);
            if(father.equals(input))
            {   System.out.println(father+" has "+count+" grandchildrens ");
                grandParents.put(s2, l);
            }
          }
       }
      if(grandParents.isEmpty())
          System.out.println("no grandchildrens");
      else
      {
          Set s2=grandParents.entrySet();
          Iterator itr3=s2.iterator();
          while(itr3.hasNext())
          {
              Map.Entry m4=(Map.Entry) itr3.next();
              ArrayList l4 =(ArrayList)m4.getValue();
              Iterator itr5=l4.iterator();
              while(itr5.hasNext())
              {
                  System.out.println("\t"+itr5.next());
              }
          }
      }
     }
 }
/*
run:
amar has no grandchildrens
BUILD SUCCESSFUL (total time: 0 seconds)
*/