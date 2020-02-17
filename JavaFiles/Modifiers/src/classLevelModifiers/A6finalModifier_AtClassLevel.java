/* final classes.
=======================

If a class is declared as final class we can’t extend functionality of that particular class that is we
can’t create child class for that class.

That is inheritance is not possible for final classes.


final class methods are by default final but not variables.

Every method present in the final class is always final by default. But every variable present in the final class
need not be final.

[note]

The main advantage of the final keyword is we can achieve security and we can provide unique implementation.
But the main disadvantage of the final keyword is will miss key benefits of oops features like

inheritance ( because of final classes).
polymorphism ( because of final method).


Hence if there is no specific requirement then it is not recommended to use final keyword.


*/
package classLevelModifiers;

final  class Parent
{
    
}

/*
class Child extends Parent
{
    
}

This will give us error "Cannot inherit from final P"

*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------
