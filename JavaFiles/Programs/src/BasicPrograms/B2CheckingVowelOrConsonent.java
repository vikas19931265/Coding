/*

    Checking for vowel or consonent.
*/

package BasicPrograms;

import java.util.*;

class Pmg5 {

    public static void main(String[] args) {

        System.out.println("Enter the character");

        Scanner cn = new Scanner(System.in);

        String input = cn.nextLine();

        char ch = input.charAt(0);

        int ch1 = (int) ch;

        if (ch1 >= 65 && ch1 <= 122) {

            if (input.equalsIgnoreCase("a") || input.equalsIgnoreCase("e") || input.equalsIgnoreCase("i") || input.equalsIgnoreCase("o") || input.equalsIgnoreCase("u")) {

                System.out.println("Vowels");

            } else {

                System.out.println("Consonent");

            }

        } else {

            System.out.println("Invalid input");
        }

    }

}


/*
run:
--------------------------------------

Enter the character
a
Vowels
BUILD SUCCESSFUL (total time: 1 second)

*/
