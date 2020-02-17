// Explain about System.out.println

package importStatements;

/*

1.) Below program is our own version of program to demonstrate that how does
   the System.out.println method really works.

2.) In the below program

        Test. s. length()

    Test is a class name

    s is a static variable present in Test class of type java.lang.String

    and length is a method name which is present in the String class.

   This same concept applies in case of System.out.println as well.


3. System.out.println();

        class System
        {
           static PrintStream out;

        }

        class PrintStream
        {

            println();
        }

    Here System is the class name present in the java.lang package.

    out is the static variable present in system class class of type PrintSteram

    println() is a method present in the PrintStream class.


*/

class Test3

{   static String s="durga";

    public static void main(String[] args)

    {

        System.out.println(Test3.s.length()); // We can directly do s.length() also as we are inside the same class.
    }

    //This same logic here in this case is applicable to the System class as well.
  }

//-------------------------------------------------------------------------------------------******************---------------------------------------------
