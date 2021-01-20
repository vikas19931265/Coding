/*

Method overridding Program--Banking
====================================

*/
package cMethodOverriding;


class Bank
{
    public void details()
    {
        System.out.println("Normal Bank");
    }
            
    
}

class SBIBank extends Bank
{
     public void details()
    {
        System.out.println("SBI Bank");
    }
    
}

class CityBank extends Bank
{
    
     public void details()
    {
        System.out.println("City Bank");
    }
}

class Driver
{
    public static void main(String[] args)
    {
        
        Bank b = new SBIBank(); //Polymorphism---Dynamic--
        
        b.details();;
        
        b= new CityBank();
        
        b.details();
        
    }
    
}

/*
run:
SBI Bank
City Bank
BUILD SUCCESSFUL (total time: 0 seconds)

*/