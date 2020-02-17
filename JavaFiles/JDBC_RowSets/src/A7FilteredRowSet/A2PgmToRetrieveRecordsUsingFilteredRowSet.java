
/*

Application To Retrieve Records by using FilteredRowSet
*/

package A7FilteredRowSet;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.sql.RowSet;

import javax.sql.rowset.*;

class EmployeeSalaryFilter implements Predicate {

    float low;
    float high;

    EmployeeSalaryFilter(float low, float high) {
        this.low = low;
        this.high = high;
    }

    @Override
    public boolean evaluate(Object o, int i) throws SQLException {
        return false;
    }

    @Override
    public boolean evaluate(Object o, String string) throws SQLException {
        return false;
    }

    @Override
    public boolean evaluate(RowSet rowset) {
        
        FilteredRowSet res = (FilteredRowSet) rowset;
        
         boolean eval= false;
        
         try {
         
             float esal = res.getFloat(5);
            
             if((esal>=low) && (esal<=high))
            
             {
                eval=true;
            
             }
            
            else
            
             {
                eval=false;
            
             }
        
            } 
        
            catch (SQLException ex)
            {
            
                ex.printStackTrace();
            }
        
         return eval;
    
    }

}


class EmployeeFilterDemo
{
    public static void main(String[] args) throws SQLException
    {
        EmployeeSalaryFilter filter= new EmployeeSalaryFilter(2000,5000);
        
        RowSetFactory rsf= RowSetProvider.newFactory();
        
        FilteredRowSet frs= rsf.createFilteredRowSet();
        
        frs.setUrl("jdbc:mysql://localhost:3306/vikasDB");
        
        frs.setUsername("vikas");
        
        frs.setPassword("vikas@1265");
        
        frs.setCommand("select * from emp");
        
        frs.execute();
        
        System.out.println("RowSet before filter");
        
        while(frs.next())
        {
            System.out.println(frs.getInt(1)+"..."+frs.getString(2)+"..."+frs.getString(3)+ "..."+frs.getInt(4)+ "...."+ frs.getDouble(5));
        }
        
        frs.setFilter(filter);
        
        frs.beforeFirst();
        
        System.out.println("RowSet after filter");
        
        while(frs.next())
        {
            System.out.println(frs.getInt(1)+"..."+frs.getString(2)+"..."+frs.getString(3)+ "..."+frs.getInt(4)+ "...."+ frs.getDouble(5));
        }
        
        frs.close();
        
    }
}

/*
run:
RowSet before filter
7369...SMITH...CLERK...7902....800.0
7499...ALLEN...SALESMAN...7698....1600.0
7521...WARD...SALESMAN...7698....1250.0
7566...JONES...MANAGER...7839....2975.0
7654...MARTIN...SALESMAN...7698....1250.0
7698...BLAKE...MANAGER...7839....2850.0
7782...CLARK...MANAGER...7839....2450.0
7788...SCOTT...ANALYST...7566....3000.0
7839...KING...PRESIDENT...0....5000.0
7844...TURNER...SALESMAN...7698....1500.0
7876...ADAMS...CLERK...7788....1100.0
7900...JAMES...CLERK...7698....950.0
7902...FORD...ANALYST...7566....3000.0
7934...MILLER...CLERK...7782....1300.0
RowSet after filter
7566...JONES...MANAGER...7839....2975.0
7698...BLAKE...MANAGER...7839....2850.0
7782...CLARK...MANAGER...7839....2450.0
7788...SCOTT...ANALYST...7566....3000.0
7839...KING...PRESIDENT...0....5000.0
7902...FORD...ANALYST...7566....3000.0
BUILD SUCCESSFUL (total time: 0 seconds)

*/