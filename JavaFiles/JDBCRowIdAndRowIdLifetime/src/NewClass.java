import java.sql.*;

class RowIDDemo31 {

    public static void main(String[] args) throws Exception 
    {
        
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        
        DatabaseMetaData dbmd= con.getMetaData();
        
        System.out.println(dbmd.getRowIdLifetime());
        
        con.close();
    }
    
}

/*
run:
ROWID_VALID_FOREVER
BUILD SUCCESSFUL (total time: 0 seconds)

*/