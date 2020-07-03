package Calendar;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
class CalendarMethod
{
    public static void main(String[] args) throws ParseException
    {
        Calendar c =Calendar.getInstance();
        c.set(Calendar.HOUR_OF_DAY,11);
        System.out.println("altered year is "+ c.get(Calendar.HOUR_OF_DAY));
    }
}
/*
altered year is 11
*/