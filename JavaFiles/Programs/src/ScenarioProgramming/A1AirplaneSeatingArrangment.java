
/*
Airplane Seating Assignment
==================================
Write a program that be used to assign seats for a commercial plane. The airplane has 13
rows with 6 seats in each row. Rows 1 and 2 are first class, rows 3 and 7 are business class,
and rows 8 to 14 are economy class. Your program prompts the user to enter the following
information
a. Ticket Type(First class, business class or economy class)
b. Desired Seat
Here * indicates the seat is available, X indicates that the seat has been assigned.
Make this a menu-driver program. Show the users choice and allow the user to make the
appropriate choices.
 */
package ScenarioProgramming;
import java.util.*;
class Flight {
    String[][] s = new String[14][8];
    public void resetSeats() {
        for (int i = 1; i <= 13; i++) {
            for (int j = 1; j <= 6; j++) {
                s[i][j] = "*";
            }
        }
    }
    public void displaySeats() {
        System.out.print("\t");
        for (int i = 1; i <= 6; i++) {
            System.out.print("\t" + i);
        }
        System.out.println("\n");
        for (int i = 1; i <= 13; i++) {
            System.out.print("row " + i + "\t");
            for (int j = 1; j <= 6; j++) {
                System.out.print("\t" + s[i][j]);
            }
            System.out.println();
            if (i == 2) {
                System.out.println("-------------------------------first class-------------------------------");
            }
            if (i == 7) {
                System.out.println("--------------------------------business class---------------------------------------");
            }
            if (i == 13) {
                System.out.println("--------------------------------economy classs------------------------------");
            }
        }
    }
    public void remainingFirstClassSeats() {
        int count = 0;
        int status = 0;
        for (int i2 = 1; i2 <= 2; i2++) {
            for (int j2 = 1; j2 <= 6; j2++) {
                if (s[i2][j2].equals("*")) {
                    count++;
                }
            }
        }
        if (count >= 1) {
            System.out.println("Remaining seats");
            for (int i = 1; i <= 2; i++) {
                if (i == 2) {
                    System.out.println();
                }
                for (int j = 1; j <= 6; j++) {
                    if (s[i][j].equals("*")) {
                        System.out.print("\t" + i + "" + j);
                    }
                }
            }
            System.out.println("\n\nChoose seat number from list");
            Scanner cn = new Scanner(System.in);
            int seatNumber = cn.nextInt();
            String number;
            l1:
            for (int i1 = 1; i1 <= 2; i1++) {
                l2:
                for (int j1 = 1; j1 <= 6; j1++) {
                    number = i1 + "" + j1;
                    int a = Integer.parseInt(number);
                    if (seatNumber == a) {
                        status = 1;
                        if (s[i1][j1].equals("X")) {
                            System.out.println("Sorry the seat is allocated");
                            break l1;
                        } else if (s[i1][j1].equals("*")) {
                            s[i1][j1] = "X";
                            System.out.println("Seat allocated successfully");
                            break l1;
                        }
                    }
                }
            }
        } else {
            System.out.println("First class is housefull");
        }
        if (status == 0) {
            System.err.println("invalid option");
        }
    }
    public void remainingBusinessClassSeats() {
        int count = 0;
        int status = 0;
        for (int i2 = 3; i2 <= 7; i2++) {
            for (int j2 = 1; j2 <= 6; j2++) {
                if (s[i2][j2].equals("*")) {
                    count++;
                }
            }
        }
        if (count >= 1) {
            System.out.println("Remaining seats");
            for (int i = 3; i <= 7; i++) {
                if ((i == 4) || (i == 5) || (i == 6) || (i == 7)) {
                    System.out.println();
                }
                for (int j = 1; j <= 6; j++) {
                    if (s[i][j].equals("*")) {
                        System.out.print("\t" + i + "" + j);
                    }
                }
            }
            System.out.println("\n\nChoose seat number from list");
            Scanner cn = new Scanner(System.in);
            int seatNumber = cn.nextInt();
            String number;
            l1:
            for (int i1 = 3; i1 <= 7; i1++) {
                l2:
                for (int j1 = 1; j1 <= 6; j1++) {
                    number = i1 + "" + j1;
                    int a = Integer.parseInt(number);
                    if (seatNumber == a) {
                        status = 1;
                        if (s[i1][j1].equals("X")) {
                            System.out.println("Sorry the seat is allocated");
                            break l1;
                        } else if (s[i1][j1].equals("*")) {
                            s[i1][j1] = "X";
                            System.out.println("Seat allocated successfully");
                            break l1;
                        }
                    }
                }
            }
        } else {
            System.out.println("First class is housefull");
        }
        if (status == 0) {
            System.err.println("invalid option");
        }
    }
    public void remainingEconomyClassSeats() {
        int count = 0;
        int status = 0;
        for (int i2 = 8; i2 <= 13; i2++) {
            for (int j2 = 1; j2 <= 6; j2++) {
                if (s[i2][j2].equals("*")) {
                    count++;
                }
            }
        }
        if (count >= 1) {
            System.out.println("Remaining seats");
            for (int i = 8; i <= 13; i++) {
                if ((i == 9) || (i == 10) || (i == 11) || (i == 12) || (i == 13)) {
                    System.out.println();
                }
                for (int j = 1; j <= 6; j++) {
                    if (s[i][j].equals("*")) {
                        System.out.print("\t" + i + "" + j);
                    }
                }
            }
            System.out.println("\n\nChoose seat number from list");
            Scanner cn = new Scanner(System.in);
            int seatNumber = cn.nextInt();
            String number;
            l1:
            for (int i1 = 8; i1 <= 13; i1++) {
                l2:
                for (int j1 = 1; j1 <= 6; j1++) {
                    number = i1 + "" + j1;
                    int a = Integer.parseInt(number);
                    if (seatNumber == a) {
                        status = 1;
                        if (s[i1][j1].equals("X")) {
                            System.out.println("Sorry the seat is allocated");
                            break l1;
                        } else if (s[i1][j1].equals("*")) {
                            s[i1][j1] = "X";
                            System.out.println("Seat allocated successfully");
                            break l1;
                        }
                    }
                }
            }
        } else {
            System.out.println("First class is housefull");
        }
        if (status == 0) {
            System.err.println("invalid option");
        }
    }
    public static void main(String[] args) {
        Flight f = new Flight();
        f.resetSeats();
        while (true) {
            System.out.println("\n====================XYZ Flight Booking====================");
            System.out.println("\nChoose from list");
            System.out.println("--------------------");
            System.out.println();
            System.out.println("1.Book First class seat");
            System.out.println("2.Book Business class seat");
            System.out.println("3.Book Economy class seat");
            System.out.println("4.View Seating Arrangement");
            System.out.println("5.Exit");
            System.out.println("---------------------------");
            System.out.println("Enter choice");
            Scanner cn = new Scanner(System.in);
            int input = cn.nextInt();
            if (input == 5) {
                break;
            }
            switch (input) {
                case 1:
                    f.remainingFirstClassSeats();
                    break;
                case 2:
                    f.remainingBusinessClassSeats();
                    break;
                case 3:
                    f.remainingEconomyClassSeats();
                    break;
                case 4:
                    f.displaySeats();
                    break;
            }
        }
    }
}
