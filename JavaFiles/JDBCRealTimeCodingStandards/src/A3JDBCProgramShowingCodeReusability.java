//Java program following the coding standards

/*

Note
=============

If any code repeatedly required then it is not recommended to write that code every time
separately. We have to define that code inside a separate component and we can call that code
where ever it is required without rewriting. It promotes reusability of the code.

*/

import java.sql.*;

class JDBCCodeReusability
{
    public static void main(String[] args)
    {
        
    
    Connection con=null;
    Statement stmt=null;
    ResultSet rs=null;
    
        try
        {
             con = Util.getConnection(); //This will lead to loading of .class of Util class and hence 
                                         //static block will get executed which will happen only once.
        
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



class Util
{
    
  
    static
    {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
   
    
    public static  Connection getConnection()
    {
        try {
            Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
            return con;
           
        } catch (SQLException e) {
           
            e.printStackTrace();
            
            return null;
        }
        
    } 
    
    


    public static void CleanUp(ResultSet rs, Statement stmt, Connection con)
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