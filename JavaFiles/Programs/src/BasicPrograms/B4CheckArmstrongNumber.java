/*
Armstrong Number
=====================================================
 */
package BasicPrograms;
import static java.lang.Math.pow;
import java.util.*;
import java.math.*;
class ArmstrongNumber {
    public static void main(String[] args) {
        System.out.println("Enter the Number");
        Scanner cn = new Scanner(System.in);
        int input = cn.nextInt();
        int number = input;
        double result=0;
        int newResult;
        int remainder=0;
        while(number>0)
        {
            remainder=number%10;
            result=result+Math.pow(remainder, 3);
            number=number/10;
        }
        newResult=(int)result;
        if(newResult==input)
       {
           System.out.println("Armstrong number");
       }
       else
       {
           System.out.println("Non Armstrong numbers");
       }
    }
}
/*
run:
Enter the Number
371
Armstrong number
BUILD SUCCESSFUL (total time: 1 second)

*/