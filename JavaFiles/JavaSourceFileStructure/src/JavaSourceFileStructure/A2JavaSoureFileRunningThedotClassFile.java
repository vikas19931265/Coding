package JavaSourceFileStructure;

/*

1. In this program consider the name of the program is "Durga.java".

2. Now when we will compile this program, 4 .class files will be created that is sample1, sample2 , sample3 and sample4.

3. No .class file with the name Durga.java will be created which is name of the program.

4. If we compile the program

        javac Durga.java  ( this results in 4 .class files)

5. We can run the program now

        java Sample1.java;  java Sample2.java java Sample3.java   java Sample4.java
        
        Now this will run the program.

6. If we try to run the program with the name of the program 

           java Durga.java

    This will throw the error as to run the program we have to run with the respective .class file, like here in this case with java Sample.java.

error: No class found definition error.


7. If we run the program with the correct .class file name then that class main method will be executed.

8. If we do the same thing using the netBeans IDE then a dialog box will open which will list all the classes
   with the main method. From this list we can choose the respective class main method to execute and this will
   run that particular class main method.

9. If we choose the class which does not contain the main method then we will get the error.

Error: NoSuchMethod : main


                                 java Durga.java

      A.class       B.class            C.class                  D.class.


      4 .class generated as 4 .class are present in the program.


by durga
 
1. We can compile a java program( java source file) but we can run a java .class file only.

2. Whenever we are executing a java class, corresponding class main method will be executed.

3. If the class does not contain main method then we will get run time exception saying 

NoSuchmethoderror:main.

4. If the corresponding .class file is not available then we will get run time exception saying.

NoClassFoundDefError


5. Hence a java program can contain many main methods.
*/


class Sample1
{
    public static void main(String[] args)
    {
        System.out.println("Sample1");
    }
}


class Sample2
{
    public static void main(String[] args)
    {
        System.out.println("Sample2");
    }
    
}


class Sample3
{
    public static void main(String[] args)
    {
        System.out.println("Sample3");
    }
    
    
}

class Sample4
{
    
}

//-------------------------------------------------------------------------------------------******************---------------------------------------------