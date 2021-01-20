package Collections;
import java.util.*;
class RemoveDuplicateChars
{
   public static void main(String[] args)
    {
        Set<Character> s = new LinkedHashSet();
        String input="vvvviiiikkkkaaassss";
        String newInput="";
        char[] inputElements= input.toCharArray();
        for(char in1: inputElements)
        {
            s.add(in1);
        }
        for(Character ch1: s)
        {
            newInput= newInput+Character.toString(ch1);
        }
        input=newInput;
        System.out.println(input);
    }
}
/*
run:
vikas
BUILD SUCCESSFUL (total time: 1 second)
*/
