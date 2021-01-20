/*

Relation between == operator and .equals() methods
-------------------------------------------------------------

1. If two objects are equal by == operator then these are always equal by .equal()
   method also.

    If r1===r2 is true then r1.equals(r2) is always true


    r1-----------------\
                        \
                          \ _ Object
                          /  
    r2-------------------


                            

2. If two objects are not equal by == operator then we cant conclude anything about 
   .equals() method. It may return true or false.


    if r1==r2 is false , then r1.equals(r2) may return true or false and we cannot expect
    exactly.


3. If two objects are equal by .equals() method then, we cant conclude anything about == operator.
   It may return true or false.


    If r.equals(r2) is true , then we cannot conclude anything about r1==r2;
    It may return true or false.



4. If two objects are not equal by .equals() method , then these objects are always
   not equal by == operator.

   If r1.equals(r2) is false, then r1==r2 is always false.


*/


