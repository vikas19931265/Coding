/*
Hibernate Architecture
================================


1. HB Client application load the hibernate configuration file and mapping file.

2. Developer uses the HB API and HB resources to develop the database independent persistance logic.

3 Java application connects the database through hb environemnt to perform CURD operations.

4. DB sends the result to the client application through hb environment.

Steps to connect the DB using HB.
---------------------------------
1.load the configuration file and mapping file.

2.builds the SessionFactory object.

3.get the Session object.

4.write the logic to perform CURD operations by using session methods.

5.close the session.


*/




