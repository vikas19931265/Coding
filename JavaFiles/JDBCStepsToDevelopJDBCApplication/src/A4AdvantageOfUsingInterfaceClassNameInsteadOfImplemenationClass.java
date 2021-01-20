/*

Q. What Is The Advantage Of Using Interface Names In Our Application Instead Of Using
Implementation Class Names?
===============================================================================


Interface Reference can be used to hold implemented Class Object. This Property is called
Polymorphism.

Connection ➔ sun.jdbc.odbc.JdbcOdbcConnection ➔ Type-1
Connection ➔ orcale.jdbc.OracleT4Connection ➔ Type-2

In JDBC Programs, Interface Names are fixed and these are provided by JDBC API. But
Implementation Classes are provided by Driver Software Vendor and these Names are varied from
Vendor to Vendor.

If we Hard Code Vendor provided Class Names in our Program then the Program will become
Driver Software Dependent and won't work for other Drivers.

If we want to change Driver Software then Total Program has to rewrite once again, which is
difficult. Hence it is always recommended to use JDBC API provided Interface Names in our
Application.

*/