/*

Classpath
=======================

Classpath describes the location where required .class files are available. Java 
compiler and JVM will use the classpath to locate required .class file.



By default JVM always search for class file in the current working directory for the
required .class file. If we set the classpath explicitly then the JVM will search in
our specified class path location and jvm will not search in the current working 
directory.


We can set the classpath in the following three ways 


1. By using Environment variable class path.

    This way of setting the class path is permanent and will be preserved across system
    restarts. Whenever we are installing a permanent software in our system then this approach
    is recommanded.


2. At command prompt level by using the SET command

    set classpath="c:\durga_classes"
    
    This way of setting the classpath will be preserved only for the particular command prompt.
    Once the command prompt closes  then automatically class path will be lost.



3. At the command level by using -cp option 

    Java -cp  C:\durga_classes Test
    
    This way of setting the classpath will be preserved only for this particular command. Once
    the command execution gets finished the classpath which we have set will also get lost.

    Amongst the three ways of setting the classpath. Setting classpath at command level is the
    recommended because dependent classes are varied from command to command.

    
note

 Once we set the classpath , we can run our program from any location.
 
 Once we set the classpath, JVM will not search in the current working directory and
 it will always search in the specified classpath location only
 
 
 
Example 1
=====================

    class Test
    {
        public static void main(String[] args)
        {
            
            System.out.println("Classpatth Demo");
            
        }
    }

 

C:\>durgaclasses> javac Test.java

C:\>durgaclasses> java Test
                o/p classpath demo
                
C:\> java Test
            RE: NOClassDefFoundError: Test

     Exception has occured here because .class file is not present in the path
            
C:\>java -cp C:\durgaclasses Test
             o/p classpath demo
             
D:\> java -cp C:\durgaclasses  Test
            o/p classpath demo

E:\> java -cp C:\durgaclasses  Test
            o/p classpath demo

C:\durgaclasses> java -cp E: Test
           RE: NoClassDefFoundError : Test

C:\durgaclasses> java -cp .; E: Test
            o/p classpath  demo
           
*/
            
            