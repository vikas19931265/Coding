//Application-2: Navigating Records by using SCROLLABLE ResultSet

import java.sql.*;

class ResultSets3 {

    public static void main(String[] args) throws Exception {

        Class.forName("oracle.jdbc.OracleDriver");
        
        Connection con =DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott","tiger");
        
        Statement stmt= con.createStatement(1005,1008); // scrollable sensitve and updatable resultset
        
        ResultSet res = stmt.executeQuery("select * from emp");
        
        System.out.println("Entire records");
        
        while(res.next())
        {
             System.out.println(res.getRow()+"..."+res.getInt(1)+"...."+res.getString(2));
        }
    
        // move the cursor to  first record
        
        System.out.println("Move cursor to first record");
        
        res.first();
        
        System.out.println(res.getRow()+"..."+res.getInt(1)+"...."+res.getString(2));
        
        // move the cursor to the last record
        
        System.out.println("Move cursor to last record");
        
        res.last();
        
         System.out.println(res.getRow()+"..."+res.getInt(1)+"...."+res.getString(2));
        
        //move the cursor to 2nd record from last.
        
        System.out.println("Move cursor to 2nd  record from last");
        
        res.absolute(-2);
    
         System.out.println(res.getRow()+"..."+res.getInt(1)+"...."+res.getString(2));
         
        //move the cursor to the 2nd record
        
        System.out.println("Move cursor to second record from top");
        
        res.absolute(2);
    
        System.out.println(res.getRow()+"..."+res.getInt(1)+"...."+res.getString(2));
    
    
        con.close();
    
    }
    
}

/*
run:
Entire records
1...7369....SMITH
2...7499....ALLEN
3...7521....WARD
4...7566....JONES
5...7654....MARTIN
6...7698....BLAKE
7...7782....CLARK
8...7788....SCOTT
9...7839....KING
10...7844....TURNER
11...7876....ADAMS
12...7900....JAMES
13...7902....FORD
14...7934....MILLER
15...900....null
Move cursor to first record
1...7369....SMITH
Move cursor to last record
15...900....null
Move cursor to 2nd  record from last
14...7934....MILLER
Move cursor to second record from top
2...7499....ALLEN
BUILD SUCCESSFUL (total time: 0 seconds)

*/