/*

STEP 2: FILTER CLASS CONFIGURATION:
=========================================================================

To configure a Filter in web.xml file we have to use the following xml tags.

<web-app>
--------
<filter>
    <filter-name>logical_name</filter-name>
    <filter-class>Fully Qualified name of Filter</filter-class>
</filter>

<filter-mapping>
    <filter-name>logical_name</filter-name>
    <url-pattern>pattern_name</url-pattern>
or
    <servlet-name>logical name of servlet</servlet-name>
</filter-mapping>
--------
</web-app>


-> If we want to provide mapping between a Filter and Servlet then we have to provide the same
  url-pattern for both Filter and Servlet or provide the respective servlet logical name along 
  with <servlet-name> tag in place of <url-pattern> tag under <filter-mapping>.

-> In web applications, it is possible to use a single Filter for multiple number of web resources.
   To achieve this we have to use " /*" (Directory match) as url-pattern to the respective Filter.


-> In web applications, it is possible to provide multiple number of Filters for a single web resource,
   in this case container will execute all the Filters as per the order in which we provided <filter-mapping> tags in web.xml file.
   

*/

