package DatesAndCalendarFormatting;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class B4_DateWithTimeFormatting {

	public static void main(String[] args)  throws ParseException{
		Date curDate= new Date();
        SimpleDateFormat format= new SimpleDateFormat("MM/dd/yyyy");
        String resultDate=format.format(curDate);
        resultDate=resultDate.concat(" ");
        Calendar cn= Calendar.getInstance();
        cn.setTime(curDate);
        Integer time= new Integer(cn.get(Calendar.HOUR));
        resultDate=resultDate.concat(time.toString()+":");
        Integer hours= new Integer(cn.get(Calendar.MINUTE));
        resultDate=resultDate.concat(hours.toString());
        
        if (cn.get(Calendar.AM_PM) == Calendar.PM) {
        	resultDate=resultDate.concat(" AM");
        	
        	}
        else  {
        	resultDate=resultDate.concat(" PM");
        	
        	}
        System.out.println(resultDate);
	
	}
}
