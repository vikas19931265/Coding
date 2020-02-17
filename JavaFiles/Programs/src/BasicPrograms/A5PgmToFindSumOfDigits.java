/*

Find sum of digits.

 */
package BasicPrograms;

import java.util.*;

class Sample2 {

    public static void main(String[] args) {

        System.out.println("Enter the number");

        Scanner cn = new Scanner(System.in);

        int input = cn.nextInt();

        int number = input;

        System.out.println("number is " + number);

        int result = 0;

        int remainder = 0;

        while (number > 0) {

            remainder = number % 10;

            result = result + remainder;

            number = number / 10;

        }

        System.out.println("The summation of the digits is " + result);

    }

}


/*
run:
Enter the number
45678
number is 45678
The summation of the digits is 30
BUILD SUCCESSFUL (total time: 2 seconds)

*/
