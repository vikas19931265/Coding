
package Regex;

/*
Character symbol classes
=============================

[abc]----> Either a or b or c

[^abc]----> Except a and b and c

[a-z]------>Any lower case alphabet symbol from a to z

[A-Z]------>Any upper case aphabet symbol from A to Z

[a-zA-Z]---->Any alphabet symbol.

[0-9]----> Any digit from 0 to 9

[0-9a-zA-Z]-----> Any alphanumeric symbol.

[^0-9a-zA-Z]-----> except alphanumeric symbol that is special symbols.


    
    
    Pattern p = Pattern.compile("x");
    Matcher m =p.matcher("a3b#k@9z");
    while(f.find())
    {
        System.out.println(m.start()+ "...."+ m.group());
        
        
    }


x=[abc]
--------

0---->a
2---->b


x=[^abc]
------------

1---->3
3----->#
4----->k
5----->@
6----->9
7----->z

x=[a-z]
----------
0----->a
2----->b
4----->k
7----->z


x=[0-9]
---------

1----->3
6----->9



x=[z-zA-Z0-9]
-------------------

0------>a
1------>3
2------>b
4----->k
6----->9
7------>z


x=[z-zA-Z0-9]
------------------

3------>#
5------->@

*/

//======================================================================*******************************=================================================