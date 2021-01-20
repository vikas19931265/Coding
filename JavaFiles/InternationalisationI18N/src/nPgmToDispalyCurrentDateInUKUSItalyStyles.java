
/*
Write a program to display current system date in UK, US and ITALY styles
*/


import java.util.*;
import java.text.*;

 class Testing2
{
    public static void main(String[] args)
    {
        
        System.out.println("US form is "+DateFormat.getDateInstance(0,Locale.US).format(new Date()));
        System.out.println("UK form is "+DateFormat.getDateInstance(0,Locale.UK).format(new Date()));
        System.out.println("ITALY form is "+DateFormat.getDateInstance(0,Locale.ITALY).format(new Date()));
     
    }
}

/*
run:
US form is Saturday, November 3, 2018
UK form is Saturday, 3 November 2018
ITALY form is sabato 3 novembre 2018
BUILD SUCCESSFUL (total time: 0 seconds)


*/

