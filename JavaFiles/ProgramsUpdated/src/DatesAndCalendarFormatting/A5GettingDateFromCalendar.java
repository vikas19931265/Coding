package DatesAndCalendarFormatting;
import java.util.Calendar;
import java.util.Date;
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
    }
}
/*
debug:
Mon Sep 06 16:08:57 IST 1993
BUILD SUCCESSFUL (total time: 1 second)
*/