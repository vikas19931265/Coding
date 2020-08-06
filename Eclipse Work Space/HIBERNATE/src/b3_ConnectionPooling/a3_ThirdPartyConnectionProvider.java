/*

third party vendor connection pool.
=============================================

we have different types of connection pool to configure explicitly.

by default this connection pool is not available in hb. so we have to configure explicitly.

different types of connection pools
-----------------------------------
C3P0.
Proxool.
Apache DBCP
--
--

If we want to work with third party connection pool, we have to follow following steps.

steps to work with c3p0.
-----------------------

1.add the jar in the class path.(c3p0-0.9.1.jar)

2.configure provider class in the configuration file.

<property name="hibernate.connection.provider_class">org.hibernate.connection.C3p0connectionProvider</property>

3.write c3p0 connection properties in hb configuration file.

<property name="hibernate.c3p0.min_size">100</property>
<property name="hibernate.c3p0.max_size">500</property>
<property name="hibernate.c3p0.timeout">1800</property>	
<property name="hibernate.c3p0.max_statements">50</property>

4.develop the remaining application like normal hb application.




*/