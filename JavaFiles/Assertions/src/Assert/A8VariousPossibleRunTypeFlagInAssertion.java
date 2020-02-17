/*
various possible run time flags
==================================================


-ea | enableassertions
    
        To enable the assertions in every non system class(our own classes).

-da | disableassertions

        To disable the asertions in every non system class.
        
-esa | -enablesystemassertions

        To enable assertions in every system class(predefined classes).
        
-dsa | -disablesystemassertions

        To disable assertions in every system class.(predefined class)
        


note
==========

We can use above flags simultaneously then ,JVM will consider these flags from left
to the right.

Example

java -ea -esa -ea -dsa -da -esa -ea -dsa Test

Non System          System

tick                tick
tick                cross
cross               tick
tick                cross-----> at last non system enable and system disabled.

So at the end assertions will be enabled in every non system class and disabled
in every system class.



*/
