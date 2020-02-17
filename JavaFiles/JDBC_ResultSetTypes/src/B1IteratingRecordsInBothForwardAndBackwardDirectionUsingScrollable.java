//Application-1: Iterating records in both forward and backward direction by using SCROLLABLE ResultSet


import java.sql.*;

class ResultSets2 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con =DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement(1005,1008); // scroll sensitive and updatable
        
        ResultSet res = stmt.executeQuery("select * from emp");
 
        System.out.println("Forward movement cursor");
        
        while(res.next())
        {
            System.out.println(res.getInt(1)+"..."+res.getString(2));
        }
        
        
        System.out.println("backward movment cursor");
        
        while(res.previous())
        {
            System.out.println(res.getInt(1)+"....."+ res.getString(2));
        }
    
    
        con.close();
    
    }
    
}

/*
run:
Forward movement cursor
7369...SMITH
7499...ALLEN
7521...WARD
7566...JONES
7654...MARTIN
7698...BLAKE
7782...CLARK
7788...SCOTT
7839...KING
7844...TURNER
7876...ADAMS
7900...JAMES
7902...FORD
7934...MILLER
900...null
backward movment cursor
900.....null
7934.....MILLER
7902.....FORD
7900.....JAMES
7876.....ADAMS
7844.....TURNER
7839.....KING
7788.....SCOTT
7782.....CLARK
7698.....BLAKE
7654.....MARTIN
7566.....JONES
7521.....WARD
7499.....ALLEN
7369.....SMITH
BUILD SUCCESSFUL (total time: 0 seconds)

*/