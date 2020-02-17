/* Method Overriding.    
===========================


1.  Whatever methods parent has, by default available to the child through inheritance.

2. If child class not satisfied with the parent class implementation than child is allowed to redefine
    the method based on the requirement.

3. This process is called overriding.

4. The parent class method, which is overridden is called overridden method and the child class method
    which is overriding is called overriding method.


*/



package cMethodOverriding;


 class OverridingConcept {
    
    public static void main(String args[])
    {
        
        Parent p= new Parent();
        p.marry();// parent method is executed.
   
     /*
        1. Here a parent reference is created and it is pointing to the parent object only.
        2. Hence parent object method is going to get executed.
        
        */  
        
        
        Child c= new Child();
        c.marry(); // child method is executed.
        
     /*
        
        1. Here a child reference is created and it is pointing to the child object only.
        2. Hence child object is going to get executed.
        
        */  
          
        
        
        Parent p1= new Child();
        p1.marry(); // child method is executed.
    /*
        1. This is a very interesting scenario.
        2. Here if we see parent reference is holding the child object.
        3. When we write p1.marry() this time compiler just checks whether we have a marry  method in parent class.
        4. It does not check which marry method is to be executed.
        5. Now at the run time, JVM comes into the action and checks the current object and finds that it is of child which is overriding parent method.
        6. Then it goes to the child class and checks if the marry method is overridden in it or not.
        7. If the method is overridden then the child, marry method gets executed else parents method.
        8. Since which class method to call has been decided at the run time by the jvm hence this is also called as dynamic polymorphism or late binding.
        
 [note by durga]
        
        1. In overriding, method resolution is always taken care by JVM based on run time object.
        2. Hence overriding is also considered as run time polymorphism, dynamic polymorphism or late binding.
        3. Until run time we don’t know which method is going to get executed.
        4. But in overloading it is taken care by reference.
        */
    
    }



}




class Parent
{

    public void property()

    {
                System.out.println( "land/gold/money");

    }

    public void marry()
    {

                System.out.println(" subbu lakshmi");
    }


}   
 class Child extends Parent

 {

        @Override
        public void marry()

    {

            System.out.println("nayan/charmi");

    }

}



//------------------------------------------------------------------*******************------------------------------------------------------------