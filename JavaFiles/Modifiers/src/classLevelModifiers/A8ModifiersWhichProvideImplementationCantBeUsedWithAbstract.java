/*

Abstract methods never talks about implementation. If any modifier talks about implementation then it forms
illegal combination with abstract modifier.

    The following are various illegal combination of modifiers for methods with respect to abstract.

modifiers which talk about implementation.

final
native
synchronized
static
private
strictfp

illegal combination

abstract final
abstract native
abstract synchronized
abstract static
abstract private
abstract strictfp

*/
package classLevelModifiers;


 abstract class Test
{
   /*   
  abstract final void m1();  

   This will give us the compile time error
     
   illegal combination of modifier abstract and final.  
     
     */

}

//-----------------------------------------------------------------------------------------*******************--------------------------------------