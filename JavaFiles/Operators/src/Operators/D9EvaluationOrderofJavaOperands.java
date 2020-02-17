package Operators;

/*

Evaluation order of java operands
=========================================================

In java we have only operator precedence but not operand precedence. Before applying 
any operator all operand will be evaluated from left to right


*/


class EvalutaionOrderDemo
{
    public static void main(String[] args)
    {
        
        System.out.println(m1(1)+ m1(2)*m1(3)/m1(4)+m1(5)*m1(6));
    }


    public static int m1(int i)
    {
        System.out.println(i);
        
        return i;
    }

}

/*
run:
1
2
3
4
5
6
32
BUILD SUCCESSFUL (total time: 0 seconds)

calculation
-----------

1+2*3/4+5*6;

1+6/4+5*6;

1+1+5*6;

1+1+30;

2+30

32

calculation is done from left to right if same operator is repeated

*/