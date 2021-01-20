/*

JDBC with Excel Sheets
===============================

1) We can read and write Data w.r.t Excel Sheet by using JDBC.
   
    To work with Excel it is recommended to use Type - 1 Driver.
    While configuring DSN we have to specify Driver Name as "Driver do Microsoft Excel"

2) We have to browse our Excel File by using "Select Work Book" Button.

3) Each Excel Work Book contains several Sheets.

While writing Query we have to specify Sheet Name also.
ResultSet rs=st.executeQuery("select * from [Sheet1$]");




*/
