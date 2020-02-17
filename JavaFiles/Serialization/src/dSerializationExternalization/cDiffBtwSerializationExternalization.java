/*


In Serialization transient keyword will play a role but in the case of Externalization
transient keyword will not play any role of course transient keyword not required in 
the Externalization.



Differences between Serialization and Externalization
=====================================================


Serialization                                                                    Externalization


1. It is meant for default serialization                                    1. It is meant for the 
                                                                               customized serialization.
                                                                               
                                                                               
2. Here everything is taken care by JVM and programmer                      2. Here everything is taken care
   doesnt not have any control.                                                by programmer and JVM does not have
                                                                              any control.
                                                                              
3. In this case it is always possible to save total object to the           3. Based upon our requirement we can save  
   file and it is not possible to save part of the object.                    either total object or part of the object.
   
4. Relatively performance is low                                            4. Relatively performance is high.

5. It is the best choice if we want to save total object to the file        5. It is best choice if we want to save partial
                                                                                object to the file.
                                                                                
                                                                                
6. Serializable interface does not contain any methods and hence it         6. Externalizable interface contain two methods writeExternal()
   is a marker interface.                                                      and readExternal() and hence it is not a marker interface.
   
   
7. Serializable implemented class is not required to contain public         7. Externalizable implemented class should compulsory contain 
   no argument constructor.                                                    public no argument constructor otherwise we will get run time
                                                                               exception saying invalid class exception.
                                                                               
8. transient keyword will play  a role in serialization.                    9. transient keyword will not play any role in externalization as 
                                                                               it wont be required.

**update1

*/
