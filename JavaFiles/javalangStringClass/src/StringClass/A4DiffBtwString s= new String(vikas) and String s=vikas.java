/*

Case 3:
------------------

Difference between String s= new String("durga") and String s ="durga";
================================================================================


String s = new String("Durga");
----------------------------------------

1. In this case two objects will be created. One in the heap area and the other one is in 
   SCP(String Constant Pool).

2. s is always pointing to heap object. In SCP copy of object will be there with no reference

                
                     -heap-----------|-----scp---------------    
                                     |
            -------                  |           -------
    s-----> |     |                  |           |      | 
            |durga|                  |           |durga | 
            |-----|                  |           |      | 
                                                 --------



String s ="Durga";
----------------------

1. In this case only one object will be created in SCP and s is always pointing to that object



                
                     -heap-----------|-----scp---------------    
                                     |
                                     |           -------
                                     |  s--->    |      | 
                                     |           |durga | 
                                     |           |      | 
                                                 --------



Note
-----

1. Object creation in SCP is optional. First jvm will check, if there is any object already present in SCP with the
   required content. If the object is already present, then existing object will be reused. 


2. If the object is not already present then only a new object will be created. But this rule is applicable only
   for SCP but not for heap.

3. Garbage collector is not allowed to access SCP area hence even though object does not contain any reference 
   variable, it is not eligible for garbage collection if it is present in the SCP area.

4. All the SCP objects will be destroyed automatically at the time of JVM shutdown.


*/

