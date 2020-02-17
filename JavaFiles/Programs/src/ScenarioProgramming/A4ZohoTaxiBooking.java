
package ScenarioProgramming;
import java.util.*;
class Taxi
{
    static HashMap<String, ArrayList> m = new HashMap<>();
    public void initializeAllTaxis()
    {
        m.put("taxi1", new ArrayList());
        m.put("taxi2", new ArrayList());
        m.put("taxi3", new ArrayList());
        m.put("taxi4", new ArrayList());
        m.put("taxi5", new ArrayList());
        Set s = m.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext())
        {
            Map.Entry m1 = (Map.Entry) itr.next();
            ArrayList l = (ArrayList) m.get(m1.getKey());
            l.add("A null -1 -1 -1");
        }
    }
    public String startBooking(String startPoint, String destPoint, int time)
    {
        int totalCharges = 0;
        int noOfDestPoints = 0;
        int totalDistance = 0;
        int totalTime = 0;
        String taxiName = TaxiBookingApplication.t.findFreeTaxi(startPoint, destPoint, time);
        if (!taxiName.equals("null"))
        {
            noOfDestPoints = Math.abs((int) destPoint.charAt(0) - (int) startPoint.charAt(0));
            totalDistance = 15 * noOfDestPoints;
            totalCharges = ((totalDistance - 5) * 10) + 100;
            totalTime = (noOfDestPoints * 1) + time;
            ArrayList l = m.get(taxiName);
            l.add("" + startPoint + " " + destPoint + " " + time + " " + totalTime + " " + totalCharges);
            return taxiName;
        } else
        {
            return "null";
        }
    }
    public String findFreeTaxi(String startPoint, String destPoint, int time)
    {
        ArrayList l1 = new ArrayList();
        Set s = m.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext())
        {
            Map.Entry m1 = (Map.Entry) itr.next();
            ArrayList l = (ArrayList) m1.getValue();
            int arraySize = l.size();
            String lastElement = (String) l.get(arraySize - 1);
            String[] splitValue = lastElement.split(" ");
            if (splitValue[1].equals("null") || Integer.parseInt(splitValue[3]) < time)
            {
                l1.add(m1.getKey() + " " + lastElement);
            }
        }
        Iterator itr1 = l1.iterator();
        TreeMap m2 = new TreeMap();
        TreeMap m3 = new TreeMap();
        while (itr1.hasNext())
        {
            String element = (String) itr1.next();
            String[] splitValue = element.split(" ");
            if (splitValue[2].equals("null"))
            {
                m2.put(splitValue[1], splitValue[0]);
                continue;
            }
            m2.put(splitValue[2], splitValue[0]);
        }
        Set s1 = m2.entrySet();
        Iterator itr2 = s1.iterator();
        while (itr2.hasNext())
        {
            Map.Entry m1 = (Map.Entry) itr2.next();
            String key = (String) m1.getKey();
            int asciiValue = Math.abs((int) key.charAt(0) - (int) startPoint.charAt(0));
            String value = (String) m1.getValue();
            m3.put(asciiValue, value);
        }
        Set s4 = m3.entrySet();
        Iterator itr4 = s4.iterator();
        if (itr4.hasNext())
        {
            Map.Entry m1 = (Map.Entry) itr4.next();
            String value = (String) m3.get(m1.getKey());
            return value;
        }
        return "null";
    }
    public void getDetails()
    {
        Set s = m.entrySet();
        Iterator itr = s.iterator();
        while (itr.hasNext())
        {
            int total=0;
            Map.Entry m1 = (Map.Entry) itr.next();
            System.out.println(m1.getKey());
            ArrayList value = (ArrayList) m.get(m1.getKey());
            Iterator itr2 = value.iterator();
            while (itr2.hasNext())
            {
                String elements=(String)itr2.next();
                System.out.println(elements);
                String[] ele=elements.split(" ");
                if(ele[4].equals("-1"))
                {
                  continue;
                }
                total=total+Integer.parseInt(ele[4]);
            }
            System.out.println("Total amount earned is "+ total);

        }
    }
}
class TaxiBookingApplication
{
    static Taxi t = new Taxi();
    public static void main(String[] args)
    {
        System.out.println("=====Taxi Booking System=======");
        System.out.println();
        t.initializeAllTaxis();
        while (true)
        {
            System.out.println("Press 1 to start booking , 0 to stop booking and 2 to view details");
            Scanner cn = new Scanner(System.in);
            int input = cn.nextInt();
            if (input == 0)
            {
                break;
            }
            if (input == 2)
            {
                t.getDetails();
                continue;
            }
            System.out.println("Enter the starting point");
            Scanner cn1 = new Scanner(System.in);
            String startPoint = cn1.nextLine();
            System.out.println("Enter the destination point");
            Scanner cn2 = new Scanner(System.in);
            String destPoint = cn2.nextLine();
            System.out.println("Enter the time you want to board taxi");
            Scanner cn3 = new Scanner(System.in);
            int time = cn3.nextInt();
            String taxiNumber = t.startBooking(startPoint, destPoint, time);
            if (taxiNumber.equals("null"))
            {
                System.out.println("No free taxi is available");
            } else
            {
                System.out.println(taxiNumber + " booking is done successfully");
            }
        }
    }
}
