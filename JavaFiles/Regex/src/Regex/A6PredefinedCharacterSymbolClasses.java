
package Regex;

/*
Predeined Character symbol classes
======================================================================

\s----> space character
\S----->except space character
\d----->Any digit from 0 to 9
\D----->Except digit, any character
\w----->any word character [0-da-zA-Z]
\W----> except word any character(special character)
.------> Any character

Pattern p = Pattern.compile("x");
Matcher m = p.matcher("a76  k@9z");

while(m.find())
{
    System.out.println(m.start()+"...."+m.group());
}


x=\\s---> we have to put one more backslash to treat it as backslash or else treated as escape
---------------
    
3----

x=\\S
------------------

0--->a
1---->7
2---->6
4---->k
5----->@
6------>9
7------>z


x=\\d
--------------

1------>7
6------>9

x=\\D
-------------

0---->a
2---->b
3-----space
4---->k
5----->@
7----->z


x=\\w
------------
0----->a
1----->7
2----->b
4----->k
6----->9
7----->z


x=\\W
---------
3----->space
5----->e


x=.
===========
0--->a
1--->7
2---->b
3----
4---->k
5---->@
6---->9
7---->z



//======================================================================*******************************=================================================


*/