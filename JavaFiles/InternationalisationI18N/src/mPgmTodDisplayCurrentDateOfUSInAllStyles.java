/*

Write a program to display current system date in all possible styles of US form.



*/

import java.util.*;
import java.text.*;

class Testing11
{
    public static void main(String[] args)
    {
        
        System.out.println("Full Form is "+DateFormat.getDateInstance(0,Locale.US).format(new Date()));
        System.out.println("Long Form is "+DateFormat.getDateInstance(1,Locale.US).format(new Date()));
        System.out.println("Medium Form is "+DateFormat.getDateInstance(2,Locale.US).format(new Date()));
        System.out.println("Short Form is "+DateFormat.getDateInstance(3,Locale.US).format(new Date())); 
        
    }
}

/*
$javac Testing.java
$java -Xmx128M -Xms16M Testing
Full Form is Thursday, November 1, 2018
Long Form is November 1, 2018
Medium Form is Nov 1, 2018
Short Form is 11/1/18

*/

