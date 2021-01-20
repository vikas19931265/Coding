
package JavaSourceFileStructure;
/*

1. A java program can contain any number of classes. But at most one class can be declared as public.

2. If there is a public class. Then name of the program and name of the public class must be matched.
    Otherwise we will get compile time error.


*/

// Case1: If there is no public class then we can use any name and there are no restrictions.

class A
{
    
}


class B
{
    
    
}

class c{
    
    
}


//Case2: If class B1 is public then name of the program should be B1.java Otherwise we will get compile error 
       

class A1
{
    
}

/*
public class B1
{
   if class B1 is public then name of the file also should be B1 or else
    We will get the error:

        class B1 is public and should be declared in the file NewClass.java.

}



// Case 3: If class A2 and B2 declared as public and name of the program is B2.java then we will get compile time error. Two files in a program cannot be declared as public.

public class A2
{
    // Cannot declare two files public 
      
error:

class A2 is public should be declared in file B2.java

}

public class B2
{

}
*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------