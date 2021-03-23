package DatesAndCalendarFormatting;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
class A2ExtractYearFromDate
{
    public static void main(String[] args) throws ParseException
    {
        String date="06/09/1993";
        Date format= new SimpleDateFormat("dd/MM/yyyy").parse(date);
        Calendar c =Calendar.getInstance();
        c.setTime(format);
        int year=c.get(Calendar.YEAR);
        System.out.println(year);
        System.out.println(c.get(Calendar.DAY_OF_MONTH));
        System.out.println(c.get(Calendar.MONTH));
    }
}
/*
run:
1993
BUILD SUCCESSFUL (total time: 0 seconds)
*/