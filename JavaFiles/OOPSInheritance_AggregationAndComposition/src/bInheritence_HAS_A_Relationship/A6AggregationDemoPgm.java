//-----------------------------  AGGREGATION IN JAVA-------------------


/*

    1. Aggregation in java is a kind of a HAS-A relationship.
    2. Don’t confusion between Aggregation and composition, as both are of HAS-A
       relationship only but they have a difference.
    3. Here composition refers to a strong relationship , where if the main object,
       containing another object gets destroyed then the inner objects gets 
       destroyed as well.
    4. However it is not necessary in case of Aggregation which is a kind of a 
       weak relationship, where in if the parent object gets destroyed then 
       also there is a chance of a child object to survive.
    5. If total functionality of a class is needed then go for IS -A (INHERITANCE) relationship.
    6. If only one or 2 functionality is needed then go for HAS -A relationship.
    7. Great example for HAS-A relationship is using String reference or String objects inside the class. 
       We use the methods of String class using HAS -A relationship. Here only specific methods to be used in program are called ex. concat.
   

       

  BELOW PROGRAM ILLUSTRATES THE CONCEPT OF THE AGGREGATION.

1. Here a student class is there.
2. Each student will also have some kind of an address.
3. So Student is an object, and the student object contains some address.
4. Here student and the address forms a weak relationship as if the student 
   gets destroyed or dies , then also the address will remain and survive.



*/




package bInheritence_HAS_A_Relationship;


public class A6AggregationDemoPgm {
    
public static void main(String[] args)
{
    Students2 student1= new Students2("vikas",1234);
    // Firstly we created a student object and stored name and roll number in this.
    Address ref=student1.GetAdderssRef();
    // Now student object also contains a reference of address object.
    //Remember it just contains a reference right now, it does not point to any object.
    //Using the above method on student, we get the address reference.
    ref= new Address("7/4","KABILAR STREET","PALVANTHANGAL");
    
    /* 1 Now to this reference initially null, we will assign an object of address type.
       2.Remember that the object resides in Address class and Student class just has the same reference.
       3.So now we have 2 reference pointing to the same object, one reference is with the 
         student object class and one is with the Address 
       5.So now even if we delete the object from student class, we will always have a 
        another reference from address class pointing to the same object.
    
    */
    student1.address=ref; // we are assigning the address reference to student class reference
    System.out.println(student1.address);
    
    /* Now we make this reference point to object of the student , hence now
    -> this ref variable starts pointing to an address object.
    -> so finally a student object contains a a reference of type address which contains some contents as well.
     
    [IMPORTANT POINT TO NOTE:]
    
    
   Here the student object just contains the reference of the object , but not 
   the actual object, the actual object resides in address class with reference" ref"
   so even if we delete the student object, then also only the reference which 
   was held by the student object will be deleted , but the actual object still 
   remains in the memory.
    
    
    */
    
    System.out.println(student1.address.Street);
    student1=null; //we destroyed the student object
    System.out.println(ref.Street); // but we still have the address left in the memory.


}
}




class Students2
{
    
     Address address;
     String name;
     int rollno;
    
    
    Students2(String name , int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }
     
    public Address GetAdderssRef()
    {
        return address;
    }
    

}


class Address{
    
    String HouseNo;
    String Street;
    String locality;

    
    Address(String HouseNo, String Street, String locality)
    {
        this.HouseNo=HouseNo;
        this.Street=Street;
        this.locality=locality;
    }



}

/*
run:
bInheritence_HAS_A_Relationship.Address@4aa298b7
KABILAR STREET
KABILAR STREET
BUILD SUCCESSFUL (total time: 0 seconds)

*/