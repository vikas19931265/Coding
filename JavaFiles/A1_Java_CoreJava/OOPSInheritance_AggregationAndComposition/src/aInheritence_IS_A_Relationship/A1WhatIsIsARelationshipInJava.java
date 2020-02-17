package aInheritence_IS_A_Relationship;

/*

IS-A Relationship(Inheritance)
======================================

1. It is also known as Inheritance.

2. By using "extends" keyword we can implement IS-A relationship.

3. The main advantage of IS-A relationship is reusability of the code.



*/


    class Parent
    {
        public void methodOne()
        {
        
        }
    }

   
    
    class Child extends Parent
    {

        public void methodTwo()
        {

        }
    }    
    

    class Test
    {
        public static void main(String[] args)
        {
            Parent p = new Parent();
            
            p.methodOne(); // Valid
            
            p.methodTwo(); // CE: cannot find symbol, symbol: methodTwo(), location: class Parent.
        
            Child c = new Child();
            
            c.methodOne();
            
            c.methodTwo();
            
            Parent p1 = new Child();
            
            p1.methodOne();
            
            p1.methodTwo(); // CE: cannot find symbol, symbol: methodTwo(), location: class Parent.
            
            Child c1= new Parent(); // CE: incompatible types, found parent, required child.
                                    // and child reference cannot be used to hold the parent object.
        
        }
    }


/*

Conclusion
================

1. Whatever the parent has by default available to the child but whatever child
   has by default is not available to the parent. Hence on the child reference 
   we can call both parent and the child class methods. But on parent reference
   we can call methods available in the parent class only and we cannot call child
   specific methods.

2. Parent class reference can be used to hold child objects but by using that reference
   we can call only methods which are present inside the parent class and the child
   specific methods we cannot call.

3. Child class reference cannot be used to hold the parent class object.



*/