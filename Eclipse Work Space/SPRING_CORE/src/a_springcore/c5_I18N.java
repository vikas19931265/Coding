package a_springcore;
/*
I18N
============

I18N  -  Internationalization
-----------------------------
It is a process of designing the application, which can be support for multiple languages which out 
changing application code is called I18N.

So based on the users country and language we need to display respective content in the browser.

In JAVA, in order to get the user country and language we can use java.util.Locale object.

Locale means country + language.

A java.util.Locale contains a few important members:
 --language code.
 --An optional country or region code.
 --An optional variant.

The notation of Locale:
<language code>_<country code>_<variant code>

In the above notation each code is separated with an underscore symbol (_).

The country code and variant codes are optional.

Language codes:
---------------
Locale uses the two-letter codes to identify the target language.

Examples
--------
language  code
--------- -----
Telugu	  te
English   en
Arabic    ar
German    de
japanese  ja

Country (Region) Codes:

It defines two letter abbreviations for each country or major region in the world. 
country codes are uppercase.

Country         code
-------         -----
INDIA			IN	
United States   US
Canada          CA
France          FR
Japan           JP
Germany         DE

Variant (State) Code:
To provide additional functionality we use Variant code

Ex:
en_US
English speaks in US

de_DE
German speaking German locale

de_DE_EURO
German-speaking German locale with a euro variant

en_US_SiliconValley
English speaking US locale for silicon valley people

There are multiple constructors to create the Locale objects.

Locale(String language)
Locale(String language, String country)
Locale(String language, String country, String variant)

Example on the above constructors:

// Creates a generic English-speaking locale.
Locale localel = new Locale("en");

// Creates an English-speaking, Canadian locale.
Locale locale2 = new Locale("en", "CA");

// Create a very specific English-speaking, U.S. locale for Silicon Valley.
Locale locale3 = new Locale("en", "US", "SiliconValley");


*/