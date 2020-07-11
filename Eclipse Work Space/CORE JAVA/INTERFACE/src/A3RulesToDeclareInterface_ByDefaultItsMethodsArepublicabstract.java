/*

1. Whenever we are implementing an interface , for each and every method of that interface we have to provide the implementation.
   If we are not doing so then we have to declare the class as abstract then next level child class is responsible to provide
   the implementation.


2. Every interface method is always **public and abstract** whether we are declaring it or not  hence whenever we are implementing an interface
   method compulsory we should declare as public otherwise we will get the compile time error.

*/


interface Interf
{
  /*public-abstract*/  void m1(); // by default interface methods are  public and abstract, when overridden scope of modifier should not be reduced.
    void m2();
}


abstract class ServiceProvider implements Interf
{
 public  void m1()   // overriding m1() method in Interface, by default interface method is public 
                     // hence while overriding scope of modifier should not be reduced hence we declared it as public   
    {
        System.out.println("m1");
    }
/*
    Since we are not implementing all the methods of interface hence it is compulsory to declare the class as abstract.
 
*/
}


class SubServiceProvider extends ServiceProvider // This child class contains all implemented methods for the interface.
{
    public void m2()
    {
        System.out.println("m2");
    }
}

//---------------------------------------------------------------------------------*******************--------------------------------------