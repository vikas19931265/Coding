
//App3: Program to display Columns meta information by using ResultMetaData

import java.sql.*;
import java.util.*;

class ResultSetDemo {

    public static void main(String[] args) throws Exception {

        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        Statement stmt= con.createStatement();
        
        ResultSet res= stmt.executeQuery("select * from emp");
        
        ResultSetMetaData rsmd= res.getMetaData();
        
        int count= rsmd.getColumnCount();
        
        System.out.println("Column count is"+ count);
        
        for(int i =1; i< count; i++)
        {
            System.out.print("Column name "+rsmd.getColumnName(i));
            
            System.out.print("  Column type "+rsmd.getColumnType(i));
            
            System.out.print("  Column display size "+rsmd.getColumnDisplaySize(i));
        
            System.out.println();
        }
    
    
        con.close();
    
    }
    
   
    
}

/*
run:
Column count is8
Column name EMPNO  Column type 2  Column display size 5
Column name ENAME  Column type 12  Column display size 10
Column name JOB  Column type 12  Column display size 9
Column name MGR  Column type 2  Column display size 5
Column name HIREDATE  Column type 93  Column display size 7
Column name SAL  Column type 2  Column display size 9
Column name COMM  Column type 2  Column display size 9
BUILD SUCCESSFUL (total time: 0 seconds)


*/