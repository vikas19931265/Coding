package dStaticNestedClasses;

/*

static Nested classes
---------------------------


1. Sometimes we can declare inner class with the static modifier. Such type of inner classes are called as static nested 
   classes.


2. In the case of the normal or regular inner class, without existing outer class object there is no chance of 
   existing inner class object. That is inner class object is strongly associated with the outer class object.

3. But in the case of static nested classes, without existing outer class object there may be a chance of existing nested
   class object hence static nested class object is not strongly associated with outer class object.



If you want to create nested class object from outside of the outer class then we can creates as follows

      Outer.Nested n = new Outer.Nested();
*/


class Out
{
    static class Nested
    {
        public void m1()
        {
            System.out.println("Static Nested class method");
        }
    }


    public static void main(String[] args)
    {
        Nested n = new Nested(); // To access static nested class method , we do not need to create outer class object.
        
        n.m1();
    }


}



class Outside   // Accessing static nested class from outside.
{
    public static void main(String[] args)
    {
        Out.Nested n = new Out.Nested();
        n.m1();
    }
}
/*
run:
Static Nested class method
BUILD SUCCESSFUL (total time: 0 seconds)

*/
