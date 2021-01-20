package eDeclaringClassesOrInterfacesInEachOtherRules;

/*

Conclusions.
------------------

1. Between classes and interfaces we can declare anything inside anything. This is possible


2. The interface which is declared inside the interface is always public and static whether we are declaring 
   it or not.


3. The class which is declared inside interface is always public and static whether we are declaring it or not.


4. The interface which is declared inside a class is always static but need not be public.


*/


class A1
{
    class B
    {
        
    }
}

//---------------

class A2
{
  static    interface B // by default interface inside the class is static.
          
    {
        
    }
}

//--------------------


interface A3
{
  public static  interface B // public static by default
    {
        
    }
}


//-------------------------


interface A4
{
 public static     class B
    {
        
    }
}

