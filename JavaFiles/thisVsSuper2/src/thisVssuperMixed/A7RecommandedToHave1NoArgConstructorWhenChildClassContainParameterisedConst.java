/*

1. It is recommended to at least have one no argument constructor in the parent class when we have non
   parametrized constructor in the child class.


*/
package thisVssuperMixed;


 class Parent1
{
   static  int i=100;
    
   Parent1()
   {
       // No Argument constructor recommended when child class contains parameterized constructors.
   }
   
    Parent1(int i)
    {
        
    }
}

class Child1 extends Parent
{    /*
     Child1(int j)
     {
           
         
           1. This is invalid here because we created a parametrized child constructor which has super()
               code given by the compiler.
         
           2. Now here super() is no argument constructor calling the no argument constructor in the parent class.
         
           3. Since no such constructor is available in the parent class we get the error.
         
           4. Hence we should be careful in such scenario and it is recommended to have at least on no argument
              Constructor in the parent class.
         
         
      }

      */
    
    


}
