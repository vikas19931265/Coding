
package Packages;

/*
    package com.durgasoft.scjp

    public class Test
    {
           public static void main(String[] args)

            {

                System.out.println("pkg demo");
                
            }
    }      


javac test.java

    generated .class file will be placed in the current working directory.

                currentWorkingDirectory
                        test.class

Javac -d. Test.java

   -d  ---> destination to place generated .class file.
    
    .( dot)----> current working directory.


    generated .class file will be placed in corresponding package structure.

                    cwd (C drive)( current working directory){C:\Users\VIKAS GAUTAM}
                        com
                            durgaSoft
                                scjp
                                    Test.class ( This is where the the file will get stored.)
                               



Variations 1.

1. If the corresponding package structure not already avaiable(com.durgasoft.scjp). Then this command
    (Javac -d. Test.java) will create the  corresponding package structure.



Variation 2

1. Javac -d  F:  Test.java  { changed current working directory  from C to F)

            Instead of .(dot) we can take any working directory. This will cause the corresponding
            package structure to be created in the C drive



    As destination instead of .(dot) we can take any valid directory name.         

         (F drive)
                     com
                            durgaSoft
                                scjp
                                    Test.class ( This is where the the file will get stored.)



  If the specified directory not already available then we will get compile time error

        example

                javac -d Z: Test.java ( This will lead to compile time error as Z drive is not available)

  If the Z: drive is not available then we will get compile time error saying

                directory not found : Z:


  At the time of execution we have to use full qualified name to run the particular .class file

                java com.durgasoft.scjp.Test





Conclusion1
=================================

   We can take only one or 0 package statement inside a class. If we are writing more then
   1 package statement inside the class then we will immediately get the compile time error.

    example

        package pack1;
        package pack2;

            Class Test
            {
                }
        
  If we do this that is writing more than one package statement inside the class then we are
   Immediately going to get the compile time error;

    compile error: class , interface or enum is expected.
                

Conclusion 2:
=======================================

    The first line in java program other than a non-commented line should be the package statement.
    If we are writing an import statement or any other statement as the first line in the java program
    then immediately we will get the compile time error.

    example

            import java.util.*;
            package pack1;
            public class
                {

                }

           compile error: class ,interface or enum expected.

            
            */
 class NewClass2
{
    
}

//-------------------------------------------------------------------------------------------******************---------------------------------------------