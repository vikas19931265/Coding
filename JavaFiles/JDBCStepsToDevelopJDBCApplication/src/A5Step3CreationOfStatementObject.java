/*

Step-3: Creation of Statement Object
================================================================

Once we established Connection between Java Application and Database, we have to prepare SQL
Query and we have to send that Query to the Database. Database Engine will execute that Query
and send Result to Java Application.

To send SQL Query to the Database and to bring Results from Database to Java Application some
Vehicle must be required, which is nothing but Statement Object.

We can create Statement Object by using createStatement() Method of Connection Interface.


            public Statement createStatement();


Eg: Statement st = con.createStatement();



*/