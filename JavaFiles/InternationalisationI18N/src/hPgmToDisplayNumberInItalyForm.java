import java.util.*;
import java.text.*;


/*
Write a program to display number in Italy specific form */




 class Test
{
    public static void main(String[] args)
    {
        
        double d =1234567.89;
        
        
        /*
        
        Firstly we will create a number format object of the locale type Italy.
        Here we are going to create a normal number format object.
        
        */
        
        NumberFormat nf = NumberFormat.getInstance(Locale.ITALY);
        
        /*
        
        After this we on number format object we will call format method to convert
        the double number to Italy specific form.
        
        */
        
        
        System.out.println(nf.format(d));
        
    }
    
}


/*
$javac Test.java
$java -Xmx128M -Xms16M Test
1.234.567,89

*/