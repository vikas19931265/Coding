/*
Default Connection Pool
=============================

For default connection pool, no need to configure any property in the configuration file. when we activate hb environment by
default hb software creates the connection pool.

the default connnection pool size is 20.

To change the default connection pool size we will use following property.

<property name = "hibernate.connection.pool_size">10</property>

For the default connection pool internally hb software uses one provider class. i.e DriverManagerConnectionProvider.

it is available in org.hibernate.connection package.

NOTE: All the provider classes internally implements org.hibernate.connection.ConnectionProvider interface.




*/