/*

Generate Armstrong Numbers
=========================


 */
package BasicPrograms;

import java.util.*;

class ArmstrongNumbers {

    public static void main(String[] args) {

        System.out.println("Generating Armstrong number from 1 to 10000");

        for (int i = 1; i <= 10000; i++) {
            int count = 0;

            double result = 0;

            int input = i;

            int number = i;

            int number2 = i;

            int remainder = 0;

            while (number2 > 0) {

                number2 = number2 / 10;

                count++;

            }

            while ((number > 0)) {

                remainder = number % 10;

                result = result + (Math.pow(remainder, count));

                number = number / 10;

            }

            if (result == input) {
                System.out.println(i);

            }

        }

    }

}

/*
run:
Generating Armstrong number from 1 to 10000
1
2
3
4
5
6
7
8
9
153
370
371
407
1634
8208
9474
BUILD SUCCESSFUL (total time: 0 seconds)

*/
