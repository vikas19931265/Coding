package DatesAndCalendarFormatting;
import java.time.LocalDate;
import java.time.Period;
class MonthDifference
{
    public static void main(String[] args)
    {
        LocalDate startDate =LocalDate.of(1993,8, 06);
        LocalDate endDate =LocalDate.of(2019,2, 28);
        System.out.println(startDate);
        Period age=Period.between(startDate, endDate);
        int months=age.getMonths();
        months=months+1;
        int years=age.getYears();
        System.out.println(months + " " + years);
       
    }
}
/*
run:
1 1
BUILD SUCCESSFUL (total time: 0 seconds)
run:
salary :780000.0date is Sat Jun 01 00:00:00 IST 2019pf sal3120
date1month 5
control reached
start date is Sat Jun 01 00:00:00 IST 2019
dat11month5year2019
stdate2019-05-01
BUILD SUCCESSFUL (total time: 47 seconds)
*/