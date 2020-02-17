/*

partial hierarchy of java.lang package.
-----------------------------------------------
    
                                    Object
                                      |
----------------------------------------------------------------------------------------
|               |              |                |            |              |             |...............many more
                                                                                
String      StringBuffer    StringBuilder       Number      Character    Boolean        Void 
                                                 |   
                     ------------------------------------------------------------                                   
                     |              |           |           |           |        |   
                   Byte           Short     Integer         Long      Float     Double




Conclusions
-------------------

1. The wrapper classes which are not child class of Number are Boolean and Character.

2. The wrapper classes which are not direct child class of Object are Byte, Short, Integer, Long, Float, Double.

3. String , StringBuffer, StringBuilder and all the wrapper classes are final classes.

4. In addition to String objects all the wrapper class objects are also immutable.

5. Sometimes void class is also considered as wrapper class.

*/
