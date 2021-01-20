package eDeclaringClassesOrInterfacesInEachOtherRules;

/*

CASE 2: interface inside class
-----------------------

Inside a class if we require multiple implementations of an interface and all these implementations are 
related to a particular class/interface , then we can define interface inside a class..



1. Here in this program i have class called "VehicleTypes". For this class i am going
   to have many more sub classes like bus,auto which will be inner to it.
   
2. But all these classes are going to have a similar property that is going to be 
   of wheels.	
   
3. Hence we can create an interface inside the Vehicle type class which is going to be
   inner interface.
   
4. Further i will give the implementation for Vehicle via Bus, Auto.

 
*/



class VehicleTypes
{
    
    interface Vehicle         
    {
        public int getNoOfWheels();
    }


    class Bus implements Vehicle
    {
        public int getNoOfWheels()
        {
            return 6;
        }
    }
    
    class Auto implements Vehicle
    {
        public int getNoOfWheels()
        {
            return 3;
        }
    }



}

class Demo6
{
    
    public static void main(String[] args)
    {
        VehicleTypes v = new VehicleTypes();
        
        VehicleTypes.Bus bus = v.new Bus();
        
        System.out.println(bus.getNoOfWheels());
    }
}

/*
run:
6
BUILD SUCCESSFUL (total time: 0 seconds)

*/
