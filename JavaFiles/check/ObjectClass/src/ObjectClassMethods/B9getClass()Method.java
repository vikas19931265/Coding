/*

getClass() method
==============================

We can use getClass() method to get Runtime class definition of an object

signature of getClass() method
===================================

public final Class getClass();

By using this class Class object, we can access class level properties like fully qualified
name of the class, methods information , constructors information etc.



*/
package javalanggpackage;

import java.lang.reflect.*;

class Testing
{
    public static void main(String[] args)
    {
    int count=0;
        
        Object o = new String("Durga");
        
        Class c =o.getClass(); // We got Runtime class definition of the object o. In c of type Class 
                               // all the information pertaining to the run time class is stored.
        
                               
        System.out.println("Fully Qualified name of the class"+ c.getName());
        
        Method[] m = c.getDeclaredMethods();
        
        for(Method m1 : m)
        {
            count++;
            
            System.out.println(m1.getName());
            
        }
        
        System.out.println("Then number of methods are " + count );
    
    }
    
}


/*
run:
Fully Qualified name of the classjava.lang.String
equals
toString
hashCode
compareTo
compareTo
indexOf
indexOf
indexOf
indexOf
indexOf
indexOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
valueOf
checkBounds
length
isEmpty
charAt
codePointAt
codePointBefore
codePointCount
offsetByCodePoints
getChars
getChars
getBytes
getBytes
getBytes
getBytes
contentEquals
contentEquals
nonSyncContentEquals
equalsIgnoreCase
compareToIgnoreCase
regionMatches
regionMatches
startsWith
startsWith
endsWith
indexOfSupplementary
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOf
lastIndexOfSupplementary
substring
substring
subSequence
concat
replace
replace
matches
contains
replaceFirst
replaceAll
split
split
join
join
toLowerCase
toLowerCase
toUpperCase
toUpperCase
trim
toCharArray
format
format
copyValueOf
copyValueOf
intern
Then number of methods are 77
BUILD SUCCESSFUL (total time: 0 seconds)

*/
