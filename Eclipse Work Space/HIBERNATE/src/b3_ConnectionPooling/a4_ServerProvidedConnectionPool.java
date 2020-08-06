/*

3.ServerSupplied connection pool.
==============================================

Maximum servers are provided with connection pooling service, Maximum realworld applications are deployed in servers so we 
can use the server supplied connection pool for any web application.

steps.

1.configure provider class and datasource in configuration file using following property

<property name="hibernate.connection.provider_class">org.hibernate.connection.DatasourceConnectionProvider</property>

<property name="hibernate.connection.datasource">dsname</property>

2.develop the remaining application like normal hb aplication.

NOTE:
if we configured hibernate.connection.datasource in the configuration file, configuration of DatasourceConnectionProvider is optional.

Max realworld applications uses server supplied connectionpool using datasource.

NOTE: If we configure datasource in the configuration file, configuration of driverClass, url, username and password is optional.




to make hb s/w working with each type of jdbc connectin pool we need to specify an appropiate connection provider 
class as the value of "hibernate.connection.provider_class" property in config file.

For default connection pool 

org.hibernate.connection.DriverManagerConnectinProvider.

for server managed connection pool 

org.hibernate.connection.DataSourceProvider

for c3po0 s/w managed connection pool 

org.hibernate.connection.C3p0connectionProvider


timeout: the total lifetime period of each jdbc connection object
minsize: specifies the no of new connection objects that are should be created when there is a need of 
creating new jdbc connection objects in connection pool.


server supplied pool

<property name="hibernate.connection.provider_class">org.hibernate.connection.DataSourseConnectionProvider</property>


<property name="hibernate.connection.datasource">pool name or datasource name created in server</property>






*/