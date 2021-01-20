/*


Mapping Java Types to database Types by using JDBC Types:
=======================================================================

Java related data types and database related data types are not same.Some mechanism must be
required to convert java types to database types and database types to java types. This
mechanism is nothing but "JDBC Types", which are also known as "Bridge Types".



Java Data Type      JDBC Data Type           Oracle Data Type

int                 Types.INTEGER                   number
float               Types.FLOAT                     number
String              Types.VARCHAR               varchar/varchar2
java.sql.Date       Types.DATE                      date



Note: JDBC data types are defined as constants in "java.sql.Types" class.
=====


*/