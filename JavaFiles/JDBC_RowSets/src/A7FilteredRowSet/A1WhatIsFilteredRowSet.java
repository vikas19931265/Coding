/*

FilteredRowSet(I):
==================================================================

-> It is the child interface of WebRowSet.

-> If we want to filter rows based on some condition then we should go for FilteredRowSet.

-> We can define the filter by implementing Predicate interface.
 
    public class EmpSalFilter implements Predicate
    {
        evaluate(Object value,String columnName)
        {
            This method will be called at the time of insertion
        }

        evaluate(Object value,int columnIndex)
        {
            this method will be called at the time of insertion
        }
        
        evaluate(RowSet rs)
        {
            filtering logic
        }
    }

-> We can set Filter to the FilteredRowSet as follows...

        EmployeeSalaryFilter f=new EmployeeSalaryFilter(2500,4000);
        rs.setFilter(f);


*/