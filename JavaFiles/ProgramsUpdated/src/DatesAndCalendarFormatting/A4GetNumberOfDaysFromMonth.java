package DatesAndCalendarFormatting;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
class A4GetNumberOfDaysFromMonth
{
    public static void main(String[] args) throws Exception
    {
        Calendar c =Calendar.getInstance();
        String date="01/04/2019";
        Date format= new SimpleDateFormat("dd/MM/yyyy").parse(date);
        c.setTime(format);
        int noOfDays=c.getActualMaximum(Calendar.DAY_OF_MONTH);
        System.out.println(noOfDays);
    }
}
/*
run:
30
BUILD SUCCESSFUL (total time: 1 second)
*/