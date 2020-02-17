/*

Program to reverse the number

 */
package BasicPrograms;

import java.util.*;

class Reverse {

    public static void main(String[] args) {
        System.out.println("Enter the number");

        Scanner cn = new Scanner(System.in);

        int input = cn.nextInt();

        int result = 0;

        int remainder;

        while (input > 0) {
            remainder = input % 10;

            result = result * 10 + remainder;

            input = input / 10;

        }

        System.out.println("Number after reversing the number is" + result);

    }

}
