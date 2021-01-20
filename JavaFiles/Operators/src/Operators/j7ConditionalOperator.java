package Operators;

/+ACo-

conditional operator(?:)
-----------------------------------------


The only possible ternary operator in java is conditional operator(?:)


 or a---+AD4- unary operator as we java only one operand

a-b---+AD4- binary operator as we have two operands

int x +AD0-(10+ADw-20) ? 30:40+ADs- ---+AD4- conditional or ternary operator as we have more then two operands



Syntax
--------------

int x +AD0-(10+ADw-20) ? 30:40+ADs-

System.out.println(x)+ADs-


We can peform nesting of conditional operator also


int x +AD0-(10+AD4-20) ?30 :((40+AD4-50)?60:70)+ADs-

System.out.println(x)+ADs-


+ACo-/

class TernaryOperator
+AHs-
    public static void main(String+AFsAXQ- args)
    +AHs-
        int x +AD0-(10+ADw-20) ? 30:40+ADs-

        System.out.println(x)+ADs-//30
        
        int y +AD0-(10+AD4-20) ?30 :((40+AD4-50)?60:70)+ADs-

        System.out.println(x)+ADs- //70
        
    +AH0-
+AH0-

