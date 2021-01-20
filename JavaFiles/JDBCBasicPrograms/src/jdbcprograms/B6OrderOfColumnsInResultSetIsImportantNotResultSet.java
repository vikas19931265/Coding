/*

Selecting particular Columns from the Database:
================================================================================

While retrieving Data from Database, we have to consider Order of Columns in the ResultSet but
not in the Database Table.

Database Table Columns Order and ResultSet Columns Order need not be same. We have to give
Importance only for ResultSet Columns Order.

Eg-1: select * from employees;

In this case Database Table contains 4 Columns and ResultSet also contains 4 Columns and Order is
also same.

DB:(eno,ename,esal,eaddr)
RS:(eno,ename,esal,eaddr)

while(rs.next())
{
SOP(rs.getInt(1)+"..."+rs.getString(2)+"..."+rs.getDouble(3)+".."+rs.getString(4));
}


Eg-2: select esal, eno, eaddr, ename from employees;

In this case Database Table contains 4 Columns and ResultSet also contains 4 Columns, but Order
is not same.

DB:(eno,ename,esal,eaddr)
RS:(esal,eno,eaddr,ename)

We have to write the Code w.r.t ResultSet.

while(rs.next())
{
SOP(rs.getDouble(1)+"..."+rs.getInt(2)+"..."+rs.getString(3)+".."+rs.getString(4));
}

Eg-3: select ename,eaddr from employees;

In this case Database Table contains 4 Columns, but ResultSet contains 2 Columns.

DB:(eno,ename,esal,eaddr)
RS:(ename,eaddr)

while(rs.next())
{
SOP(rs.getString(1)+"..."+rs.getString(2));
}


*/