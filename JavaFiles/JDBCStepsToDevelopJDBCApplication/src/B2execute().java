/*

execute() method:
====================================================

We can use this Method for both Select and Non-Select Operations.
If we don't know the Type of Query at the beginning and it is available dynamically at
runtime then we should use this execute() Method.

        public boolean execute(String sqlQuery)throws SQLException



boolean b = st.execute("dynamically provided query");
if(b==true)//select query
{
ResultSet rs=st.getResultSet();
//use rs to get data
}
else// non-select query
{
int rowCount=st.getUpdateCount();
SOP("The number of rows effected:"+rowCount);
}


*/