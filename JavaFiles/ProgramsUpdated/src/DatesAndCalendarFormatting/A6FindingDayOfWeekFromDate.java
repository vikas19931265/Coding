package DatesAndCalendarFormatting;


import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
class Result {
    public static String findDay(int month, int day, int year) {
        String date = day + "/" + month + "/" + year;
        int dayOfMonth = 0;
        Date d = null;
        try {
            d = new SimpleDateFormat("dd/MM/yyyy").parse(date);
        } catch (Exception e) {
        }
        Calendar cn = Calendar.getInstance();
        cn.setTime(d);
        dayOfMonth = cn.get(Calendar.DAY_OF_WEEK);
        String dayOfWeek = null;
        switch (dayOfMonth) {
            case 1:
                dayOfWeek = "Sunday".toUpperCase();
                break;
            case 2:
                dayOfWeek = "Monday".toUpperCase();
                break;
            case 3:
                dayOfWeek = "Tuesday".toUpperCase();
                break;
            case 4:
                dayOfWeek = "Wedenesday".toUpperCase();
                break;
            case 5:
                dayOfWeek = "Thursday".toUpperCase();
                break;
            case 6:
                dayOfWeek = "Friday".toUpperCase();
                break;
            case 7:
                dayOfWeek = "Saturday".toUpperCase();
                break;
        }
        System.out.println(dayOfWeek);
        return dayOfWeek;
    }
}
class Solution {
    public static void main(String[] args) {
        Result.findDay(9, 6, 1993);
    }
}
/*
run:
MONDAY
BUILD SUCCESSFUL (total time: 0 seconds)
*/