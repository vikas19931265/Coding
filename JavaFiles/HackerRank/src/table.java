import java.util.*;

class Solution5 {

    public static void main(String[] args)
    {
        Scanner cn = new Scanner(System.in);
        int input= cn.nextInt();

        for(int i=1; i<=10; i++)
        {
            int result=input*i;
            System.out.println(input+" x "+i+" = "+result);
        }
    }

    }

/*
run:
3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
BUILD SUCCESSFUL (total time: 1 second)

*/