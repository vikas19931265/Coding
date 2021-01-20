/*

Working with Type3 Driver
================================================================================

An extra activity in Type-3 Driver is we have to install Middleware Server.

    Eg: IDS Server (Internet Database Access Server)

How to install IDS Server?
================================

idssoftware.com ➔ Download ➔ IDS Server Trial ➔ IDS Server 4.2.2 Lite Evaluation ➔ Windows
(2008/2003/XP/2000/NT)

Download and Install IDS Server.
===========================================

We have to set Driver Software in the Class Path. For this the following Jar File should be placed in
the Class Path.

C:\IDSServer\classes\jdk13drv.jar

Driver Class Name: ids.sql.IDSDriver
jdbc url: jdbc:ids://localhost:12/conn?dsn=mysysdsn


Internally IDS Server will use Type-1 Driver to communicate with Database. For this we have to
configure "System DSN" and we have to choose "Oracle In XE".


import java.sql.*;
 public class Type1DriverDemo
 {
    public static void main(String[] args) throws Exception
    {
        Class.forName("ids.sql.IDSDriver");
        Connection con= DriverManager.getConnection("jdbc:ids://localhost:12/conn?dsn=mysysdsn","scott","tiger");
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