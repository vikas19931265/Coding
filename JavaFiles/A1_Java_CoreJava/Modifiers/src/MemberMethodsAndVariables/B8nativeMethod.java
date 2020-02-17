/*

native 
==================

1. native is the modifier applicable only to only methods and we cannot apply anywhere else.

2. The methods which are implemented in non java programming language ( mostly C or C++) are called as 
   native methods or foreign methods.

3. The main objectives of native keyword are as below

    i) To improve performance of the system.( most important when java code performance is poor and need to be replaced by native program)

    ii) To achieve machine level or memory level communication.

    iii) To use already existing legacy non java codes.

4. For native methods implementation is already available in old languages like C or C++ and we are not responsible to provide the implementation.
   Hence native method declaration should ends with semicolon.

    public native void m1(); this is valid

    public native void m1{} ; Compile error: native methods cannot have a body

pseduo code to use native keyword in java.


5. For native methods implementation is already available in the old languages. But for abstract methods implementation should not
   be available. Hence we cant declare native methods as abstract that is native-abstract combination is illegal combination for methods.


6. We cannot declare native methods as strictfp because there is no guarantee old languages follow IEEE 754 standard. Hence native-strictfp combination
  is illegal combination for methods.



7. The main advantage of the native keyword is that performance can be improved but the main disadvantage of the native keyword is that
   it breaks platform independent nature of java programming language. Example hashcode method is native method. When we call this method
   it gives different results in different systems as the code is written in language like C or C++ which are platform dependent languages.

*/
package MemberMethodsAndVariables;


 class Native
{
    static // static block loaded during the class loading
    {
        System.loadLibrary("native library name"); // Load native libraries.
                                                   // As soon as the class will be loaded , this block will get executed as static block execution occurs first.
    }

    public native void m1(); // Declared native method ending with semicolon as this method implementation will be available in some native language.
 
 }

class Client
{
    public static void main(String[] args)
    {
        Native n = new Native();
        n.m1(); // invoking a native method.
    }
}


//---------------------------------------------------------------------------------*******************--------------------------------------