
package bStaticVariables;


/* 1. Static keyword in java is used for memory management.
   2. Static keyword can be with methods, variables , block and nested classes.
   3. A static variable or a method belongs only to class instead of a object hence 
      it is also called as class variable or class method.
   4. static keyword play an important role in memory management as memory to these
      variables is allocated only during class loading and the value  of these variables is shared by the Objects. 
   5. For the instance methods to use this static variable, an object has to be created and using the reference we can use the static variable.

RESTRICTION

    1. Static method cannot use a non-static variable directy but by using Object of the class we can.
    2. this and super cannot be used in static context as they are object terms and static method or variables are class variables.
   


------------------------------------STATIC VARIABLE-------------------------------------------------------------

*/



 class StaticKeyword {

    public static void main(String[] args) {
      
    Student s= new Student(1234, "vikas", "kabilar street");
    int rollno= s.getRollno();
    String name=s.getName();
    String address=s.getAddress();
    String college=Student.collegeName;
    String college1=s.getCollegeName();
    System.out.println("roll no is "+ rollno);
    System.out.println("name is "+ name);
    System.out.println("adderss is "+ address);
    System.out.println("college name using class. static variable "+ college);
    System.out.println("college name using object " + college1);
    Student.setCollegeName("Tagore Engineering College "); // setCollegeName method is called to change the static variable value of college TEC  using class.
   System.out.println("using static method directly accessing static variable to change static variable data "+ Student.collegeName);
    }
    
}


class Student
{
    private int rollno;
    private String name;
    private String address;
    static  String collegeName="TEC"; // college name of students dont change hence this variable is declared as static.
                                      //this variable can be accessed just by using class name also instead of creating the object.
                                      //this is called as class variable.
   
  
    Student( int rollno, String name, String address  )
    {
        this.rollno=rollno;
        this.name=name;
        this.address=address;
    }
    
    public int getRollno(){
    return rollno;
}

   public String getName()
   {
       return name;
   }

   public String getAddress()
   {
       return address;
   }

   public String getCollegeName()
   {
       return collegeName;
   }

  //STATIC METHOD.
   
   public static  void setCollegeName( String college){ /* This is a static method used to set the static variable value.
                                                         This method can only use static variables and non-static variables can be accessed only using the 
                                                          object*/
       collegeName=college;                           

    }
}


