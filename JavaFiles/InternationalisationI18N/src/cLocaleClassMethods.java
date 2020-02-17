/*
Important methods of Locale
=================================

public static Locale getDefault();

public static void setDefault(Locale l);

public String getCountry(); //US

public String getLanguage()l..en

public String get DisplayCountry(); //United States

public String getDisplayLanguage(); //english

public static String[] getISOLanguages();

public  static String[] getISOLanguages();

public static String[ ]getISOCountries();

public static Locale[] getAvailableLocales();







*/

import java.util.*;

 class DefaultLocale
{
    public static void main(String[] args)
    {
        System.out.println(Locale.getDefault());
        Locale l = new Locale("EN");
        System.out.println(l.getCountry());
        System.out.println(l.getLanguage());
    }
}


/*
$javac DefaultLocale.java
$java -Xmx128M -Xms16M DefaultLocale
en_US
*/