
import java.util.*;
import java.util.*;
import java.io.*;

class Solution778{
    public static void main(String []argh)
    {
        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();

        for(int i=0;i<t;i++)
        {

            try
            {
                int fit=0;
                long x=sc.nextLong();
                System.out.println(x+" can be fitted in:");
                if(x>=-128 && x<=127)System.out.println("* byte");
                if(x>=Short.MIN_VALUE && x<= Short.MAX_VALUE)
                {
                    System.out.println("* short");
                    fit=1;
                }
               if(x>=Integer.MIN_VALUE && x<= Integer.MAX_VALUE)
                {
                    System.out.println("* int");
                    fit=1;
                }
                if(x>=Long.MIN_VALUE && x<= Long.MAX_VALUE)
                {
                    System.out.println("* long");
                    fit=1;
                } 
                
            if(fit==0)
            {
                System.out.println(sc.next()+" can't be fitted anywhere.");
            }
            }
            catch(Exception e)
            {
                System.out.println(sc.next()+" can't be fitted anywhere.");
                
               /*
                here sc.next() will give us string..when doing long n = sn.nextLong()..
                exception is going to occuer and therefore this value cant be read
                by any primitive type and hence we have to read it as the string type.
                */
            }

        }
    }
}

/*
run:
2
456
456 can be fitted in:
* short
* int
* long
789
789 can be fitted in:
* short
* int
* long
BUILD SUCCESSFUL (total time: 6 seconds)

*/

