/*

p.getClass().getName() 
=====================================

    This will give us implementation class. If we are using parent reference 
or interface reference to hold the child object then this command will provide
us the class name for which the object actually belongs to.

*/



package b1_ArrayListBasicsANDConstructors;



class Parent
{
    
    public void status()
    {
        System.out.println("I am parent");
    }
}

class Child extends Parent
{
   static  Parent p= new Child();
    
   public void status()
   {
       System.out.println("I am Child");
   }
   
   public static void main(String[] args)
    {
        System.out.println(p.getClass().getName()); //Here parent reference was holding the child object. When we called this
                                                    // method it gave us implementation class name/object to which the parent/interface reference was pointing to
        
        p.status();
        
    
    }
}

//----------------------------------------------------------------------*******************-------------------------------------------