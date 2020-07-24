/*

1.HB configuration file.
=============================================

Based on the properties configured in configuraion file, HB creates the connection or session object.

anyname.xml acts as hibernate configuration file. but the default name is hibernate.cfg.xml.

If the configuration file name is default name(hibernate.cfg.xml), automatically hb loads the configuration file.

If the configuration file name is other than hibernate.cfg.xml, we have to write the logic to load the 
configuration file.

In this xml file we can configure hibernate properties.

So we can configure connection properties, transaction properties, connection pool properties, 
caching properties, Miscellaneous properties and so on...

To know all the properties in hibernate refer hibernate.properties file.(hb home/project/etc)

The following properties are required to connect the DB.

hibernate.connection.driver_class
hibernate.connection.url
hibernate.connection.username
hibernate.connection.password
hibernate.dialect

Ex:
---
hibernate.cfg.xml
-----------------
<!-- dtd -->
<hibernate-configuration>
<session-factory>
<property name="hibernate.connection.driver_class">
oracle.jdbc.driver.OracleDriver</property>

<property name="hiberante.connection.url">
jdbc:oracle:thin:@localhost:1521:XE</property>

<property name="hiberante.connection.username">system</property>

<property name="hiberante.connection.password"> manager</property>

<property name="hiberante.dialect"> org.hibernate.dialect.Oracle10gDialect</property>

<property name="show_sql">true</property>

<property name="format_sql">true</property>

<property name="use_sql_comments">true </property>

<property name="hbm2ddl.auto">create </property>

<mapping resource="Student.hbm.xml" />
 </session-factory>
</hibernate-configuration>

In the above code, 
<property> tag is used to configure the hiberate property.
<mapping> tag is used to configure the hibernate hb mapping file.

NOTE:
We can develop multiple configuration files in single application. 
While working with multiple databases then we will go for multiple configuration files.

when we load the hb configuration file, immediatly it load the mapping file.



*/