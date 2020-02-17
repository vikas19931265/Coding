/*

Type-3 Driver:
=============================


1. Also known as All Java Net Protocol Driver OR Network Protocol Driver OR Middleware Driver


               ------->                                     -------->                                   --------->
java application           All Java net protocol driver               middleware server(IDS)                    Database
               <-------                                     <--------                                   <---------

-------------------------client machine--------------------------------


2. Type-3 Driver converts JDBC Calls into Middleware Server specific Calls. Middleware Server can
   convert Middleware Server specific Calls into Database specific Calls.


3. Internally Middleware Server may use Type-1, 2 OR 4 Drivers to communicates with Database.


Advantages:
-----------------------


1. This Driver won't communicate with Database directly and hence it is Database Independent
Driver.

2. This Driver is Platform Independent Driver.

3. No need of ODBC Driver OR Vendor specific Native Libraries


Limitations:
-----------------------

1. Because of having Middleware Server in the Middle, there may be a chance of Performance
   Problems.

2. We need to purchase Middleware Server and hence the cost of this Driver is more when
   compared with remaining Drivers.

Eg: IDS Driver (Internet Database Access Server)

Note: The only Driver which is both Platform Independent and Database Independent is Type-3
Driver. Hence it is recommended to use.

*/