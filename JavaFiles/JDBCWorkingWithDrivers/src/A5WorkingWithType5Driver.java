/*
Working With Type-5 Driver:
========================================================================

This Driver introduced by "Progress Data Direct" Software Company.

This Driver is the enhanced Version of Type-4 Driver.

This Driver is not Industry recognized Driver.

We have to Download Driver Software from Progress Data Direct Web Site as follows...
https://www.progress.com/jdbc ➔ Available JDBC Data Sources ➔ Relational and Analytics ➔
Oracle Database ➔ Download JDBC connectors ➔ Windows ➔ Fill Form and Download

We will get Setup File and execute so that Driver Software available in our System.

Type-5 Driver Software available in oracle.jar which is available in the following Location.
C:\Program Files\Progress\DataDirect\Connect_for_JDBC_51\lib\oracle.jar

We have to Place this Jar File in the Class Path

Driver Class Name: com.ddtek.jdbc.oracle.OracleDriver
jdbc_url: jdbc:datadirect:oracle://localhost:1521;ServiceName=XE


import java.sql.*;
 public class Type1DriverDemo
 {
    public static void main(String[] args) throws Exception
    {
        Class.forName(""com.ddtek.jdbc.oracle.OracleDriver");
        Connection con= DriverManager.getConnection("datadirect:oracle://localhost:1521;ServiceName=XE","scott","tiger");
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




*/