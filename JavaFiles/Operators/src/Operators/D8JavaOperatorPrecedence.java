package Operators;

/*


java Operator precedence
===================================

1. Unary Operators

    [], x++,x--
    ++x,--x,~,!
    new, <type>


2. Arithmetic operators

    *,/.%----> this means that all these operators are at same level with same priority
               If multiple such operators are present in expression then evaluation will
               be done from left to right.
            
    +,-



3.Shift operators

>>. >>> , <<


4. Comparison operators:

    <. <=, >=, instanceof



5. equality operators:

    ==, !=

6.Bitwise operators

   &

   ^

    |

7. Short circuit operators

    &&

    ||

8. Conditional operator

    ?:

9. Assignment operators

    ==,+=, -=,*=....


 */

class Operators {

    public static void main(String[] args) {

      
        int a=  6/2*3;
        
            /*
        
                two operators are present one is divide and other is * , both are at same level or precedence
                hence they will be evaluated from left to right.
        
                  6/2 *3
        
                  3*3=9;
        
            
            there are two operators here one is * and one is /
            calcuation will be done from left to right hence first 3 will come in picture
            which will be muliplied with the result of (6/2) that is 3*3=9;
           
            
            
            
            */
            System.out.println(a);
        
            int b = 3*6/2;
            
           
            
             /*
        
                two operators are present one is divide and other is * , both are at same level or precedence
                hence they will be evaluated from left to right.
        
                 3* 6/2----here 3 is one operand and 6/2 is another operand , between them * is there.
            
                 =9  
        
            */
            
            
            System.out.println(b);
        
        
        
    }
}
