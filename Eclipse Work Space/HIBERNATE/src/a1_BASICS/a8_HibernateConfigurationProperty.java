/*

hibernate.connection.pool_size
==========================================================


Hibernate gives inbuilt support for connection pool.
By default hibernate creates 20 connection objects.
To change the default connection pool we will go for "hibernate.connection.pool_size" property

Ex:

<property name="hibernate.connection.pool_size">10</property>

NOTE: To create default connection pool, internally hibernate uses DriverManagerConnectionProvider class.

NOTE: Not recomeded to use in realworld(prod).

dialect
===================

Hibernate generates the sql queries for database independent persistace logic.
i.e INSERT query for save() or persist().
    UPDATE query for update() or merge().
    DELETE query for delete().
    SELECT query for load() or get().

To generate the sql for specific to database hb uses dialect.

dialect property allows dialect class, which is provided by the HB software.

Ex:
<property name="hibernate.dialect">org.hibernate.dialect.Oracle10gDialect</property>

All the dialect class defined in org.hibernate.dialect package.

hibernate.hbm2ddl.auto
===========================================

it allows create, update, create-drop and validate.

By using this property HB s/w performs DDL operations(Create Drop)

create:
-------
For each and every client request it creates new table in the DB. If the table is not available it 
creates a new table. If the table is already available in the DB, it drops the table and creates a new table.

It is not recommeded value in the realworld appl.

update
------
it is the default value for hbm2ddl.auto property.

If the table is not available in the database, it creates a table. If the table is already available in
the db, it update the the data in the table.

It is the most recomended value in the realworld application.

create-drop
-----------
HB s/w create the table when the session factory object was created. and HB s/w drop the table when 
the session factory object was closed.

it is similar to "create" only

validate:
---------
HB s/w validates the table based on hb mapping file.

show_sql
---------
It allows boolean value, the default value is false.

Hibernate s/w generates the sql for DB indenpendent queries or logic. To see the hb generated queries on
console we will go for "show_sql".

If it is true sql query will be show on the console.

format_sql
----------
It allows boolean value, the default value is false.

HB s/w formatted the generated sql query.

Ex:
insert 
  into
   TB_STUDENT
   (NAME, EMAIL, MOBILE, NO) 
  values
   (?, ?, ?, ?)

use_sql_comments
----------------
hb generates the comments for sql query
it allows boolean value, the default value is false.
/* insert Student */ 


