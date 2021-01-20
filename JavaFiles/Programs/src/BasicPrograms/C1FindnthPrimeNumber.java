//Pgm to find the nth prime number

package BasicPrograms;

import java.util.Scanner;

class Demo {

    public static void main(String[] args) {
        System.out.println("Enter the nth prime number to generate");
        Scanner cn = new Scanner(System.in);
        int number = cn.nextInt();
        int count = 0;
        int status = 0;
        l1:
        for (int i = 2;; i++) {

            if (i == 2) {

                count = count + 1;

               }
            
            if(i==2 && number==1)
            {
                System.out.println(number + "th prime number is" + i);
                break;
                        
            }

            for (int j = 2; j < i; j++) {

                if (i % j == 0) {
                    continue l1;
                } else {
                    status = 1;
                }

            }

            if (status == 1) {
                count = count + 1;
                if (count == number) {
                    System.out.println(number + "th prime number is" + i);
                    break;
                }

            }

        }

    }
}
/*
run:
Enter the nth prime number to generate
25
25th prime number is97
BUILD SUCCESSFUL (total time: 1 second)

*/