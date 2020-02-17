// Program to find occurence of all the characters in String.
import java.util.HashMap;

class OccurenceOfAllChars
{
    public static void main(String[] args)
    {
        String line="my name is vikas gautam";
        HashMap<Character,Integer> m1= new HashMap<>();
        for(int i =0; i<line.length();i++)
        {
            if( m1.containsKey(line.charAt(i)))
            {
                int value= m1.get(line.charAt(i));
                m1.put(line.charAt(i), value+1);
            }
            else
            {
                m1.put(line.charAt(i), 1);
            }
        }
        System.out.println(m1);
    }
}

/*
run:
{ =4, a=4, e=1, g=1, i=2, k=1, m=3, n=1, s=2, t=1, u=1, v=1, y=1}
BUILD SUCCESSFUL (total time: 0 seconds)

*/