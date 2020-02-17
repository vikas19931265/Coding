/* static modifier
==================================

1. static is a modifier applicable for methods and variables but not for classes.

2. We cannot declare top level classes with static modifier but we can declare inner classes as static.

3. Such type of inner classes are called static nested classes.

4. In the case of the instance variables for every object a separate copy will be created but in the case of the 
   static variables a single copy will be created at the class level and shared by every object of the class.

5. We cannot access instance members directly from static area , but we can access instance member directly from
   instance area and also static members from instance area.

6. We can access static members from both instance and static area directly. 


Consider the following declarations.

    i int x=10;
   ii static int x=10;
   iii public void m1()
        { System.out.println(x);}
   iv  public static void m1(){ S.O.P(x);}    

 Within the clas which of the above declarations we can take simultaneously.

   a) i and iii(valid)
   b) i and iv(invalid) Compile Error- non static variable x cannot be referenced from static area.
   c) ii and iii(valid)
   d) ii and iv(valid)
   e) i and ii( Compile error- variable x is already defined in test)( we can take same variable x as local and instance or static)
   f)iii and iv( Compile error-- m1() is already defined in Test)( two method signatures cannot be same inside the same class) 




*/
package MemberMethodsAndVariables;


 class Test111
{
    static int x=10; // single copy of static variable will be created which can be changed by any object.
    int y=20;

    public static void main(String[] args)
    {
        Test111 t1= new Test111();
        t1.x=888;
        t1.y=999;
        
        Test111 t2= new Test111();
        System.out.println(t2.x+"....."+t2.y);
    }
 
 }
/*
o/p

run:
888.....20
BUILD SUCCESSFUL (total time: 1 second)

*/


//-------------------------------------------------------------------------------******************----------------------------------------------------