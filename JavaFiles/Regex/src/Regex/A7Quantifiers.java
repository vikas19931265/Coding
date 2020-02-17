
package Regex;
/*

Quantifiers
================================================================================


We can use quantifiers to specify number of occurrences to match


Pattern p = Pattern.compile("x");
Matcher m = p.matcher("abaabaaa");

while(m.find())
{
    System.out.println(m.start()+"...."+m.group());
}


a---> exactly one a
a+---> at least one a or more then one a in group.
a*---->any number of a including zero number

a?----->Atmost one a ( meaning one a or zero number of a)



x=a
--------

0---a
2---a
3----a
5----a
6----a
7----a

x=a+----> 1 a or more then a in one group(at least one a)
-----------------------------------------------------------
0-----a
2-----aa
5-----aaa

x=a*
------------
0------>a
1------>
2------>aa
4------
5------->aaa
8-------
9-------(very important)(after b is nothing, and nothing means 0 number hence in regex n+1 index can be touched.)


x=a?
---------------

0----->a
1------
2----a
3----a
4------
5-----a
6-----a
7-----a
8-----a

after b is nothing, and nothing means 0 number hence in regex n+1 index can be touched.

9----->

*/

//======================================================================*******************************=================================================