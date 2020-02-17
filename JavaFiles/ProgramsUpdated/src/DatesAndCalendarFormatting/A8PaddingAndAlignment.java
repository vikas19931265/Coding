package DatesAndCalendarFormatting;
import java.util.*;
class Solution3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("================================");
        for (int i = 0; i < 3; i++) {
            String s1 = sc.next();
            int x = sc.nextInt();
            System.out.printf("%-15s%03d\n", s1, x);
        }
        System.out.println("================================");
    }
}
/*
run:
================================
java 100
java           100
cp 45
cp             045
python 8
python         008
================================
BUILD SUCCESSFUL (total time: 9 seconds)
*/
