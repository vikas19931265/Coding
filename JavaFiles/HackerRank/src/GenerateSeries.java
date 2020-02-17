import java.util.*;
import java.util.*;
import java.io.*;

class Solution4{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
             double result=0;
        int firstResult=a+1*b;
        System.out.print(firstResult+" ");
        result=result+firstResult;
        for(int i1 =1; i1<n ; i1++)
        {
            result=result+(Math.pow(2, i1)*b);
            System.out.print((int)result+" ");
        }
        System.out.println();
        }
        in.close();
    }
}

/*
run:
2
0 2 10
2 6 14 30 62 126 254 510 1022 2046 
5 3 5
8 14 26 50 98 
BUILD SUCCESSFUL (total time: 21 seconds)

*/
