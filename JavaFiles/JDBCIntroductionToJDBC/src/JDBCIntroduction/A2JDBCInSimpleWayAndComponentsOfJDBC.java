package JDBCIntroduction;

/*

JDBC in Simple Way
===============================================================================

1. Consider we have are in Ameerpet and there is some place called XYZ place.

2. XYZ place is kind of place where gold and diamonds are available at a very 
   cheap price.

3. The people in this XYZ place speaks some native language which the people living
   in Ameerpet cannot understand.

4. The same scenario is applicable with java application and Database where both of 
   them are different. Java application need to interact with the JDBC and bring some
   results.


Now for people living in Ameerpet to reach XYZ place they have to follows these steps


Driver(Translator)
=================

1. Firstly we need a translator , this translator will help us to communicate with the 
   XYZ place people. This translator will translate our language to xyz people and xyz
   language to us.

   The same concept is applicable when java app is trying to communicate with the database
   Here java app cannot understand the language of database hence we need a translator
   here which can convert java based calls to database specific calls and database specific
   calls to java specific calls. This translator is nothing but called as Driver.


Connection(Road)
=================

2. Now once we get the translator we need to make a road between our place to xyz place.


   Similarly in JDBC, we have to create a connection between java application and jdbc.
   Using this connection java application can communicate with the database.

   This road is called as Connection.


Statement(Vehicle)
===================


3. Now once the road is ready we need a vehicle to reach the xyz place. So we have to 
   create a vehicle.

   Similarly in JDBC, we need vehicle to take input in form of query to the database.
   This object/vehicle is nothing but called as statement.

   Using the statement object we can send our SQL query into the database and we can get 
   the results from the database.



ResultSet
===============

4. Once our vehicle is ready we need a box in which we can store gold and diamonds.

   Similarly in JDBC we need a box which in which we can store the results of database hit.
   This box is nothing but called as ResultSet.


Basics components of Java Application
=================================================

1. Driver-------------> Translator

2. Road----------------> Connection

3. Statement------------> Vehicle

4. ResultSet------------->Box

*/
