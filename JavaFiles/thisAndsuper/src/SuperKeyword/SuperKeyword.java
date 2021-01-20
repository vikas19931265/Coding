package SuperKeyword;

/*

super keyword in java

• The super keyword in java is a reference variable which is used to refer immediate parent class object.

• Whenever you create the instance of subclass, an instance of parent class is created implicitly which is referred by super reference variable.

• Usage of java super Keyword

 1.super can be used to refer immediate parent class instance variable.

   a)We can use super keyword to access the data member or field of parent class. 
    It is used if parent class and child class have same fields 


 2.super can be used to invoke immediate parent class method.

   b)The super keyword can also be used to invoke parent class method. It should be 
     used if subclass contains the same method as parent class. In other words, it is used if method is overridden 


 3.super() can be used to invoke immediate parent class constructor.



default constructor is provided by compiler automatically if there is no constructor. 
But, it also adds super() as the first statement


*/

/*
Let's see the real use of super keyword. Here, Emp class inherits Person class so 
all the properties of Person will be inherited to Emp by default. To initialize all 
the property, we are using parent class constructor from child class. In such way, we are reusing the parent class constructor.
*/


class Person
{
    String name;
    
    int rollno;

    int par_var=10;
    
    Person()
    {
        // necessary to have default constructor as this will be first line inside every child constructor.
    }
    
    Person(String name, int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }

    public void Status()
    {
        System.out.println("I am Parent class");
    }



}


class Employe1 extends Person

{   int par_var=20;
    float Salary;

        Employe1(String name, int rollno, float Salary) 
        
        {
            
               super( name, rollno); // super keyword invoking parent class constructor on the current object to reduce the code.
                
               // new Person(name, rollno); //another way found by vikas
               
               this.Salary=Salary;
                   
               super.Status(); // super keyword to use parent class method
               
               Status();// using child class method with same name as in parent class
        
               System.out.println(super.par_var); // super keyword to use  parent class variable
               
               System.out.println(par_var); // using child class variable.
        
        }
                
              
        public void Status()
        {
            System.out.println("Child");
        }

}


class Drivers
{
   public static void main(String[] args)
   {
       Employe1 e = new Employe1( "vikas" , 1234 , 2500);
   }
}


/*
run:
I am Parent class
Child
10
20
BUILD SUCCESSFUL (total time: 0 seconds)


*/