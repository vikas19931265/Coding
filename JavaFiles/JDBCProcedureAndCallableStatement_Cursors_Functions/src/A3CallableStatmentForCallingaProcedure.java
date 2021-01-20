/*

Java Code for calling Stored Procedures:
================================================================================

If we want to call stored procedure from java application, then we should go for

                    CallableStatement.
                  
CallableStatement is an interface present in java.sql package and it is the child interface of
PreparedStatement.
                        Statement (I) main parent
                           |
                           v
                    PreparedStatement (I) child of statement parent of callable statement
                           |
                           v 
                   CallableStatement (I)

Driver software vendor is responsible to provide implementation for CallableStatement interface.

We can create CallableStatement object by using following method of Connection interface.

            public CallableStatement prepareCall(String procedure_call) throws SQLException

                Eg: CallableStatement cst=con.prepareCall("{call addProc(?,?,?)}");
                    

{call addProc (?,?,?)}
===========================

Here "call" is the keyword, addProc is the procedure name and rest are the arguments

Whenever JVM encounters this line, JVM will send call to database.Database engine will check
whether the specified procedure is already available or not. If it is available then it returns
CallableStatement object representing that procedure.


*/
