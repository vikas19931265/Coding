/*

Need of PreparedStatement:
================================================

In the case of normal Statement, whenever we are executing SQL Query, every time compilation
and execution will be happened at database side.

Statement st = con.createStatement();
ResultSet rs = st.executeQuery ("select * from employees");


Java Application    -----request time--->               -------compile--------
                                                  database
                    <-----response time---              -------execute-------

                    
Total Time per Query = Request time+Compile time+Execution time+Response Time
 = 1 ms + 1 ms + 1 ms + 1 ms = 4ms
per 1000 Queries = 4 * 1000ms = 4000ms


Sometimes in our application,we required to execute same query multiple times with same or
different input values.

Eg1:

In IRCTC application,it is common requirement to list out all possible trains between 2 places

    select * from trains where source='XXX' and destination='YYY';

Here the Query is same but source and destination places may be different. This query is required to
execute lakhs of times per day.

Eg2:

In BookMyShow application, it is very common requirement to display theatre names where a
particular movie running/playing in a particular city

    select * from theaters where city='XXX' and movie='YYY';

In this case this query is required to execute lakhs of times per day. May be with different movie
names and different locations.

For the above requirements if we use Statement object, then the query is required to compile and
execute every time, which creates performance problems.

To overcome this problem, we should go for PreparedStatement.

The main advantage of PreparedStatement is the query will be compiled only once even though
we are executing multiple times, so that overall performance of the application will be improved.

We can create PreparedStatement by using prepareStatement() method of Connection interface.

    public PreparedStatement prepareStatement(String sqlQuery) throws SQLException
    
    Eg: PreparedStatment pst=con.prepareStatement(sqlQuery);

At this line,sqlQuery will send to the database. Database engine will compile that query and stores
in the database.

That pre compiled query will be returned to the java application in the form of PreparedStatement
object.

Hence PreparedStatement represents "pre compiled sql query".

Whenever we call execute methods,database engine won't compile query once again and it will
directly execute that query,so that overall performance will be improved.

Total Time per Query = Req.T+Resp.T+Execution.Time
 = 1 ms + 1 ms + 1 ms = 3ms
1000 Queries = 3000ms


*/