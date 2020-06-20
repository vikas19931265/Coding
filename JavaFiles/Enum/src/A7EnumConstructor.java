/*

Constructor in Enum
==========================

An  enum can contain constructor. Enum constructor will be loaded for every enum
constant at the time of enum class loading automatically.


note

we cannot create enum object directly and hence we cannot invoke enum constructor
directly.

Example 

    Beer b = new Beer();
    
    this will result in the compile time error saying
    
    Compile error: enum type may not be instantiated.

*/



 enum Beer23
{
    KF,KO,RC,FO,SO;
    
    Beer23()
    {
        System.out.println("constructor");
    }
}

 class Test23
{
    public static void main(String[] args)
    {
        Beer23 b =Beer23.RC;
        /*
        Here in this case When we are trying to get Beer object Beer.class
        file will be loaded and since they are static variables object will
        be created during the time of the class loading. And while the object
        is getting created constructor will be called
        
        If we comment the line number 1 , then the output which is going to come
        is hello.
        
        */ 
        System.out.println("Hello");
    }
}

/*
run:
constructor
constructor
constructor
constructor
Hello
BUILD SUCCESSFUL (total time: 0 seconds)

*/