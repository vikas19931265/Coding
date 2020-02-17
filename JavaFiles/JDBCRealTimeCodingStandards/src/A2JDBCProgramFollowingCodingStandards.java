//Java program following the coding standards

import java.sql.*;

class JDBCCodingStandardProgram
{
    public static void main(String[] args)
    {
        try
        {
            Class.forName(("oracle.jdbc.OracleDriver"));
        }
    
        catch(ClassNotFoundException e)
        {
             e.printStackTrace();
        }
    
    Connection con=null;
    Statement stmt=null;
    ResultSet rs=null;
    
        try
        {
             con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
             stmt=con.createStatement();
             
             rs=stmt.executeQuery("select * from employees");
             
              while(rs.next())
              {
                  System.out.println(rs.getInt(1)+".."+rs.getString(2)+"..."+rs.getDouble(3)+".."+rs.getString(4));
              }
             
        }
        
        catch(SQLException e)
        {
            e.printStackTrace();
        }
    
    
        finally
        {
            try
            {
                if(rs!=null)
                    rs.close();
                
                if(stmt!=null)
                    stmt.close();
                if(con!=null)
                    con.close();
            }
        
            catch(SQLException e)
            {
                e.printStackTrace();
            }
        
        
        }
    
    }
}

/*
run:
2..Swati...2000.0..Banglore
3..Gautam...5000.0..Utter
4..Amar...6000.0..Chennai
1..sameer...10000.0..Chennai
5..Ajit...70000.0..Karnataka
6..Aarti...4000.0..Pune
BUILD SUCCESSFUL (total time: 0 seconds)

*/