/*
SessionFactory
========================


It is an interface defined in org.hibernate package.

It acts as group of session objects. It creates and manages the connection pool.

from configuration object we will get the SessionFactory object.

Ex:
 SessionFactory sf = new Configuration().configure().buildSessionFactory();

 we can see only one sessionfactory object in single application.

 SessionFactory object is immutable object.

 From the sessionfactory object we will get the session objects.
 
 SesssionFactory object means, it is an object of class which implements SessionFactory interface. 
 (SessionFactoryImpl)

Ex:

--
--
public SessionFactory buildSessionFactory(){
--
--
--
return new SessionFactoryImpl(-----);
}

above code is defined in Configuraion class.




*/