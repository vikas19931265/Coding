/*
Step-5: Process Result from ResultSet
===============================================================================

After executing Select Query, Database Engine will send Result back to Java Application. This
Result is available in the form of ResultSet.

i.e. ResultSet holds Result of executeQuery() Method, which contains a Group of Records.
By using ResultSet we can get Results.

ResultSet is a Cursor always locating Before First Record (BFR).
To check whether the next Record is available OR not, we have to use rs.next() Method.


            public boolean next()


This Method Returns True if the next Record is available, otherwise returns False.

while(rs.next())
 {

read data from that record
 }


If next Record is available then we can get Data from that Record by using the following Getter
Methods.

1. getXxx(String columnName)
2. getXxx(int columnIndex)

Like getInt(), getDouble(), getString() etc..
Note:

In JDBC, Index is always one based but not Zero based i.e. Index of First Column is 1 but not 0.


 while(rs.next())
 {
     SOP(rs.getInt("ENO")+".."+rs.getString("ENAME")+".."+rs.getDouble("ESAL")+".."+rs.getS
    tring("EADDR"));
        OR
 SOP(rs.getInt(1)+".."+rs.getString(1)+".."+rs.getDouble(3)+".."+rs.getString(4));

 }

Note:
================

Readability wise it is recommended to use Column Names, but Performance wise it is
recommended to use Column Index. (Because comparing Numbers is very easy than comparing
String Values)

Hence if we are handling very large Number of Records then it is highly recommended to use
Index.

If we know Column Name then we can find corresponding Index as follows...

    int columnIndex=rs.findColumn(String columnName);

Conclusions:
==========================

1. ResultSet follows "Iterator" Design Pattern.

2. ResultSet Object is always associated with Statement Object.

3. Per Statement only one ResultSet is possible at a time. if we are trying to open another
ResultSet then automatically first ResultSet will be closed.

Eg:

Statement st = con.createStatement();
RS rs1 = st.executeQuery("select * from movies");
RS rs2 = st.executeQuery("select * from employees");

In the above Example Rs1 will be closed automatically whenever we are trying to open Rs2.



*/