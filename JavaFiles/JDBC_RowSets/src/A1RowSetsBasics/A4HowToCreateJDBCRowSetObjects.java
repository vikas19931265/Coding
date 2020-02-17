package A1RowSetsBasics;

/*

How to create RowSet objects:
============================================================

We can create different types of RowSet objects as follows


RowSetFactory rsf = RowSetProvider.newFactory();

JdbcRowSet jrs = rsf.createJdbcRowSet();
CachedRowSet crs = rsf.createCachedRowSet();
WebRowSet wrs = rsf.createWebRowSet();
JoinRowSet jnrs = rsf.createJoinRowSet();
FilteredRowSet frs = rsf.createFilteredRowSet();



*/

import java.sql.*;

import javax.sql.rowset.*;

class HowToCreateRowSetObjects
{
    public static void main(String[] args) throws Exception
    {
        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt = con.createStatement();
        
        RowSetFactory rsf=RowSetProvider.newFactory();
        
        JdbcRowSet jrs = rsf.createJdbcRowSet();
        
        CachedRowSet crs= rsf.createCachedRowSet();
        
        WebRowSet wrs= rsf.createWebRowSet();
        
        JoinRowSet jrs1= rsf.createJoinRowSet();
        
        FilteredRowSet frs= rsf.createFilteredRowSet();
    }
}