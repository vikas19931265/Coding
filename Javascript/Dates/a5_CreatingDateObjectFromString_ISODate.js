/* 
    Creating date object from string-ISO dates
    ==============================================

new Date(String):

    This will create the date object from the string.

ISO 8601 is the international standard for the representation of dates and times.


year and month --->yyyy-mm-------->2018-06
only year     -----> yyyy--------->1993
date and time -------> YYYY-MM-DDTHH:MM:SSZ--> 2018-06-21T12:00:00Z
date and time-----------> YYYY-MM-DDTHH:MM:SS+HH:MM ---->2018-06-21T12:00:00+06:30

Date and Time is separated with a capital T.
UTC time is defined with a capital letter Z.
If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead.

*/

let date1 = new Date("1993-09-06");
console.log("date1 " + date1); //date1 Mon Sep 06 1993 05:30:00 GMT+0530 (India Standard Time)

let date2= new Date("1993");
console.log("date2" + date2); //date2 Fri Jan 01 1993 05:30:00 GMT+0530 (India Standard Time)

var tarikh1 = new Date("May 12, 2018 10:16:05");
console.log("tarikh1" + tarikh1); //Sat May 12 2018 10:16:05 GMT+0530 (India Standard Time)


