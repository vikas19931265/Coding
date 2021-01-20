import java.util.*;
import java.text.*;


/*
Write a program to display  a java number in UK, US and India Currency forms 


note: that in currency only two digits are considered after the decimal.

*/




 class Test2
{
    public static void main(String[] args)
    {
        
        double d =1234567.789;
        
        
        /*
        
        Firstly we will create a number format object of the locale type Italy.
        Here we are going to create a normal number format object.
        
        */
        
        Locale india= new Locale("pa","IN");
        
        NumberFormat nf = NumberFormat.getCurrencyInstance(india);
        NumberFormat nf1 = NumberFormat.getCurrencyInstance(Locale.UK);
        NumberFormat nf2 = NumberFormat.getCurrencyInstance(Locale.US);
        
        /*
        
        After this we on number format object we will call format method to convert
        the double number to Italy specific form.
        
        */
        
        
        System.out.println(nf.format(d));
        
        System.out.println(nf1.format(d));
        
        System.out.println(nf2.format(d));
        
    }
    
}


/*
run:
INR 1,234,567.79
£1,234,567.79
$1,234,567.79
BUILD SUCCESSFUL (total time: 0 seconds)

*/