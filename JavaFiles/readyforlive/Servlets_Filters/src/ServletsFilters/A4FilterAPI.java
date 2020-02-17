/*

Filter API
=====================================

-> Like servlet filter have its own API. The javax.servlet package contains the three interfaces of Filter API.

Filter
FilterChain
FilterConfig


1) Filter interface
=================================

For creating any filter, you must implement the Filter interface. Filter interface provides the life cycle methods for a filter.

Method	Description

public void init(FilterConfig config)	

        init() method is invoked only once. It is used to initialize the filter.

public void doFilter(HttpServletRequest request,HttpServletResponse response, FilterChain chain)	

            doFilter() method is invoked every time when user request to any resource, to which the filter is mapped.It is used to perform filtering tasks.

public void destroy() 
        This is invoked only once when filter is taken out of the service.


2) FilterChain interface
============================================

-> The object of FilterChain is responsible to invoke the next filter or resource in the chain.
  This object is passed in the doFilter method of Filter interface.The FilterChain interface contains only one method:

    public void doFilter(HttpServletRequest request, HttpServletResponse response): 
    
        it passes the control to the next filter or resource.


*/