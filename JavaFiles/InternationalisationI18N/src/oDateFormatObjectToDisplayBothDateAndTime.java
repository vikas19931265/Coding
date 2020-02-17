
/*

Getting DateFormat object to display both date and time.


DateFormat class defines the following methods 

    public static DateFormat getDateTimeInstance();
    public static DateFormat getDateTimeInstance(int datestyle, int timestyle);
    public static DateFormat getDateTimeInstance(int datestyle,int timestyle, Locale l);


The allowed styles for time are also 0 to 3 only.


*/


import java.util.*;
import java.text.*;

 class Testing
{
    public static void main(String[] args)
    {
        
        System.out.println("US form is "+DateFormat.getDateTimeInstance(0,0,Locale.US).format(new Date()));
        System.out.println("UK form is "+DateFormat.getDateTimeInstance(0,1,Locale.UK).format(new Date()));
        System.out.println("ITALY form is "+DateFormat.getDateTimeInstance(0,2,Locale.ITALY).format(new Date()));
     
    }
}

/*
run:
US form is Saturday, November 3, 2018 10:54:25 AM IST
UK form is Saturday, 3 November 2018 10:54:25 IST
ITALY form is sabato 3 novembre 2018 10.54.25
BUILD SUCCESSFUL (total time: 0 seconds)

*/

