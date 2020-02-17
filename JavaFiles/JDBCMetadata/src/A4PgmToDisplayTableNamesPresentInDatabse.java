/*

App2: Program to display Table Names present in Database by using DataBaseMetaData
==========================================================================

Note: Some driver softwares may not capture complete information. In that case we will get
default values like zero.

 */

import java.sql.*;
import java.util.*;

class DatabaseMetaDataDemo2 {

    public static void main(String[] args) throws Exception {

        int count = 0;
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");
        DatabaseMetaData dbmd = con.getMetaData();
        String catalog = null;
        String schemaPattern = null;
        String tableNamePattern = null;
        String[] types = null;
        ResultSet rs = dbmd.getTables(catalog, schemaPattern, tableNamePattern, types);
        //the parameters can help limit the number of tables that are returned in the ResultSe
        //the ResultSet contains 10 columns and 3rd column represent table names.

        while (rs.next()) {
            count++;
            System.out.println(rs.getString(3));
        }
        System.out.println("The number of tables:" + count);
        con.close();
    }
}
