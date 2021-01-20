/*
1. If our class is final then it cannot be inherited.

2. If a class cannot be inherited then its method cannot be overridden.

3. Hence final clas methods are by default final only.


*/



final  class finalClassMethodsAreByDefaultFinal
{
    public void m1()
    {
        System.out.println("hai");
    }
}

/*

class Child extends finalClassMethodsAreByDefaultFinal
{
    // This is invalid as a final class cannot be inherited.
}

*/