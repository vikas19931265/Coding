
package StaticBlock;

class Testing5 {
    
static Testing5 test= new Testing5(); // As soon as an object is created automatically constructor is called.

/*

1. Point to note here is that object created is static which means this object will be created 
   at the time of class loading and before execution of main method.

2. Hence as soon as the object is created constructor is called as well and control flows to the constructor block.

3. Now the constructor block statement executes which prints "hai" statement.

4. Point to note here is that if the object was not declared as static then no object will be created during class loading
   and program execution will start from the main method and inside the main method we are not writing any content hence
   wont get any output.


*/



Testing5()
{
    System.out.println("hai");
}

public static void main(String[] args)
{
    
}


} 

//-------------------------------------------------------------------------*********--------------------------------------------------------------