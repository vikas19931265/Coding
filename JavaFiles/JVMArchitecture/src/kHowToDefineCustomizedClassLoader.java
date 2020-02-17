
/*

How to define customize class loader.
===============================================================================

note

While developing web servers and application servers usually we can go for the
customized class loaders to customize class loading mechanisms.




We can define our own customized class loader by extending java.lang.ClassLoader class


public class CustClassLoader extends ClassLoader
{
    
    public Class loadClass(String name) throws ClassNotFoundException
    {
        check for updates and load updated .class file and return corresponding
        Class
        
    }
    
    
    
}


class Client
{
    public static void main(String[] args)
    {
        Dog d1 = new Dog(); //loaded by default class loader
        CustClassLoader cl = new CustClassLoader();
                .
                .
        cl.loadClass("Dog");
                .
                .
        cl.loadClass("Dog"); //loaded by customized class loader        
        
    }
}





What is the need of classloader class??



We can use java.lang.ClassLoader class to define our own customized class loaders.
Every class loader in the java should be the child class of java.lang.ClassLoader
class either directly or indirectly hence this class acts as base class for all
the customized class loaders.



*/
