/*

Filters In Servlets
======================================================================================

-> In general in web application development, we will provide the complete application logic in the form
   of the web resources like servlets, jsps and so on.

-> As part of the web application development some web resources may require the services like
   Authentication, Authorization, Security, Data compression and decompression and so on as
   preprocessing and post processing.

-> In the above context, to implement all the above preprocessing and post processing services Servlet
   API has provided a separate component called Filter.

-> From the above representation when we send a request from client to server for a particular web resource then container 
    will pick up that request, container will check whether any Filter is associated with the respective web resource,
    
-> if container identify any Filter or Filters then container will execute that Filters first.

-> While executing a Filter if the present request is satisfied all the Filter constraints then only
   container will bypass that request to next Filter or next web resource.

-> If the present request is not satisfied the Filter constraints then container will generate the respective response to client

-> Filter is a server side component, it will be executed by the container automatically when it receives request from client 
   for a particular web resource.


-> The servlet filter is pluggable, i.e. its entry is defined in the web.xml file, if we remove the entry of filter 
   from the web.xml file, filter will be removed automatically and we don't need to change the servlet. So maintenance cost will be less.


Usage of Filter
=========================================

recording all incoming requests
logs the IP addresses of the computers from which the requests originate
conversion
data compression
encryption and decryption
input validation etc.

Advantage of Filter
===========================================

Filter is pluggable.
One filter don't have dependency onto another resource.
Less Maintenance



*/