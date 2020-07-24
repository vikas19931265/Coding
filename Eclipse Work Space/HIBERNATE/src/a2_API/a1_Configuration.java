/*

Configuraation
==================

It is a class defined in org.hibernate.cfg package.

By using this class we can load and parse the configuration and mapping file.

It is usually created once during applciation initialization.

An object of Configuration class allows to specify the connection properties or hibernate properties.

Generally we can see only one configuration object for single database. But if we connected multiple databases
from single application then we will see multiple configuration objects.

From configuration object we will get SessionFactroy object.

by using following method we will get the sessionfactory object.

public SessionFactory buildSessionFactory();

//Configuration.java
--------------------
package org.hibernate.cfg;
//import statements
public class Configuration implements Serializable
{
---
---
}

Configuration class contains multiple overloaded configure() methods.

public Configuration configure()

public Configuration configure(String resource)

configure()
-----------
By using this method we can load the default configuration file. i.e hibernate.cfg.xml. But this mehtod 
internally calls the configure(-) with parameter by passing "hibernate.cfg.xml" file.
Ex:
   public Configuration configure(){
      configure("/hibernate.cfg.xml");
      return this;
   }

public Configuration configure(String resource)
-------------------------------------
In hiberante we can change the hb configuration file name. If we taken hibernate configuration 
file other than default configuration(hibernate.cfg.xml) file then we will go for this method.

this method internally calls the doConfigure(-) to parse the xml files.

NOTE:
-----
In the client appl. if we want to load the configuration file(either default or user defined) then 
we will go for configure(-) with parameter.


*/



