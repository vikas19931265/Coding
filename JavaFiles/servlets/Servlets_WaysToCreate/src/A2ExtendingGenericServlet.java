
/*
SECOND APPROACH TO DESIGN SERVLETS (EXTENDING GENERICSERVLET ABSTRACT CLASS):
====================================================================================================


1.If we want to design servlets by using this approach then we have to take an user defined class which
  must be a subclass to GenericServlet abstract class.  */    



package ServletsCreation;

import java.io.*;

import javax.servlet.*;

public abstract class bCreatingServletsExtendingGenericServlet implements Servlet, ServletConfig, Serializable 

{
    private transient ServletConfig config; 
    
    
    public void init(ServletConfig config)throws ServletException
    
    {

            this.config=config;
            
            init(); // note, that there are two init methods in case of GenericServlet. If we want to override
                    // init() method with no usage of config object then we can use this approach

    }

    
    public void init()
        
    { 
    
            // We can override the init() method implementation here
    }

    
    public abstract void service(ServletRequest req, ServletResponse res)throws ServletException, IOException
    {
       
        
    }   
      
    public ServletConfig getServletConfig() {
       
        return config;
    }

    public String getServletInfo() {
        
        return null;
    }

    public void destroy() 
    
    { 
    
    
    }

}

public class MyServlet extends bCreatingServletsExtendingGenericServlet
    
    {



    }



/*


1. GenericServlet is an idea came from Adapter Design Pattern.

2. GenericServlet predefined abstract class has implemented Serializable interface so that all the
  GenericServlet objects(subclass objects of GenericServlet abstract class) are eligible for
  Serialization and Deserialization by default.

3. It is possible to serialize GenericServlet objects, but config predefined reference variable will
  not be participated in serialization and deserialization because config reference variable has
  declared as transient.

4. In GenericServlet abstract class, init(_) method is overloaded method.

5. In GenericServlet abstract class, still service(_,_) method is an abstract method.



Q: What is the requirement to override init(_,_) method in servlet applications?
==========================================================================================================

ANS: 

1.In general as part of servlets design we will use service(_,_) method to provide application logic.

2. In some cases, application logic may include the actual business logic and its prerequirement.

3. If we provide both prerequirement code and business logic within service(_,_) method then the
   performance of the application will be reduced because container will execute business logic and its
   prerequirement code for every request send by the client, but as per the convention it is sufficient to
   execute prerequirement code only one time.

4.  In the above context, to improve the performance of servlet application we have to provide the actual
    business logic in service(_,_) method and the prerequirement code in init(_) method because container
    will execute init(_) method only one time, but service(_,_) method for every request.


NOTE: In servlet applications, always it is suggestible to override init() method(second init() method)
but if our prerequirement code may include any data from ServletConfig object then it is suggestible to
override init(ServletConfig config) method.



The main difference between first approach and second approach of designing servlets in the point of
flow of execution, in first approach container will execute only one init(_) method in servlet
initialization, but in second approach container will execute two init() methods in servlet initialization .


*/