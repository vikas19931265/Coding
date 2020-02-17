package importStatements;
/*

1. There are two types of import statements. 

       Explicit class import.(eg. import java.util.ArrayList;)

       Implicit class import.(eg import java.util.*)

Explicit class import
====================================================

1. It is highly recommended to use Explicit class import because it improves readability of the code.

2. Explicitly class import is suitable for Hi-tech where readability of the code is important.

    
Implicit class import( eg import java.util.*)
===============================================================

 1. It is not recommended to use because it reduces readability of the code.

 2. Best suitable for Amarpreet where typing is important and has no role for readability of the code.



Which of the following are meaning java imports.

a) import java.util.ArrayList; ( this is fine as we are importing ArrayList class)

b) import java.util.Arraylist.*;( this is not meaningful as we are trying to import ArrayList.* , we do not contain any class inside ArrayList)

c) import java.util.*; ( This is valid as inside util package we are trying to import all interfaces and classes inside the util package)

d) import java.util ( this is not meaningful as we are not importing any class here.)

*/


// Consider the following code 

class Test4 extends java.util.ArrayList
{
    
    /*
        1. The code compiles fine even though we are not writing any import statement.
        
        2. This is because we used fully qualified name( java.util.ArrayList).
    
    
    [note]
    
        Whenever we are using fully qualified name it is not required to write import statement similarly
        Whenever we are writing import statement it is not required to use fully qualified name.
    
     */


}

//-------------------------------------------------------------------------------------------******************---------------------------------------------