/*

note

Bootstrap class loader is not a java object and hence we got null in the first case
but extension and application class loaders are java objects and hence we are getting
the corresponding output for the remaining two SOP.


        [classname@hashcodeInhex]

class loader subsystem will give the highest priority for bootstrap class path and 
then extension class path followed by application class path.


*/
class Test11
{
    public static void main(String[] args)
    {
        System.out.println(String.class.getClassLoader());
                /*
        Here for String.class, bootstrap class loader from Bootstrap
        classpath is repsonsible for load.
        
         BootStrapClass loader object is not of java type hence null.
        
                */
            
        
        System.out.println(Test.class.getClassLoader());
        
            /*
              Applciation class loader from application class path is responsible
        for its load. If the jar was stored in extension as well as application loader
        then priority is given to the extension loader.
        
            */
        
        System.out.println(Customer.class.getClassLoader());
        
            
           /*
              Application class loader from application class path is responsible
        for its load. If the jar was stored in extension as well as application loader
        then priority is given to the extension loader.
        
            */
        
        
    }
}


class Customer
{
    
}

/*
run:
null
sun.misc.Launcher$AppClassLoader@75b84c92
sun.misc.Launcher$AppClassLoader@75b84c92
BUILD SUCCESSFUL (total time: 0 seconds)

*/