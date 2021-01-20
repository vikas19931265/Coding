/* Access modifier vs Access Specifer. 

public , private , protected, default are considered as access specifiers except these remaining are 
Considered as modifiers. But this rule is applicable to only the old languages like C++.

This concept is not applicable to java.

In java all are considered as access modifiers only. There is no word like specifiers.


Example.

        private class Test
        {
            public static void main(String[] args)
            {
                System.out.println("hai");  
            }
        }

If we do this then we will get the compile time error as "modifier private not allowed here"
    
*/


//-------------------------------------------------------------------------------------------******************---------------------------------------------