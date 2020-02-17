/*

How to create executable jar files??
===============================================================================

JarDemo.java

Manfiest.mf
==============

        ------------------------
        | Main_Class:JArDemo  //compulsory enter
        |
        |


javac  JarDemo.java

It will generate 2 .class files, one is JarDemo.class and other one is JarDemo$1.class


jar  -cvfm  demo8.jar  manifest.mf  JarDemo.class   JarDemo$1.class

To run the jar file
====================

java -jar  demo8.jar



Even we can run jar file just by double clicking also.


import java.awt.*;
import java.awt.event.*;
public class JarDemo
{
    public static void main(String[] args)
    {
        Frame f = new Frame();
        f.addWindowListener(new WindowAdapter()
        {
            public void windowClosing(new WindowAdapter()
            {
                public void windowClosing(WindowEvent e)
                {
                    for(int i =1; i<=10 ; i++)
                    {
                        System.out.println("I am closing window"+i)
                        System.exit(0);
                    }
                });
            
        
        f.add(new Label("I can create Executable Jar File!!"));
        f.setSize(500,500);
        f.setVisible(true);
            
            
        }
    }
}
}

*/