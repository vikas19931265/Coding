package DatesAndCalendarFormatting;

import java.text.SimpleDateFormat;
import java.util.Date;

public class B2GetYearFromDate {

    public static void main(String[] args) {
        Date d = new Date();
        String dt = d.toString();
        String[] ele=dt.split("\\s");
        String last=ele[ele.length-1];
        int currentYear= Integer.parseInt(last);
        System.out.println(currentYear);
    }
}
