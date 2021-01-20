/*

 class loading hierarchy.
======================================

        BootStrap class loader-----searches in---->BootStrap class path: jdk\jre\lib

        Extension class loader-----searches in---->extension class path: jdk\jre\lib\ext

        Application class loader-----searches in----> environment variable class path


The class loader follows delegation hierarchy principal. Whenever JVM is going to come
across a particular class first it will check whether the correspoinding .class file
is already loaded or not. If it is already loaded in the method area then JVM will
consider that loaded class.

But if it is not loaded then JVM will request class loader subsystem to load that 
particular class. Then the class loader subsystem will handover the request to
Application class loader.

Application class loader will delgate the request to extension class loader which in
turn delegates the request to bootstrap class loader.

Then the bootstrap class loader will search in Bootstrap classpath , if it is available
then the corresponding .class will be loaded by the bootstrap class loader. But if it
is not available then bootstrap class loader delegates the request to extension class
loader.

Extension class loader will search in Extension class path. If it is available then it 
will be loaded otherwise extension class loader will delegate the request to applicaton
class loader. Application class loader will search in application class path, if it is
available then it will be loaded otherwise we will get the run time exception saying
NoClassDefFoundError or ClassNotFoundException.


Highest priority will always go to the BootStrap class loader.


*/
