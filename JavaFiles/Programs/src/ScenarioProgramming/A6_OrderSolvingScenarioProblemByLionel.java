package ScenarioProgramming;
import java.util.*;
class PgmScenario
{
    static ArrayList<HashMap<String,Integer>> m1= new ArrayList<>();
    public ArrayList addElements()
    {
        HashMap element1= new HashMap();
        element1.put("Ordered", 25);
        m1.add(element1);
        HashMap element2= new HashMap();
        element2.put("Processing", null);
        m1.add(element2);
        HashMap element3= new HashMap();
        element3.put("Processing", 37);
        m1.add(element3);
        HashMap element4= new HashMap();
        element4.put("Processing", 48);
        m1.add(element4);
        HashMap element5= new HashMap();
        element5.put("Shipped", null);
        m1.add(element5);
        HashMap element6= new HashMap();
        element6.put("Shipped", 48);
        m1.add(element6);
        HashMap element7= new HashMap();
        element7.put("Ready for Picked up", 65);
        m1.add(element7);
        HashMap element8= new HashMap();
        element8.put("Ready for Picked up", 54);
        m1.add(element8);
        HashMap element9= new HashMap();
        element9.put("Processing", 100);
        m1.add(element9);
        return m1;
    }
    public void findOrder(ArrayList m2, String input)
    {
        ArrayList<HashMap<String,Integer>> m1= new ArrayList<>();
        HashMap<String,Integer> m3;
        String[] inputElements=input.split(",");
        for(String inputElements1: inputElements)
        {   m3=new HashMap();
            m3.put(inputElements1, null);
            int max=0;
            Iterator itr=m2.iterator();
            l1: while(itr.hasNext())
            {
                HashMap m=(HashMap)itr.next();
                if(m.containsKey(inputElements1))
                {
                    Integer value=(Integer)m.get(inputElements1);
                    if(value==null)
                    {
                        continue l1;
                    }
                    if(value>max)
                    {
                        max=value;
                        m3.put(inputElements1, max);
                    }
                }
            }
         m1.add(m3);
        }
        System.out.println(m1);
    }
    public static void main(String[] args)
    {
        String input="Ordered,Processing,Shipped,Ready for Picked up,Picked up";
        ArrayList l= new PgmScenario().addElements();
        new PgmScenario().findOrder(l,input);
    }
}

/*
run:
[{Ordered=25}, {Processing=48}, {Shipped=48}, {Ready for Picked up=65}, {Picked up=null}]
BUILD SUCCESSFUL (total time: 0 seconds)

*/