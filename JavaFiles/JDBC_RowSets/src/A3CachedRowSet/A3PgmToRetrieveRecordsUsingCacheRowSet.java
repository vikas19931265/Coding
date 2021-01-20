/*

Application-2: To Retrieve records from CachedRowSet:
=========================================================

*/
package A3CachedRowSet;

import java.sql.*;

import javax.sql.rowset.*;

class Demo
{
    public static void main(String[] args) throws Exception
    {
       RowSetFactory rsf= RowSetProvider.newFactory();
       
       CachedRowSet jrs= rsf.createCachedRowSet();
       
       jrs.setUrl("jdbc:oracle:thin:@localhost:1521:XE");
       
       jrs.setUsername("scott");
       
       jrs.setPassword("tiger");
       
       jrs.setCommand("select * from emp");
       
       jrs.execute();
       
       System.out.println("Employee details in the forward direction");
       
       while(jrs.next())
       {
           System.out.println(jrs.getInt(1)+ " "+ jrs.getString(2));
       }
    
       System.out.println("Employee details in reverse direction");
       
       while(jrs.previous())
       {
           System.out.println(jrs.getInt(1)+ " "+ jrs.getString(2));
       }
    
       System.out.println("Accessing randomly");
       
       jrs.absolute(3);
       
       System.out.println(jrs.getRow()+" "+ jrs.getInt(1)+" "+ jrs.getString(2));
       
    }
}

/*
run:
Employee details in the forward direction
7399 SMITH
7499 ALLEN
7521 WARD
7566 JONES
7654 MARTIN
7698 BLAKE
7782 CLARK
7788 SCOTT
7839 KING
7844 TURNER
7876 ADAMS
7900 JAMES
7902 FORD
7934 MILLER
8945 null
900 null
1000 null
Employee details in reverse direction
1000 null
900 null
8945 null
7934 MILLER
7902 FORD
7900 JAMES
7876 ADAMS
7844 TURNER
7839 KING
7788 SCOTT
7782 CLARK
7698 BLAKE
7654 MARTIN
7566 JONES
7521 WARD
7499 ALLEN
7399 SMITH
Accessing randomly
3 7521 WARD
BUILD SUCCESSFUL (total time: 0 seconds)


*/