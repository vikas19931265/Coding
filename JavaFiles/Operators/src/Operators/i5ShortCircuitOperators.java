package Operators;

/*

Short- circuit operators(&& , !!)
-------------------------------------

1. These are exactly same as bitwise operators (&,|) except the following differences


    &,|                                                    &&,||                                              


1. Both of the arguments should be              1. Second argument evaluation is optional
   evaluated always


2. Relatively performance is low                 2, Relatively performance is high.


****
3. Applicable for both boolean and              3. Applicable only for boolean but    
   integral types.                                 not for integral types. 


note
--------------

x&&y---> y will be evaluated if and only if x is true that is if x is false then
         y will not be evaluated.


x||y----> y will be evaluated if and only if x is false that is if x is true then
          y will not be evaluated.

*/
public class NewClass23 {
    
}

