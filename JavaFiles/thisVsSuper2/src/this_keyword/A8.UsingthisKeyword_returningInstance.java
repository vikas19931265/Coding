
/*

returnig this
============================

Demo program showing how "this" keyword points to current object and how typecasting
can be be done when return type is "this" which can refer to any class Object.

*/



package this_keyword;

class Testing1

{
    int i=10;
    
    public Object thisKeyword()
            {
                return this; // return "current object" on which this method call is made.
                             // A method performs operations on the object which is calling it.
            }


    public static void main(String[] args)
    {
        Testing1 test1= new Testing1();
        
        Testing1 test2= new Testing1();
        
        Object obj1=test1.thisKeyword();
        
        Object obj2=test2.thisKeyword();
                
        System.out.println(((Testing1)(obj1))+"...."+((Testing1)(obj2)));
        
       //Prooving this keyword 
        
        System.out.println("object value during creation "+ test1); //test 1 reference value 
        
        System.out.println("Object value returned by this  "+ obj1);// test 1 value obtained by "this" return statement.
    }


}

/*
run:
Concepts.Testing1@5e3974....Concepts.Testing1@df503
object value during creation Concepts.Testing1@5e3974
Object value returned by this  Concepts.Testing1@5e3974
BUILD SUCCESSFUL (total time: 0 seconds)


*/