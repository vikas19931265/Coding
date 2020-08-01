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
    }
}
/*
run:
1993
BUILD SUCCESSFUL (total time: 0 seconds)
*/