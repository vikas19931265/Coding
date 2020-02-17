/*

Locale
==============

A locale object represents a geographical location(country) or language or both.

For example, we can create a Locale object to represent india. We can create a locale
object to represent english language.

Locale class is present in java.util package.

It is a final class and it is the direct child class of the object.

It implements Serializable and cloneable interfaces


Constructors
==============================

1. Locale l = new Locale(String language);

2. Locale l = new Locale(String language, String country);

Example
    
        Locale l= new Locale("pa","IN");
        
        pa is Punjabi and IN in india


Locale class has already defined some constants to represent some standard Locales.
We can use these constants directly.

Example
        Locale.US
        Locale.UK
        Locale.ITALY
        Locale.ENGLISTH


*/