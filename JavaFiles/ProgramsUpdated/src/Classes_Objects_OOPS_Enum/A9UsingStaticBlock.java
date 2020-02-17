package Classes_Objects_OOPS_Enum;


import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

 class Solution11 {

    static int B;
    static int H;
    static boolean flag;

    static {

        Scanner cn = new Scanner(System.in);
        B = cn.nextInt();
        H = cn.nextInt();
        if (B > 0 && H > 0) {
            flag = true;
        }
        else
        {
            System.out.println("java.lang.Exception: Breadth and height must be positive");
        }

    }

    public static void main(String[] args) {
        if (flag) {
            int area = B * H;
            System.out.print(area);
        }

    }

}

/*
run:
5
7
35BUILD SUCCESSFUL (total time: 1 second)

*/

