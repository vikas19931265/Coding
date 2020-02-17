package cMethodOverriding;

/*
1. Consider the following methods in parent class
===========================================================


        public void m1( int x) throws IOException


In the child class which of the following methods we can take.


1)   public void m1(int i)

        This is legal statement, same method signature
        concept is of method overriding.


2) public static int m1( long i)

        This is legal statement , same method name with different argument
        hence this will result into method overloading.


3)public static void m1( int i)

    This is illegal as we are trying override a non-static method into 
    a static method.



4) public void m1( int i) throws Exception

    this is illegal as child class throws Exception hence parent class must 
    throw the same exception or the parent of the exception thrown by the child 
    class, hence this is also invalid.



5) public static abstract void m1( double d)

    this is invalid as static and abstract cannot be applied simultaneously. This is because
    static methods must be having some implementation.


*/

//--------------------------------------------------------------------------*********-------------------------------------------------------------

