/*

Steps to prepare a filter
=====================================

-> If we want to use Filters in our web applications, we have to use the following steps.

STEP 1: Prepare Filter class.
STEP 2: Configure Filter class in web.xml file.


STEP 1: PREPARE FILTER CLASS:
=======================================================================================================

-> Filter is an object available at server machine, it must implement Filter interface either directly or indirectly.

public interface Filter {

    public void init(FilterConfig config)throws ServletException;
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain fc)throws SE, IOE
    public void destroy(); 
    
    
}

public class MyFilter implements Filter {
    
            ----- 
    
    
}



-> Where init(_) method can be used to perform Filter Initialization.

-> Where doFilter(_,_,_) method is same as service(_,_) method in servlets it is able to accommodate actual Filter logic.

-> Where destroy() method can be used to perform Filter Deinstantiation.


-> While executing a particular Filter in web applications, if we satisfy all the Filter constraints then we need to bypass the
  request from present Filter to the next Filter web resource, for this we need to use the following method from FilterChain.

        public void doFilter(ServletRequest req, ServletResponse res)throws SE, IOE



-> While executing a particular web application, when container identify a particular Filter to execute 
   then container will execute that Filter by following the following Filter life cycle.


                        Filter Loading--------------
                            |                       |    
                            v                       |
                    Filter Instantiation            |----At the time of server startup
                            |                       |
                            v                       |    
                    Filter Initialization-----------
                            |
                            V
                    Filter Processing------------------> At the time of request processing
                            |
                            V
                Filter Deinstantiation----------------->At the time of the server shutdown.


-> In web applications, by default all the Filters are auto-loaded, auto-instantiated, auto-initialized at the
  time of server start up. So that Filters should not require load-on-startup configuration in web.xml file.



*/



