
/*

Program to check if the number is palindrom or not.

 */
package BasicPrograms;

import java.util.*;

class Reverse2 {

    public static void main(String[] args) {
        System.out.println("Enter the number");

        Scanner cn = new Scanner(System.in);

        int input = cn.nextInt();

        int input2 = input;

        int result = 0;

        int remainder;

        while (input > 0) {
            remainder = input % 10;

            result = result * 10 + remainder;

            input = input / 10;

        }

        System.out.println("Number after reversing the number is" + result);

        if (input2 == result) {

            System.out.println("Number is Palindrome");
        } else {
            System.out.println("Number is not Palindrome");

        }

    }

}


/*
run:
Enter the number
121
Number after reversing the number is121
Number is Palindrome
BUILD SUCCESSFUL (total time: 3 seconds)

*/
