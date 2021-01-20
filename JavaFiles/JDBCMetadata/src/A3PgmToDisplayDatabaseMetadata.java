
import java.sql.*;
import java.util.*;

class Databasemeta
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
       
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");

        DatabaseMetaData dbmd= con.getMetaData();
        
        System.out.println("Database Product Name:"+dbmd.getDatabaseProductName());//Database Product Name:Oracle

        System.out.println("DatabaseProductVersion:"+dbmd.getDatabaseProductVersion());
              //DatabaseProductVersion:Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production

        System.out.println("DatabaseMajorVersion:"+dbmd.getDatabaseMajorVersion());
              //DatabaseMajorVersion:11
        System.out.println("DatabaseMinorVersion:"+dbmd.getDatabaseMinorVersion());
              //DatabaseMinorVersion:2
        System.out.println("JDBCMajorVersion:"+dbmd.getJDBCMajorVersion());
             //JDBCMajorVersion:4
        System.out.println("JDBCMinorVersion:"+dbmd.getJDBCMinorVersion());
            //JDBCMinorVersion:1
        System.out.println("DriverName:"+dbmd.getDriverName());
            //DriverName:Oracle JDBC driver
        System.out.println("DriverVersion:"+dbmd.getDriverVersion());
            //DriverVersion:12.1.0.1.0
        System.out.println("URL:"+dbmd.getURL());
            //URL:jdbc:oracle:thin:@localhost:1521:XE
        System.out.println("UserName:"+dbmd.getUserName());
            //UserName:SCOTT
        System.out.println("MaxColumnsInTable:"+dbmd.getMaxColumnsInTable());
            //MaxColumnsInTable:1000
        System.out.println("MaxRowSize:"+dbmd.getMaxRowSize());
            //MaxRowSize:0( unable to fetch data thats why 0)
        System.out.println("MaxStatementLength:"+dbmd.getMaxStatementLength());
            //MaxStatementLength:65535
        System.out.println("MaxTablesInSelect"+dbmd.getMaxTablesInSelect());
            //MaxTablesInSelect0
        System.out.println("MaxTableNameLength:"+dbmd.getMaxTableNameLength());
            //MaxTableNameLength:30
        System.out.println("SQLKeywords:"+dbmd.getSQLKeywords());
            //SQLKeywords:ACCESS, ADD, ALTER, AUDIT, CLUSTER, COLUMN, COMMENT, COMPRESS, CONNECT, DATE, DROP, EXCLUSIVE, FILE, IDENTIFIED, IMMEDIATE, INCREMENT, INDEX, INITIAL, INTERSECT, LEVEL, LOCK, LONG, MAXEXTENTS, MINUS, MODE, NOAUDIT, NOCOMPRESS, NOWAIT, NUMBER, OFFLINE, ONLINE, PCTFREE, PRIOR, all_PL_SQL_reserved_ words
        System.out.println("NumericFunctions:"+dbmd.getNumericFunctions());
            //NumericFunctions:ABS,ACOS,ASIN,ATAN,ATAN2,CEILING,COS,EXP,FLOOR,LOG,LOG10,MOD,PI,POWER,ROUND,SIGN,SIN,SQRT,TAN,TRUNCATE
        System.out.println("StringFunctions:"+dbmd.getStringFunctions());
            //StringFunctions:ASCII,CHAR,CHAR_LENGTH,CHARACTER_LENGTH,CONCAT,LCASE,LENGTH,LTRIM,OCTET_LENGTH,REPLACE,RTRIM,SOUNDEX,SUBSTRING,UCASE
        System.out.println("SystemFunctions:"+dbmd.getSystemFunctions());
            //SystemFunctions:USER
        System.out.println("supportsFullOuterJoins:"+dbmd.supportsFullOuterJoins());
            //supportsFullOuterJoins:true
        System.out.println("supportsStoredProcedures:"+dbmd.supportsStoredProcedures());
            //supportsStoredProcedures:true

        con.close();
    
    }

}

/*
run:

run:
Database Product Name:Oracle
DatabaseProductVersion:Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production
DatabaseMajorVersion:11
DatabaseMinorVersion:2
JDBCMajorVersion:4
JDBCMinorVersion:1
DriverName:Oracle JDBC driver
DriverVersion:12.1.0.1.0
URL:jdbc:oracle:thin:@localhost:1521:XE
UserName:SCOTT
MaxColumnsInTable:1000
MaxRowSize:0
MaxStatementLength:65535
MaxTablesInSelect0
MaxTableNameLength:30
SQLKeywords:ACCESS, ADD, ALTER, AUDIT, CLUSTER, COLUMN, COMMENT, COMPRESS, CONNECT, DATE, DROP, EXCLUSIVE, FILE, IDENTIFIED, IMMEDIATE, INCREMENT, INDEX, INITIAL, INTERSECT, LEVEL, LOCK, LONG, MAXEXTENTS, MINUS, MODE, NOAUDIT, NOCOMPRESS, NOWAIT, NUMBER, OFFLINE, ONLINE, PCTFREE, PRIOR, all_PL_SQL_reserved_ words
NumericFunctions:ABS,ACOS,ASIN,ATAN,ATAN2,CEILING,COS,EXP,FLOOR,LOG,LOG10,MOD,PI,POWER,ROUND,SIGN,SIN,SQRT,TAN,TRUNCATE
StringFunctions:ASCII,CHAR,CHAR_LENGTH,CHARACTER_LENGTH,CONCAT,LCASE,LENGTH,LTRIM,OCTET_LENGTH,REPLACE,RTRIM,SOUNDEX,SUBSTRING,UCASE
SystemFunctions:USER
supportsFullOuterJoins:true
supportsStoredProcedures:true
BUILD SUCCESSFUL (total time: 0 seconds)

*/


















BUILD SUCCESSFUL (total time: 0 seconds)

*/


