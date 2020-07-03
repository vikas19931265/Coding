package DatesAndCalendarFormatting;
import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;
class A5GettingDateFromCalendar
{
    public static void main(String[] args)
    {
        Calendar c1=Calendar.getInstance();
        int date=6;
        int month=9;
        int year=1993;
        c1.set(year,month-1,date); 
        Date d =c1.getTime();
        System.out.println(d);
        Calendar c2= Calendar.getInstance();
        c1.set(11 , 17);
        Date d1=c2.getTime();
        System.out.println(d1);
        
        
    }
}
/*
debug:
Mon Sep 06 16:08:57 IST 1993
BUILD SUCCESSFUL (total time: 1 second)
*/