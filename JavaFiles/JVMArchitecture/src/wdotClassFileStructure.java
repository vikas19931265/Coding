

/*

Class File Structure
===========================


classFile
{
    magic_number;
    minor_version;
    major_version;
    constant_pool_count;
    constant_pool[];
    access_flags;
    this_class;
    super_class;
    interface_count;
    interface[];
    fields_count;
    fields[];
    methods_count;
    methods[];
    attributes_count;
    attributes[];
}



magic_number
----------------------------


The first 4 bytes of a class file is the magic number. This is a predefined value
used by the JVM to identify .class file is generated by valid compiler or not.

The value should be 0XCAFEBABE.


note

Whenever we are executing a java class if JVM is unable to find the valid Magic Number
then we will get the RuntimeException saying java.lang.ClassFormatError:Incompatible
magic value


minor_version and major_version
--------------------------------------------

Major and minor versions represents .class file version. JVM will use these versions
to identify which version of the compiler generates the current .class file.


                M.m
                
                M---->major version
                m---->minor version
                
                
1.5v                        1.6v

49.0                        50.9


note

Lowers version compiler generated .class files can be run by the higher version of JVM.
But higher version compiler generated .class files cant be run by the lowwer version JVMs.
IF we are trying to run then we weill get ther un time exception saying "Unsupported ClassVersionError")



example


            javac 1.6---->valid java1.7v--->(legal)
            java 1.7   -------->java.1.6
            
            

Constant_pool_count
-----------------------------

It respresents number of constants present in constant pool.


constant_pool[];
-------------------------

    It represents information about the constants present inside the constant pool.

access_flags;
---------------------------
    
    It provides information about the modifiers which are declared to the class.
    
this_class
----------------------------

    It represents fully qualified name of the class.
    

super_class
-----------------------------

    It represents fully qualified name of the immediate super class of the current 
    class.
    
interface_count
------------------------------

    It returns number of interfaces implemented by the current class.
    
interface[]
---------------------------------

    It returns interfaces information implemented by the current class.
    
fields_count;
------------------------------------

    It returns number of fields present in current class.
    
    
fields[];
-----------------------------------

    It represents the field information present inside the current class.
    
methods_count;
-------------------------------------

    It represents number of methods present in the current class.
    
methods[];
-------------------------------------

    It provides information about all the methods present inside the current class.
    
    
attributes_count;
---------------------------------------

    It returns number of attributes present inside the current class
    
attributes[];
--------------------------------------------

    It provides information about all the attributes present inside the current class.
    
    
    
    
    javap  -verbose Test.class
    
        use this command to get information about the .class file.














    





*/
