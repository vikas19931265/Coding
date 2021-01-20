
import java.sql.*;

class RowIDDemo {

    public static void main(String[] args) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "scott", "tiger");

        Statement stmt = con.createStatement();

        ResultSet res = stmt.executeQuery("select rowid, ename from emp");

        while (res.next()) {
            RowId id = res.getRowId(1);

            byte[] b = id.getBytes();

            String s = new String(b);

            System.out.println(s + "..." + res.getString(2));
        }

    }
}

/*
run:
AAAE5kAABAAAK/pAAA...SMITH
AAAE5kAABAAAK/pAAB...ALLEN
AAAE5kAABAAAK/pAAC...WARD
AAAE5kAABAAAK/pAAD...JONES
AAAE5kAABAAAK/pAAE...MARTIN
AAAE5kAABAAAK/pAAF...BLAKE
AAAE5kAABAAAK/pAAG...CLARK
AAAE5kAABAAAK/pAAH...SCOTT
AAAE5kAABAAAK/pAAI...KING
AAAE5kAABAAAK/pAAJ...TURNER
AAAE5kAABAAAK/pAAK...ADAMS
AAAE5kAABAAAK/pAAL...JAMES
AAAE5kAABAAAK/pAAM...FORD
AAAE5kAABAAAK/pAAN...MILLER
AAAE5kAABAAAK/pAAO...null
AAAE5kAABAAAK/pAAP...null
AAAE5kAABAAAK/pAAQ...null
BUILD SUCCESSFUL (total time: 0 seconds)

*/
