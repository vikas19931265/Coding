
package Regex;

/*

Pattern
======================

A pattern object is a compiled version of regular expression that is it is a java
equivalent object of pattern.


We can create a pattern object by using compile method of pattern class.


public static Pattern compile(String regex);

example: Pattern p = Pattern.compile("ab");



Matcher
==========================

We can use matcher object to check the given pattern in the target String.

We can create a matcher object by using matcher method of the pattern class.


public Matcher matcher(String target)

example: Matcher m = p.matcher("abbabbba");


Important methods of Matcher class
-----------------------------------

1. boolean find()

    It attempts to find , next match and returns true if it is available.
    
2. int start()

    It returns start index of the match.
    
3. int end()

    It returns **end +1 index of the match.
    
4. String group()

    It returns the matched pattern


Note
-----

Pattern and Matcher classes present inside java.util.regex package and introduced in 1.4 java version.



//======================================================================*******************************=================================================


*/
