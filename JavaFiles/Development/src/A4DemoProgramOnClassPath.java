/*

C location program
=============================

package pack1.pack2;

public class Kareena
{
    public void m1()
    {
        System.out.println("Hello saif can u please set the hellotune");
    }
}





D location program
================================

package pack3.pack4;
import pack1.pack2.Kareena


public class Saif
{
    public void m2()
    {
        Kareena k = new Kareena();
        
        K.m1();
        
        System.out.println("Not possible because i am in SCJP class");
        
        
        
    }
}



E location program
===================================

import pack3.pack4.Saif;

public class Durga
{
    public static void main(String[] args)
    {
        
        Saif s = new Saif();
        
        s.m2();
        
        System.out.println("Hello kareena can i help you ");
        
    }
}




C:\> javac -d . Kareena.java (Valid) {corresponding .class file will be placed in pack1.pack2}

D:\> javac -d . Saif.java

Compile error: Cannot find symbol 
symbol: class Kareena
location: class pack3.pack4.Saif
Kareena k = new Kareena();
    
D:\> javac -d . -cp  C: Saif.java (Valid)

We are in D drive which contains Saif.java, if any class
path is needed then search in C:

E:\> javac Durga.java (Invalid)

    Compile error: Cannot find symbol
                    symbol: class Saif
                    location : class Durga
    
                   symbol : class Kareena
                   location : class pack3.pack4.Saif

E:\> javac -cp D: Durga.java(Valid)    { compiler checks only one one level of dependency hence this will compile fine but jvm checks for all}

E:\> java Durga

    RE: NoClassDefFoundError : pack3.pack4.Saif
    
E:\> java -cp .;D   Durga { wont compile as kareena is not specified}

    RE: NoClassDefFoundError : pack1.pack2.Kareena
    
    
E:\> java -cp .;D:;C:  Durga { wont get any error , as all level of dependency is given .(durga current directory)
                            then durga needs saif present in D drive and saif needs kareena which is present in the
                            C drive. Here durga required saif , and saif require kareena and hence the ordering
                            is important and all level of dependency must be present
                            
F:\>  java -cp E:;D:F: Durga



note

If any location is created due to the package statement then that location should be resolved
by using the import statement and base package location we have to update in the class path.


Compiler will check only one level of dependency whereas the JVM will check all the level of
the dependency


In the classpath the order of the locations is important and JVM will always consider 
from left to the right until the required match is available.


Example

        C:
        
        
        public class nagavali
        {
            public static void main(String[] args)
            {
                System.out.println("C nagavali");
            }
        }

         
        D:
        
        
        public class nagavali
        {
            public static void main(String[] args)
            {
                System.out.println("D nagavali");
            }
        }
        
        
        E:
        
        
        public class nagavali
        {
            public static void main(String[] args)
            {
                System.out.println("E nagavali");
            }
        }

    
    
    java -cp D:;C;E Nagavali
    
            o/p  D: Nagavali
            
    java -cp E:;D:; C: Nagavali
    
            o/p  E:Nagavali
    
*/