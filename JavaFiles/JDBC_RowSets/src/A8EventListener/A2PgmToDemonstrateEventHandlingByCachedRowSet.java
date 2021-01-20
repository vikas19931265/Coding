
/*

Application: To Demonstrate Event Handling by using CachedRowSet

*/
package A8EventListener;

import java.sql.*;
import javax.sql.RowSetEvent;

import javax.sql.RowSetListener;

import javax.sql.rowset.*;


class RowSetImpl implements RowSetListener
{

    @Override
    public void rowSetChanged(RowSetEvent rse) {
        System.out.println("Row Set changed");
    }

    @Override
    public void rowChanged(RowSetEvent rse) {
       System.out.println("Row changed");
    }

    @Override
    public void cursorMoved(RowSetEvent rse) {
        System.out.println("Cursor moved");
    }
    
}

class RowSetDriver
{
    public static void main(String[] args) throws SQLException
    {
       RowSetFactory rsf=RowSetProvider.newFactory();

       CachedRowSet rs=rsf.createCachedRowSet();

        rs.setUrl("jdbc:mysql://localhost:3306/vikasDB");

        rs.setUsername("vikas");

        rs.setPassword("vikas@1265");

        rs.setCommand("select * from emp");
        
        RowSetImpl rowset = new RowSetImpl();
        
        rs.addRowSetListener(rowset);
        
        rs.execute(); // At this point RowSet Changed method will get executed as entire rowset which
                      // was initially empty has been put some values.
        
        while(rs.next())
        {
            System.out.println(rs.getInt(1)+"..."+ rs.getString(2)); // every time cursor moved method will be executed here.
        }
        
        rs.moveToInsertRow();
        
        rs.updateInt(1, 1000);
        
        rs.updateString(2, "vikas");
        
        rs.insertRow(); // At this point rowchanged() method will get executed.
        
        rs.close();
        
    }
}

/*
run:
Row Set changed
Cursor moved
7369...SMITH
Cursor moved
7499...ALLEN
Cursor moved
7521...WARD
Cursor moved
7566...JONES
Cursor moved
7654...MARTIN
Cursor moved
7698...BLAKE
Cursor moved
7782...CLARK
Cursor moved
7788...SCOTT
Cursor moved
7839...KING
Cursor moved
7844...TURNER
Cursor moved
7876...ADAMS
Cursor moved
7900...JAMES
Cursor moved
7902...FORD
Cursor moved
7934...MILLER
Cursor moved
Row changed
BUILD SUCCESSFUL (total time: 0 seconds)

*/