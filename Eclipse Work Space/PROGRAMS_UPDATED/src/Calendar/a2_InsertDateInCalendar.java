package Calendar;

import java.util.Calendar;

class CalendarDateInsert
{
	public static void main(String[] args) {
		 Calendar calendar= Calendar.getInstance();
		 calendar.set(1993, 8, 6);
		 System.out.println(calendar.getFirstDayOfWeek());
		
	}
}