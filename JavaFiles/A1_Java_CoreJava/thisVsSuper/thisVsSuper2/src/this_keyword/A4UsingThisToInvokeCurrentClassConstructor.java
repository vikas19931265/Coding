
package this_keyword;

class Test6 {
    
Test6()
{
    
 System.out.println("check");

}


Test6(int i)
{
    this(); // Using this() method we are invoking the current class no argument constructor.
}
public static void main(String[] args)
{
    
    Test6 t= new Test6(10);
    
    
}


}

/*
run:
check
BUILD SUCCESSFUL (total time: 0 seconds)

*/
//------------------------------------------------------------------------------------------************************-------------------------