
import java.util.Arrays;



class AnagramCheck
{
    public static void main(String[] args)
    {
        String line="vikas";
        String newLine="sakiv";

        char[] line1= line.toCharArray();
        char[] newLine1= line.toCharArray();

        Arrays.sort(line1);
        Arrays.sort(newLine1);

        line= new String(line1);
        newLine=new String(newLine1);

        if(line.equals(newLine))
        {
            System.out.println("Anagram");
        }

        else
        {
            System.out.println("not anagram");
        }
    }
}

/*
run:
Anagram
BUILD SUCCESSFUL (total time: 0 seconds)

*/