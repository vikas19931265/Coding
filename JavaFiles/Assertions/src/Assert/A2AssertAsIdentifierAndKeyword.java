package Assert;

/*
Assert as the keyword and identifier
===========================================================

assert keyword introduced in java 1.4 version and hence from 1.4 version onwards we 
cant use assert as the identifier otherwise we will get the compile time error.


javac Test.java

CE:

java -source 1.3 Test.java

Here the code will compile fine but with the warning.

java Test

o/p: 10


Which of them is valid??

javac -source 1.2 Test.java  valid

javac -source 1.3 Test.java  valid

javac -source 1.4 Test.java  invalid

javac -source 1.5 Test.java  invalid


Note
============

If we are using assert as identifier and if we are trying to compile according to the 
old version(1.3 or lower) then the code is going to compile fine but with warning
message


we can compile a java program according to a particular version by using -source option.




*/



 class Tests
{
    public static void main(String[] args)
    {
        int assert =10;
        System.out.println(assert);
    }
}

/*
Error

$javac Test.java
Test.java:16: error: as of release 1.4, 'assert' is a keyword, and may not be used as an identifier
        int assert =10;
            ^
  (use -source 1.3 or lower to use 'assert' as an identifier)
Test.java:17: error: as of release 1.4, 'assert' is a keyword, and may not be used as an identifier
        System.out.pirntln(assert);
                           ^
  (use -source 1.3 or lower to use 'assert' as an identifier)
2 errors

*/
