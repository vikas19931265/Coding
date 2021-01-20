/*

Working with Type1 Driver
===============================================================================

Also known as JDBC ODBC Bridge Driver.

Type-1 Driver is available as the Part of JDK and hence we are not required to set any Class Path
explicitly.

Driver Class Name: sun.jdbc.odbc.JdbcOdbcDriver
JDBC URL: jdbc:odbc:demodsn
username: scott
pwd: tiger
query: select * from movies;


Note: 
===========================

We should Create Movies Table in the Database and Insert some Sample Data...

create table movies(no number, name varchar2(20),hero varchar2(20),heroine varchar2(20));
insert into movies values(1,'Bahubali','Prabhas','Anushka');
insert into movies values(2,'Raees','Sharukh','Sunny');
insert into movies values(3,'Winner','Sai','Rakul');

Eg:


 import java.sql.*;
 public class Type1DriverDemo
 {
    public static void main(String[] args) throws Exception
    {
        Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
        Connection con= DriverManager.getConnection("jdbc:odbc:demodsn","scott","tiger");
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("select * from movies");
        while(rs.next())
        {

            System.out.println(rs.getInt(1)+"\t"+rs.getString(2)+"\t"+rs.getString(3)+"\t"+rs.get
            String(4));
        }

        con.close();
    }
 }


Note:
===============================

Type-1 Driver is available until 1.7 Version only.
From 1.8 Version onwards, the above Program won't work.



*/