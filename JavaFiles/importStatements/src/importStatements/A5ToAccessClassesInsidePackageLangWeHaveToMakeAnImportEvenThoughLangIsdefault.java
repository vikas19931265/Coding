/*

1. Whenever we are importing a java package all classes and interfaces present in that package by default
   available but not sub package classes.

2. If we want to use sub package class . Compulsory we should import statement until subpackage level.

        java
            util
                regex
                    pattern

3. To use pattern class in our program , which import statement is required.

    1) import java.*;

    2) import java.util.*;

    3) import java.util.regex.*; ( This is required)

    4) No import required.


4. Similar to this , all the classes present in java.lang* package are by default available to the programmer
   but if we want to access any other package in the lang package then we have to make an import statement.

*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------