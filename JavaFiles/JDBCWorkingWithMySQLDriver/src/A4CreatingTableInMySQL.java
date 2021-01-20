//Application-1: How to Create a Table in MYSQL




import java.sql.*;

class CreateTable
{
    public static void main(String[] args) throws Exception
    {
        
        Class.forName("com.mysql.cj.jdbc.Driver");
  
        Connection con =DriverManager.getConnection("jdbc:mysql:///vikasDB","vikas","vikas@1265");
        
        Statement stmt= con.createStatement();
        
        stmt.executeUpdate("create table emp(EMPNO int(4) not null, ENAME varchar(10), JOB varchar(9), MGR int(4) , HIREDATE date , SAL double(7,2), COMM double(7,2) , DEPTNO int(2))");
        
        System.out.println("Table Created Successfully");
        
        con.close();
        
        
        
    }
}

/*
run:
Table Created Successfully
BUILD SUCCESSFUL (total time: 0 seconds)

*/













