/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DatesAndCalendarFormatting;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

/**
 *
 * @author Vikas.Gautam
 */
public class B3_CreatingDateObject {

    public static void main(String[] args) {
        SimpleDateFormat isoFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        System.out.println(TimeZone.getDefault());
        isoFormat.setTimeZone(TimeZone.getTimeZone("CST"));
        try {
            Date date = isoFormat.parse("2020-08-01T07:01:02");
            System.out.println(date);
        } catch (Exception e) {

        }

    }
}
