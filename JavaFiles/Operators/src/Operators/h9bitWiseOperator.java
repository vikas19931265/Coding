package Operators;

/*

bitwise operators(&, |, ^ (exclusive or)
------------------------


& ---  AND---Returns if and only if both of the arguments are true.


|-----OR----Returns true if and only if at least one argument is true.


^----X-OR---Returns true if both the arguments are different.

*/
class bitwiseoperators {
    

public static void main(String[] args)
{
    
    System.out.println(true & false); // false-->AND will return true only if both the arguments are true
    
    System.out.println(true | false);// true--->OR will return true if any of the argument is true
    
    System.out.println(true ^ false);// true-->XOR will return true if one argument is true and one false, both should not be true
    
}

}

