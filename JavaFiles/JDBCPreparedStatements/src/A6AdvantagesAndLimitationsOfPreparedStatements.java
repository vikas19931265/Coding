/*

Advantages of PreparedStatement:
===============================================================================

1. Performance will be improved when compared with simple Statement because query will be
compiled only once.

2. Network traffic will be reduced between java application and database because we are not required
to send query every time to the database.

3. We are not required to provide input values at the beginning and we can provide dynamically so
that we can execute same query multiple times with different sets of values.

4. It allows to provide input values in java style and we are not required to convert into database
specific format.

5. Best suitable to insert Date values

6. Best Suitable to insert Large Objects (CLOB,BLOB)

7. It prevents SQL Injection Attack.

Limitation of PreparedStatement:
================================================================================

We can use PreparedStatement for only one sql query (Like CDMA Phone), but we can use simple
Statement to work with any number of queries (Like GSM Phone).

Eg:
    Statement st = con.createStatement();
    st.executeUpdate("insert into ...");
    st.executeUpdate("update employees...");
    st.executeUpdate("delete...");

Here We Are Using One Statement Object To Execute 3 Queries
PreparedStatement pst = con.prepareStatement("insert into employees..");
Here PreparedStatement object is associated with only insert query.

Note: Simple Statement can be used only for static queries where as PreparedStatement can
      be associated with both the static as well as the dynamic queries.



*/