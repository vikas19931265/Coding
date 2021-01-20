
package ScenarioProgramming;
import java.util.*;
class IncomeTaxCalculator
{
    static double governmentDeduction=50000;

    public static void main(String[] args)
    {
        System.out.println("==========Income Tax Calculator(2019)===================      "  );
        System.out.println();
        System.out.println("Enter your yearly gross salary");
        Scanner cn = new Scanner(System.in);
        double grossSalary=cn.nextDouble();
        incomeTaxCalculator(grossSalary);
    }

    public static void incomeTaxCalculator(double grossSalary)
    {
        if(grossSalary-governmentDeduction<=500000)
        {
            System.out.println("You are not eligible to pay tax");
        }

        else
        {
            System.out.println("Enter ")

        }

    }

}
