/*

Find out how many objects are created in the memory????
================================================================================


String s1 = new String("Durga");
	
s1.concat("software");

String s2= s1.concat("Solutions");

s1= s1.concat("soft");

System.out.println(s1);

System.out.println(s2);


Steps
---------

1. String s1 = new String("Durga");

    This line will create two object, 1 in the heap and 1 in the SCP for the future use.


            heap                                                scp


    s1----> durga(Object)                                       durga(Object)


2. s1.concat("software");

      "software" is a string constant (with double quotes). All the string constant that is content with double quotes
       will always be placed in the String constant pool.

       Now we are performing concat operation on s1.concat(software). All this kind of run time operation leading 
       to creating of new objects will always be stored in the heap area and not in SCP. SCP only contain the constants.
       Hence a new object will be created in the heap area.

        
       s1.concat("software")-----> durgasoftware
           
       but this object will not have any reference, it will be destroyed by the JVM after its creation.


            

            heap                                                scp


    s1----> durga(Object)                                       durga(Object)


           durgasoftware( no reference,                         software(Object)
                          gc will destroy it
                          later)


3. String s2= s1.concat("Solutions");

            Here a new object will be created in SCP as "Solutions" is a string constant. Also since we 
            are performing concat operation which will lead to creation of new object hence object will
            be created in the heap area also after performing concat operation.


            heap                                                scp


    s1----> durga(Object)                                       durga(Object)


           durgasoftware( no reference,                         software(Object)
                          gc will destroy it
                      
  s2------>durgasolutions(object)                               Solutions(object)
          
  

4. s1= s1.concat("soft");

        "Soft" will be stored in the string constant pool. And new object will be created in the heap concatenating 
        soft with s1.

        new object reference will be assigned to s1 , hence s1 previously pointing to durga(object) will start 
        pointing to "durgasoft".




            heap                                                scp
           ----------------------------------------------------------

    durga(Object)                                                durga(Object)


    durgasoftware( no reference,                                software(Object)
                   gc will destroy it
                      
  s2------>durgasolutions(object)                               Solutions(object)
          
  
 s1----->durgasoft                                               soft(Object)




TOTAL 8 OBJECTS CREATED,

System.out.println(s1)---->durgasoft

System.out.println(s2)------>durgasolutions.


note by durga
----------------


1.****** For every string constant one object will be placed in SCP area.

2. Because of some runtime operation , if an object is required to create that object
   will be placed only in the heap area but not in SCP area.

*/


