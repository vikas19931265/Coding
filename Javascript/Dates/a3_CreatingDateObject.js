/* 
Creating date object
=========================

new Date(year, month, day, hours, minutes, seconds, milliseconds)

It creates object with the date specified by the integer values for the year, month, day, 
hours, minutes, second, milliseconds. You can omit some of the arguments.

Month and Week Day start with 0
0 – Sunday
0 – January 
Month Day starts with 1 
1 – 1


*/

let date= new Date(2020,04,30);
console.log("Date" + date);  //2020-05-29T18:30:00.000Z

let tarikh = new Date(2018, 4, 25, 9, 45, 35, 0);
console.log("tarikh ==>"+ tarikh); 
 
let date1= new Date(2018, 4, 25, 9, 45, 35);
console.log("Date1==>" + date1); 

let date2= new Date(2018, 4, 25, 9, 45);
console.log("date2==>" + date2); 

let date3= new Date(2018, 4, 25, 9);
console.log("date3==>"+ date3); 

let date4= new Date(2018, 4, 25);
console.log("date4==>" + date4); 

let date5= new Date(2018, 4);
console.log("date5==>" + date5); 

/* 
DateSat May 30 2020 00:00:00 GMT+0530 (India Standard Time)
tarikh ==>Fri May 25 2018 09:45:35 GMT+0530 (India Standard Time)
Date1==>Fri May 25 2018 09:45:35 GMT+0530 (India Standard Time)
date2==>Fri May 25 2018 09:45:00 GMT+0530 (India Standard Time)
date3==>Fri May 25 2018 09:00:00 GMT+0530 (India Standard Time)
date4==>Fri May 25 2018 00:00:00 GMT+0530 (India Standard Time)
date5==>Tue May 01 2018 00:00:00 GMT+0530 (India Standard Time) */