/* transient keyword.
==============================

1. transient is a modifier which is applicable only for variables.

2. We can use transient keyword in serialization context.

3. At the time of serialization if we dont want to save the value of the particular variable to meet the security constraints
   then we should declare that variable as transient variable.	

4. At the time of the serialization JVM ignores original value of the transient variables and save the default value to the file.
   Hence transient means not to serialize..

                                                        
eg              a---->( username:durga, pwd:amir)-------serilization------------------>(file: username:durga , pwd :null)
                                                                                                        |                                    
                                                                                                        |
                                                                                                       deserilization 
                                                                                                        |
                                                                                     a1---------->( username:durga , pwd :null)               
                                                                                                            
*/


//---------------------------------------------------------------------------------*******************--------------------------------------