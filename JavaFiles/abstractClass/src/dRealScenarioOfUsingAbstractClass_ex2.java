/*
Another example of abstract class in java

File: TestBank.java */

abstract class Bank
{    
    abstract int getRateOfInterest();    
}    

class SBI extends Bank
{    
    int getRateOfInterest(){return 7;}    
}    
class PNB extends Bank
{    
    int getRateOfInterest(){return 8;}    
}    
    
class TestBank
{    
    public static void main(String args[]){    
    
        Bank b;  // created a bank b varaible.
    
        b=new SBI();  // this variable can store SBI object as Bank is parent class
    
        System.out.println("Rate of Interest is: "+b.getRateOfInterest()+" %");    // SIB class calling getRateOfInterest method
    
        b=new PNB();  // polymorphism......b is now pointing to PNB object as PNB is also a child class of bank class.
    
        System.out.println("Rate of Interest is: "+b.getRateOfInterest()+" %");    
}

}    

/*
run:
Rate of Interest is: 7 %
Rate of Interest is: 8 %
BUILD SUCCESSFUL (total time: 0 seconds)


*/
