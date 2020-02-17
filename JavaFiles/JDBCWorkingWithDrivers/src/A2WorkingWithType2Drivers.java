/*

Working With Type 2 Driver
================================================================================

Oracle People provided Type-2 Driver is OCI (Oracle Call Interface) Driver.

Internally OCI Driver uses OCI Native Libraries.

OCI Driver and corresponding Native Libraries are available in the following Jar File.

ojdbc14.jar ➔ Oracle 10g (Internally Oracle Uses Java1.4V)
ojdbc6.jar ➔ Oracle 11g (Internally Oracle Uses Java 6V)
ojdbc7.jar ➔ Oracle 12c (Internally Oracle Uses Java 7V)

To make Driver Software available to our Program we have to place ojdbc6.jar in Class Path.

We have to collect Jar File from the following Location of Oracle Installation.

C:\oraclexe\app\oracle\product\11.2.0\server\jdbc\lib\ojdbc6.jar
D:\Tomcat 7.0\lib\servlet-api.jar;
D:\Tomcat 7.0\lib\jsp-api.jar;
D:\mysql-connector-java-bin.jar;.;

Driver Class Name: oracle.jdbc.driver.OracleDriver
                   oracle.jdbc.OracleDriver
jdbc url: jdbc:oracle:oci8:@XE (until oracle 8V)
          jdbc:oracle:oci:@XE (From Oracle 9 onwards)
          where XE is SID(System ID)


Every Database has a Unique System ID. We can find SID of our Database in the following 2 ways.

1st way:
    We have to execute the following Command from SQL Plus Command Prompt
    SQL> select * from global_name;

2nd way:
    We can find SID from the following File
    C:\oraclexe\app\oracle\product\11.2.0\server\network\ADMIN\tnsnames.ora

Eg:

 import java.sql.*;
 public class Type1DriverDemo
 {
    public static void main(String[] args) throws Exception
    {
        Class.forName("Oracle.jdbc.OracleDriver");
        Connection con= DriverManager.getConnection("jdbc:oracle:oci:@XE","scott","tiger");
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