
/*

1. What is an interface??

 Definition 1

    Any service requirement specification(SRS) is considered as an interface.

 Example1

    JDBC API acts as a requirement specification to develop database drivers.

    DataBase vendor is responsible to implement this JDBC API.
    


                        SUN
                         |
                         |        
                       JDBC API (acting as interface)    
                          |  
             ||           ||                ||
       Oracle Driver    MySQLDriver       DB2 Driver                 


 Example 2:


    Servlet API acts as the requirement specification to develop web server. Web server vendor is responsible
    to implement Servlet API.

                                
                        SUN
                         |
                         |        
                       Servelt API     ( contract given by SUN in order to implement the servlet API , this is acting like interface)
                          |  
       ||                ||                           ||
Apache Tomcat server   Oracle Weblogic server      IBM Websphere server                



Definition 2:

    From client point of view an interface defines the set of services what he is expecting. From service provider
    point of view an interface defines the set of services what he is offering hence any contract between client and service
    provider is considered as an interface.


    Example

        Through Bank ATM GUI screen Bank highlights the set of services they offer , GUI screen represent the same set of services expected by the
        customer hence this GUI screen acts as a contract between customer and Bank.


        
        customer----------> GUI(withdraw, deposit, checkBalance)<--------- Bank 

            This is a contract.
            



Defination 3:

Inside interface, every method is always abstract whether we are declaring or not hence interface can also be considered as 100%
pure abstract class 



Summary Defination

Any service requirement specification or any contract between client and the service provider or 100% pure abstract class is known as
interface.



*/

//---------------------------------------------------------------------------------*******************--------------------------------------
