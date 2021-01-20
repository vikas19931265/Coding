/*

Steps to develop JDBC application
===================================================

1. Load and Register the Driver.

2. Establish a connection between java application
   and Database.


3. Creation of the Statement object.

4. Send and execute sql query.

5. Process result from the ResultSet.

6. Close the connection.

    

class JDBCDemo
{

    public static void main(String[] args)
    {

        Class.forName("Oracle.jdbc.OracleDriver");
        Connection con=DriverManager.getConnection(url,userName, pwd);
        Statement stm=con.createStatement();

        ResultSet rs= st.executeQuery("Select * from employees");
        
        while(rs.next())
        {

           System.out.println(rs.getInt(1)+"...."+ rs.getString(2)+"....."+ rs.getDouble(3));

        }

        con.close();
    }     





*/









