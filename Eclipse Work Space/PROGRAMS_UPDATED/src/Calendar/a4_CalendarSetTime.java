package Calendar;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class a4_CalendarSetTime {

	public static void main(String[] args) {
		
		Calendar cn = Calendar.getInstance();
		cn.set(2020, 06, 30, 8, 0,0); // setting time in calendar
		Date date=cn.getTime();
		System.out.println(date);
		cn.setTime(date);
		System.out.println(cn.getTime());
	
	}
	
}
