//AUTOMATIC PROMOTION OVERLOADING CASE 4(with inheritance)                                                                                                      

/*

1. There is a very important thing to note about the method overloading.
2. method assignment on a reference is always a compile time job.
3. AND THE OVERLOADED METHOD RESIDES IN THE SAME CLASS.


*/



package bMethodOverloading;

 class AutomaticPromotionOverloading_CASE5_inheritance {
    
    public void m1( Animal a) // m1 method which accepts animal reference
    {
        System.out.println(" animal version");
    }
    
    
    public void m1( Monkey m) // overloaded m1 method which accepts monkey reference.
    {
        
        System.out.println(" monkey version");
    }
    
    public static void main( String args[])
    {
        
       
       AutomaticPromotionOverloading_CASE5_inheritance test= new AutomaticPromotionOverloading_CASE5_inheritance (); // object of main test class
       Animal a = new Animal(); // created an object of animal
       test.m1(a); /*
       using the reference of test class we call one of its methods m1 which accepts animal and monkey references
       Here since a is of type Animal, hence forth method accepting animal will be called.
                    */
       
       Monkey m= new Monkey(); // this is similar to the above scenario.
       test.m1(m);
       Animal am= new Monkey();
       test.m1(am);
       /*
       1. This is an interesting scenario.
       2. Here animal reference is created but it is pointing to monkey object.
       3. Now if we try to call m1 method and pass animal reference type, then m1 method accepting animal reference will be called.
       4. Hence am is of type animal and it does not matter which kind of object it points to in case of overloading it will call the animal reference method.
       
       */
   }



}


class Animal{
    
    // This is class animal and this class is extended by the class monkey.
    
}


class Monkey extends Animal
{
    
    
    

}
   

//-----------------------------------------------------------------------------*********-------------------------------------------------------------