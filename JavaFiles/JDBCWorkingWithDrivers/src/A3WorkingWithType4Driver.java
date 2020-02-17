import java.sql.*;

/*

Working with Type 4 Driver
===========================================================================

Also known as Pure Java Driver OR Thin Driver.

Type-2 and Type-4 Drivers of Oracle having same Jar File, same Driver Class Name, but different
JDBC URL's.

    Driver Class Name: oracle.jdbc.driver.OracleDriver
                       oracle.jdbc.OracleDriver
    JDBC URL: jdbc:oracle:thin:@localhost:1521:XE

*/


class WorkingWithType4Driver
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement();
        
       ResultSet res= stmt.executeQuery("Select * from emp");
        
        while(res.next())
        {
            
            System.out.println(res.getInt(1)+"\t"+ res.getString(2));
        }
        
        
        
    }
}

/*
run:
7369	SMITH
7499	ALLEN
7521	WARD
7566	JONES
7654	MARTIN
7698	BLAKE
7782	CLARK
7788	SCOTT
7839	KING
7844	TURNER
7876	ADAMS
7900	JAMES
7902	FORD
7934	MILLER
BUILD SUCCESSFUL (total time: 0 seconds)

*/