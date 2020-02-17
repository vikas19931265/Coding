package AutoBoxingAndAutoUnboxing;


// Converting char to int.

import java.util.*;

class Sample111
{
    public static void main(String[] args)
    {

       System.out.println("Enter the number");

       Scanner cn = new Scanner(System.in);

       String input= cn.nextLine();

       char[] c = new char[input.length()];

       int result=0;

       for(int i =0; i< input.length();i++)
       {


           Integer c1 = Integer.parseInt(Character.valueOf(input.charAt(i)).toString());

           int c2= c1.intValue();

           result=result+c2;

       }

       System.out.println(result);

    }

}


/*
run:
Enter the number
3422222222222
29
BUILD SUCCESSFUL (total time: 2 seconds)

*/