//---------------------------COMPOSITION in java.--------------------------------

/*
    1. A4PgmShowingComposition in java refers to the Strong relationship.

    2. Hence when the main object gets destroyed the child objects should also get destroyed.

    3. To enable this what I have done is that  have created the address object inside the student object.

    4. Now the Address reference is held by the student object, and this reference is not held by 
       any address object.

    5. Hence when we delete the student object the corresponding reference also gets deleted.   

*/


package bInheritence_HAS_A_Relationship;



public class A4PgmShowingComposition {
    
public static void main(String args[])
{
   
    Students3 stud1= new Students3("vikas");
/*
1. Firstly created a student object, and this object contains a name, and a address
   reference, this reference is not null as it is pointing to some object.

2. now this reference solely belongs to student class, hence when student
   object gets deleted address object gets deleted as well , as it does not 
   have any other reference.
*/
  
stud1.address.setAddress("7/4", "Kabilar Stree");


// Address reference stores setAddress method and using this method we have set
// address of the student.

System.out.println(stud1.getAddress());
 
//  get the address of the student using this method.

stud1=null;
  
// we destroyed the student object

System.out.println(stud1.address);

// After destroying the student object address object also gets deleted.  


}

}



class Students3
{
    
    String name;
    
    Address3 address= new Address3();// illustrates HAS a relationship
                                     //Using this we can call just needed methods hence
                                      //better to go for this when only a part of functionality is needed.
    
    Students3( String name)
    {
        this.name=name;
    }   
    

    public String getAddress()  // Here for address object we are trying to get only
                                //   part of functionality hence a great example for a
                                 // HAS a relationship.
    {
        return address.HouseNo+address.locality;
    }


    }



class Address3
{
    
    String HouseNo;
    String locality;
    
    

    public void setAddress(String HouseNo, String locality)
            
    {
        
        this.HouseNo=HouseNo;
        this.locality=locality;
    
    }

}    

/*
run:
7/4Kabilar Stree
Exception in thread "main" java.lang.NullPointerException
	at bInheritence_HAS_A_Relationship.A4PgmShowingComposition.main(A4PgmShowingComposition.java:51)
/home/vikas/.cache/netbeans/8.2/executor-snippets/run.xml:53: Java returned: 1
BUILD FAILED (total time: 0 seconds)

*/