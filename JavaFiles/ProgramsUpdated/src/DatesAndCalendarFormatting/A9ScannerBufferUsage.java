package DatesAndCalendarFormatting;
/*
In this challenge, you must read an integer, a double, and a String from stdin, then print the values according to the instructions in the Output Format section below. To make the problem a little easier, a portion of the code is provided for you in the editor.
Note: We recommend completing Java Stdin and Stdout I before attempting this challenge.
Input Format
There are three lines of input:
The first line contains an integer.
The second line contains a double.
The third line contains a String.
Output Format
There are three lines of output:
On the first line, print String: followed by the unaltered String read from stdin.
On the second line, print Double: followed by the unaltered double read from stdin.
On the third line, print Int: followed by the unaltered integer read from stdin.
To make the problem easier, a portion of the code is already provided in the editor.
Note: If you use the nextLine() method immediately following the nextInt() method, recall that nextInt() reads integer tokens; because of this, the last newline character for that line of integer input is still queued in the input buffer and the next nextLine() will be reading the remainder of the integer line (which is empty).
Sample Input
42
3.1415
Welcome to HackerRank's Java tutorials!
Sample Output
String: Welcome to HackerRank's Java tutorials!
Double: 3.1415
Int: 42
 */
import java.util.Scanner;
import java.util.*;
class Solution1 {
    public static void main(String[] args) {
    Scanner cn = new Scanner(System.in); // write the line to consone put in buffer and read it
        int input1 = cn.nextInt();
        double input2 = cn.nextDouble();
        cn.nextLine(); // here when we are trying to read string , enter will be considered
        // valid character and so we want to ignore this without storing in
        // variable hence we are cleaning up the buffer memory.
        /*
         This problem occurs only for Scanner class, due to nextXXX() methods ignore newline
         character and nextLine() only reads till first newline character. If we use one more
         call of nextLine() method between nextXXX() and nextLine(), then this problem will not
         occur because nextLine() will consume the newline character.
         by vikas
         elements are written like
         10\n7.8\nhow are u
         here first 10 will be read and stored in int
         and then nextDouble will be called to read 7.8
         but it will ignore the \n character in front of
         it. Next string will try to do the same but it
         wont ignore the \n character in front of it. It
         will be read.String can read only till the the first
         \n character is encountered.
         Hence in order to forcefully skip the \n character we
         have to do cn.nextLine() and dont assign any value to
         it so that the newline character can be consumed.
         */
        String input3 = cn.nextLine();
        System.out.println("String: " + input3);
        System.out.println("Double: " + input2);
        System.out.println("Int: " + input1);
    }
}
/*
run:
10
6.7
how are u
String: how are u
Double: 6.7
Int: 10
BUILD SUCCESSFUL (total time: 6 seconds)
*/
