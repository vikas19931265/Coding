/*

By default super()( constructor)  call is made inside every constructor of the child class.
Hence if we are writing it or not does not matter , this will be added implicitly
by the compiler.

/**/


package superKeyword;


 class Person2 {
    
     Person2()
     {
         System.out.println("hai");
     }
 
 
 }

class Emp extends Person2
{
    Emp(int i)
    {
        super(); //this call is made by default we do not need to implicitly write this line
    }
    
    public static void main(String[] args)
    {
        new Emp(10);
    }


}


/*
run:
hai
BUILD SUCCESSFUL (total time: 0 seconds)

*/