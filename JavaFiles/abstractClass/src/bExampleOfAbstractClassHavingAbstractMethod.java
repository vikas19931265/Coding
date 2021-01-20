/*
Example of abstract class that has abstract method


In this example, Bike the abstract class that contains only one abstract method run. 
It implementation is provided by the Honda class.

*/



abstract class Bike{   // abstract class
  
    abstract void run();  // abstract method

}  

class Honda4 extends Bike{  

    void run() // providing implementation for run method of parent class by overridding.
    {
        System.out.println("running safely..");
    
    }  

    public static void main(String args[]){  
    
        Bike obj = new Honda4();  
        obj.run();  
}  
}  

/*
run:
running safely..
BUILD SUCCESSFUL (total time: 0 seconds)
*/
