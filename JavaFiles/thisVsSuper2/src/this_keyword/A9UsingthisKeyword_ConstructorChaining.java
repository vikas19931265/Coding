/* Constructor Chaining( usage of this keyword) */

package this_keyword;

class Student
        
{
    String name;
    int rollno;
    String Address;
    float fees;



    Student(String name)
    {
        this.name=name; 
    }


    Student(String name,  int rollno)
    {
        this(name); // calls the '1'parameter constructor
        
        this.rollno=rollno;
    
    }

    Student( String name , int rollno, String Address)
    {
        this(name, rollno); // calls the 2 paramter constructor which then calls one paramter constructor.
        this.Address=Address;
    }

    Student( String name , int rollno, String Address, float fees)
    {
          this(name, rollno, Address); // calls the 3 paramter constructor which then calls , 2 paramter constructor
                                       // and then it calls the 1 parameter constructor 
          this.fees=fees;
    }
    

        public static void main(String[] args)
        {
            Student s= new Student("vikas",1234); // this will call the 2 paratmer constructor 
                                                  // which will call the one paramter constructor.  
            
            System.out.println(s.name);
        }

}    

/*
run:
vikas
BUILD SUCCESSFUL (total time: 0 seconds)

*/
