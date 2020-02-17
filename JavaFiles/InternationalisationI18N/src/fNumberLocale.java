/*

NumberFormat
=====================

Various locations follow various styles to represent a java number

Example

        double d =123456.789
        
        IN: 1,23,456.789
        US: 123,456.789
        ITALY: 123.456,789
        

We can use the NumberFormat class to format a java number according to a particular
locale.


NumberFormat class is present in java.text package and it is also an abstract class.


NumberFormat nf = new NumberFormat();

            // this is invalid as we cant create a object of NumberFormat as its abstract


Getting number format object for default local
======================================================

NumberFormat class defines the following methods for this purpose.


public static NumberFormat getInstance();
public static NumberFormat getCurencyInstance();
public static NumberFormat getPercentInstance();
public static NumberFormat getNumberInstance();



Getting number format object for specific local
==========================================================

The above methods are same but we have to pass the corresponding Locale object as the
argument.

public static NumberFormat getInstance(Locale l);
public static NumberFormat getCurencyInstance(Locale l);
public static NumberFormat getPercenInstance(Locale l);
public static NumberFormat getNumberInstance(Locale l);



*/