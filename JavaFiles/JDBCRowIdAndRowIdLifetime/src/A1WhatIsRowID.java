/*

Working with RowId and RowIdLifetime
=====================================================

RowId interface:
=====================

-> Present in java.sql package.

-> Introduced in JDBC 4.0V.

-> For every row Database engine will associate a unique id, which is nothing but RowId.

-> Internally RowId represents logical address of the row.

-> Whenever we are inserting rows automatically Database engine will generate RowId for each
row and programmer is not responsible to provide.

-> Database Engine will use RowId internally to retrieve Data.

-> The main advantage of RowId is Fast Retrieval of Data.

Sample Java Code to get RowId:

ResultSet rs = st.executeQuery("select rowid,eno,ename,esal,eaddr from employees");
RowId id = rs.getRowId("rowid"); or
RowId id = rs.getRowId(1);

RowId is an object and hence we have to convert into byte[].
byte[] b=id.getBytes();

We have to convert byte[] into String, so that we will get meaningful String representation
String s = new String(b);
System.out.println(b);



*/