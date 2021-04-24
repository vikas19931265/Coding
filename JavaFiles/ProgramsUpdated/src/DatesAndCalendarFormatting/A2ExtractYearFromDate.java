package DatesAndCalendarFormatting;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
class A2ExtractYearFromDate
{
    public static void main(String[] args) throws ParseException
    {
        String date="06-09-1993";
        SimpleDateFormat formats= new SimpleDateFormat("yyyy-MM-dd");  //// this will not throw any exception..to format against specific format
        formats.setLenient(false);
        Date format =formats.parse(date);
        System.out.println(format);
        Calendar c =Calendar.getInstance();
        c.setTime(format);
        int year=c.get(Calendar.YEAR);
        System.out.println(year);
        System.out.println(c.get(Calendar.DAY_OF_MONTH));
        System.out.println(c.get(Calendar.MONTH));
    }
}
/*
If date is not right format we will get the exception as 

run:
Exception in thread "main" java.text.ParseException: Unparseable date: "06-09-1993"
	at java.text.DateFormat.parse(Unknown Source)
	at DatesAndCalendarFormatting.A2ExtractYearFromDate.main(A2ExtractYearFromDate.java:13)
C:\Users\Vikas.Gautam\AppData\Local\NetBeans\Cache\8.2\executor-snippets\run.xml:53: Java returned: 1
BUILD FAILED (total time: 2 seconds)

otherwise

run:
1993
BUILD SUCCESSFUL (total time: 0 seconds)
*/