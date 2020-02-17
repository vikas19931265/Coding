
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;


class NodesNotReachableJavaProblem
{
    public static void main(String[] args)
    {
        System.out.println("Enter the nodes combination input ..press 0 to exit");
        ArrayList l = new ArrayList();
        Scanner cn= new Scanner(System.in);
        String input= cn.nextLine();
        while(true)
        {
            if(input.equals("0"))
            {
                break;
            }
           l.add(input);
           input=cn.nextLine();
        }
        System.out.println("Enter starting node");
        int startNode= cn.nextInt();
        System.out.println("Enter time to live");
        int timeToLive= cn.nextInt();
        findNode(l,startNode,timeToLive);
    }

    public static void findNode(ArrayList l, int startPoint, int ttl)
    {
        HashMap m = new HashMap();
        ArrayList reachableNodes= new ArrayList();;
        reachableNodes.add(startPoint);
        Iterator itr=l.iterator();
        Set completeElements= new HashSet();
        while(itr.hasNext())
        {
            String value= (String) itr.next();
            String value1="";
            String value2="";
            int status=0;
            for(int i=0 ; i<value.length(); i++)
            {
                if((int)value.charAt(i)==32)
                {
                    status=1;
                    continue;
                }
                if(status==1)
                {
                    value2=value2+ Character.toString(value.charAt(i));
                }
                if(status==0)
                {
                    value1=value1+Character.toString(value.charAt(i));
                }

            }
            int intValue1= Integer.parseInt(value1.trim());
            int intValue2=Integer.parseInt(value2.trim());

            m.put(new StringBuffer(Integer.toString(intValue1)), new StringBuffer(Integer.toString(intValue2)));
            completeElements.add(intValue1);
             completeElements.add(intValue2);

        }
        //System.out.println("hashmap is " +m);
        int k=0;
        ArrayList elements;
        while(k<ttl)
        {
            elements= new ArrayList();
            Iterator it1= reachableNodes.iterator();
            while(it1.hasNext())
            {
                int reachableNodeValue= (int) it1.next();
                Set s = m.entrySet();
                Iterator its= s.iterator();
                while(its.hasNext())
                {
                    Map.Entry m1=(Map.Entry)its.next();
                    int sb1= Integer.parseInt(   ((StringBuffer)m1.getKey()).toString() );
                    int sb2= Integer.parseInt(   ((StringBuffer)m1.getValue()).toString() );
                    if(sb1==reachableNodeValue)
                    {
                        elements.add(sb2);
                    }

                      if(sb2==reachableNodeValue)
                    {
                        elements.add(sb1);
                    }
                }
            }
            reachableNodes.addAll(elements);
            k++;
        }

        Set removeDuplicates= new HashSet(reachableNodes);
       // System.out.println("com" +completeElements);
        //System.out.println("rem d "+ removeDuplicates);
        completeElements.removeAll(removeDuplicates);
        System.out.println("not reachable nodes are "+ completeElements);

       }
    }

/*
run:
Enter the nodes combination input ..press 0 to exit
10 15
15 20
20 25
10 30
30 47
47 50
25 45
45 65
15 35
35 55
20 40
50 55
35 40
55 60
40 60
60 65
0
Enter starting node
35
Enter time to live
2
not reachable nodes are [65, 45, 47, 25, 30]
BUILD SUCCESSFUL (total time: 10 seconds)

*/