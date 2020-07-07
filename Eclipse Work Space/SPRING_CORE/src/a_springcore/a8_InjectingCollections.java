package a_springcore;
/*
Injecting Collections
=========================


Injecting java.util package related classes. i.e List, Set, Map and Properties
-----------------------------------------------------------------------------

If the property type is java.util.List use <list> tag in xml to configure the property

If the property type is java.util.Set use <set> tag in xml to configure the property

If the property type is java.util.Map use <map> tag in xml to configure the property

If the property type is java.util.Properties use <props> tag in xml to configure the property

table
-----

property type              tag
--------------           --------
String  
primitive datatype ---- <value> or value 
wrapper class                attribute

Array     ------------ <list> or<array>

Bean(POJO)
Class   --------    <ref> or ref attribute
Interface

java.util.List --------   <list>

java.util.Set --------   <set>

java.util.Map --------   <map>

java.util.Properties -----   <props>

null -------------------   <null/>


*/