package Calendar;

import java.util.Calendar;
import java.util.Date;

public class a3_CalendarHourOfDay {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		
		  Calendar calendar = Calendar.getInstance();
		  calendar.set(2020,12,06,13,59,98); 
		  Date date=calendar.getTime();
		  calendar.get(calendar.HOUR_OF_DAY); 
		  calendar.get(calendar.MINUTE); 
		  calendar.get(calendar.SECOND); 
		
	}
	
	
}
