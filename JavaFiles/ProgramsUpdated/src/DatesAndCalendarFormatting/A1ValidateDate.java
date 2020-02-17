package DatesAndCalendarFormatting;
import java.text.SimpleDateFormat;
class A1ValidateDate
{
    public static void main(String[] args) throws Exception
    {
        String date="06091993";
        java.util.Date d=null;
        d = new SimpleDateFormat("dd/MM/yyyy").parse(date);
        System.out.println(d);
    }
}