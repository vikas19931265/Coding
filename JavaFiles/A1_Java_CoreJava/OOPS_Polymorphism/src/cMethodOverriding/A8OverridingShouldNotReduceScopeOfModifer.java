
// Method Overriding should not reduce scope of the modifier.


/*

1. While Overriding we cannot reduce scope of access modifier.

2. But we can increase the scope.



private <  default  <  protected <  public


1. If parent class method is public then child class method should be public.

2. If parent class method is protected then child class method can be protected or public.

3. If parent class method is default, then child class method can be protected or public.

4. And private class methods cannot be overridden.




*/

package cMethodOverriding;


 class P1
{
    
    public void m1()
    {
        
    }
}

/*
class C1 extends P1
{
    void m1()    // default modifier which is lesser in scope then public.
    {
        
    }
}


CE: m1() in c1 cannot override m1() in p
  attempting to assign weaker access privileges was public.

*/

//-----------------------------------------------------------------------------*********-------------------------------------------------------------