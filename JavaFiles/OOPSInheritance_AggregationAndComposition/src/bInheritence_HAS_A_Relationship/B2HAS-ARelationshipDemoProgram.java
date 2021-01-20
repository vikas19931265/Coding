package bInheritence_HAS_A_Relationship;



class Address31
{
    String address;
    
    public void setAddresss31(String address)
    {
        this.address=address;
        
        
    }


   
}


class Employee31
{
    String name;

    Address31 d; //HAS-A Relationship.

    Employee31(String name, Address31 d)
    {
        this.name=name;
        this.d=d;
    }

     public void displayStudInformation()
    {
        System.out.println("Student name"+this.name+"Student Address"+this.d.address);
    }

}


class Driver45
{
    public static void main(String[] args)
    {
        Address31 address= new Address31();
        
        address.setAddresss31("Chennai");
        
        Employee31 emp1= new Employee31("Vikas",address);
        
        emp1.displayStudInformation();
        
        Address31 address2= new Address31();
        
        address.setAddresss31("Bengal");
        
        Employee31 emp2= new Employee31("Demo",address);
        
        emp2.displayStudInformation();
    }
}

/*
run:
Student nameVikasStudent AddressChennai
Student nameDemoStudent AddressBengal
BUILD SUCCESSFUL (total time: 0 seconds)
CCESSFUL (total time: 0 seconds)

*/