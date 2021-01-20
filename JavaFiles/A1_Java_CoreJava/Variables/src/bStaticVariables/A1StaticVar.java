package bStaticVariables;

/*STATIC VARIABLES.(ONLY ONE COPY OF THE STATIC VARIABLE IS CREATED AND USED BY ALL)


1. If the value of the variable is not varied from object to object then, it is not recommended
   to declare variables as instance variables.

2. We have to declare such type of variables at class level by using static modifier.


(*)Basic difference between static and Instance Variables.

    In the case of instance variables for every object a separate copy will be created but in the 
    case of the static variables a single copy will be created at the class level and shared amongst
    every object of the class.


(*)Where to declare static variables???
    
    Static variables should be declared within the class directly but outside of any method or class or constructor or loop.
    similar to object variables.


(*)When static variables should be created and destroyed.

    Static variables are created at the time of class loading.
    Static variables will be destroyed at the time of class unloading.

    Hence scope of static variables is exactly scope of that class file.

   Eg. While executing Test.java.

        a) First JVM starts.
        b) JVM will create and start main Thread.
        c) Now main Thread does the rest of job.
        d) Main Thread looks for Test.class file , if not found then main exception.
        e) Loads Test.class.
        f) Execute main() method.
        g) Unload Test class.
        h) Terminate main Thread.
        i) Shutdown JVM

       At point e( Load Test.class) static variables will be created.
       At point g( unload Test class) static variables will be destroyed.


static variables will be stored inside method area ( heap memory) .
local variables are stored in stack area.

*/

