/*

Objects created inside a method
=====================================

The objects which are created inside a method are by default eligible for the garbage
collection once the method completes.


    example
    
            class Test
            {
                public static void main(String[] args)
                {
                    m1(); //Here with this line two objects are eligible for the gc.
                            as scope of local variable is with the call and end of the 
                            method.
                }
            
                
                public static void m1()
                {
                    Student s1= new Student();
                    Student s2= new Student();
                }
                
                
                
            }



    example 2:
        
            class Test
            {
                public static void main(String[] args)
                {
                    Student s1=m1();
                    
                }
            }

            public static Student m1()
            {
                Student s1= new Student();
                Student s2= new Student();
                return s1;
            }

    Here in this example s1 object is given new reference variable hence s1 is not eligible
    for garbage collection but s2 is eligible for the garbage collection.
    
    In this example we have held the object by a reference so only s1 is not eligible for garbage
    collection.


example 3:

        class Test
        {
            public static void main(String[] args)
            {
                m1();
            }
        
            
            public static Student m1()
            {
                Student s1= new Student();
                Student s2= new Student();
                return s1;
            }
            
            
            
        }


    Here in this case both the objects are eligible for the garbage collection as we are 
    returning s1 but we do not have any reference in order to hold the object and hence 
    the object will get eligible for the garbage collection.


    Here two objects are eligible for the garbage collection.
	

example 4:

        class Test
        {
            static Student s;
            public static void main(String[] args)
            {
                m1();
            }
        
            
            public static void m1()
            {
                s=new Student(); //not eligible for gc
                Student s1= new Student();
            }
            
        }
        
        
        Here in this approach only one object that is s1 is eligible for the garbage 
        collection. Object s1 is not eligible as s is static variable and the object
        will still exits even when the method execution finished.



*/



