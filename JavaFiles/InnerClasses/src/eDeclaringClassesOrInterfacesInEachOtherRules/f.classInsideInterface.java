package eDeclaringClassesOrInterfacesInEachOtherRules;

/*

Class inside interface
==============================

We can also define a class inside an interface to provide default implementation for that interface


In the below example , default Vehicle is the default implementation of Vehicle interface , whereas 
Bus is customized implementation of Vehicle interface.


note
-----------

The class which is declared inside the interface is always public static whether we are declaring it 
or not hence we can create class object directly without having outer interface type object



*/



interface Vehicle
{
    public int getNoOfWheels();
    
    class DefaultVehicle implements Vehicle// this is public static whether we declare or not
                                         // By doing this we have given default implementation for no of wheels
                                         // If some class need to change it, it can. Note that members of interface are
                                        // by default public-static in nature.
                            
    {
        public int getNoOfWheels()
        {
            return 2;
        }
    }
}


class Bus implements Vehicle
{
    public int getNoOfWheels()
    {
        return 6;
    }
}

class Test40

{
    public static void main(String[] args)
    {
        Vehicle.DefaultVehicle d = new Vehicle.DefaultVehicle();// We are able to create the object of inner class without outer class because
                                                               // inside interface all its members are public static. And there may be chance of 
                                                               // inner class object to exist without the outer class.
        
        System.out.println(d.getNoOfWheels());
        
        Bus b = new Bus();
        
        System.out.println(b.getNoOfWheels());
    }
}

/*
run:
2
6
BUILD SUCCESSFUL (total time: 0 seconds)

*/
