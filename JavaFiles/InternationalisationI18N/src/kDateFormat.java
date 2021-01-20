/*

DateFormat
======================

Various locations follows various styles to represent the date

Example

    IN : DD-MM-YYYY
    US : MM-DD-YYYY
    

you can use DateFormat to format java date according to a particular a locale

DateFormat class is present in java.text package and it is an abstract class.

DateFormat df = new DateFormat(); // invalid as DateFormat is an abstract class


Getting DateFormat object for the default locale
=======================================================

public static DateFormat getInstance()
public static DateFormat getDateInstance()


public static DateFormat getDateInstance(int style)
The allowed styles are 0 to 3

DateFormat.FULL--->0------>wedenesday 10th september 2014
DateFormat.LONG--->1------>10th september 2014
DateFormat.MEDIUM--->2---->10th sep 2014
DateFormat.SHORT--->3------>10|09|14

note: The default style is medium style


*/