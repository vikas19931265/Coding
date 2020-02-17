
//Normal and Static import.

/*

Normal Import.

    Explicit import

        Syntax -->import packagename.classname;   Here we are importing only the needed class

        Example--->java.util.ArrayList;


    Implicit import.
    
          Syntax---->import packagename.*         Here we are importing all the classes inside the package.  
          
          Example----->import java.lang.*         Using this we are importing all the classes of the lang package




Static import.

        

    Explicit import

        Syntax -->import static packagename.classname.staticMember;   Here we are importing only the needed static variables or methods

        Example---> import static java.lang.Math.sqrt;
                    import static java.lang.System.out;


    Implicit import.
    
          Syntax---->import static packagename.classname.*         Here we are importing all the static members inside the class  
          
          Example----->import static java.lang.Math.*         Using this we are importing all static members inside the class meth and system.
                       import static java.lang.System.*;
                        



which of the following import statements are valid and which are invalid.

a) import java.lang.Math.*; ( invalid)

        This is invalid as class name if the final break point. And we cannot move ahead that
        Math.*--> This is invalid as we cannot access the static members using this normal import.



b) import static java.lang.Math.*; (valid)

        This is valid as its a normal static import where we trying to import all the static members inside the Math class.


c) import java.lang.Math.sqrt (invalid)

        This is invalid as its a normal import and we cannot access the static members using this.


d) import static java.lang.Math.sqrt() (invalid)

      This is invaid as syntax is wrong, we cannot use sqrt() instead it should be only sqrt to access the sqrt method.



e)import java.lang.Math.sqrt.*; (invalid)

        This is invalid as we cannot access the sqrt static member using the normal import


f) import static java.lang.Math.sqrt; (valid)
    
         This is a valid static import statement.

g) import java.lang; (invalid)

        This is invalid ...This is a normal import statement...Here we have to import classes inside the package but here we are just importing the package.


h) import java.lang.*; (valid) ( this is not needed though is this import is available by default)

    This is valid as we are importing all the classes inside the lang package.


i) import static java.lang.*; (invalid)

    This is invalid as we need to specify the class whose static members we need to import.


j) import static java.lang;(invalid)

        This is invalid as we have to specify the class name.
*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------