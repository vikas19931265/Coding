//                                         JAVA PROGRAM SHOWING HOW OBJECTS AND PARAMETERS ARE PASSED TO THE CALLING METHOD.










public class JavaIsCallByValue {
    
public static void main(String[] args)
{
    
   int number1=10; // Initial values of number1 and number2 set to 10 and 20.
   int number2=20;
    
   System.out.println("Before swap: Number 1-> "+ number1+" Number 2->"+ number2); 
   
   CallByValue value1= new CallByValue();
   
   value1.swap(number1, number2); // swap method is called, and the values are passed to the calling method
                                  //point to note is that copies of the values are passed.
                                  //No effect takes place in the values present initially
                                  //Calling method works on the copy of values and does not do any change to the original values.
   
   value1.getNumbers();    // This method will get the number, after the method call and we will see that no change would have occurred 
                           // No change would have occurred to the original values, all the change happens in the copy of the values which was received the calling method.
   
   System.out.println("After swap: Number 1-> "+ number1+" Number 2->"+ number2);
    
   Student s = new Student("vikas",1234);
    
   System.out.println("Students before Object passing are " +s.name + " and "+ s.rollno);
   
   s.SetStudent(s);  /*
           
           --->Here Reference s , value which are objects are passed to Object o.
           --->Hence reference S and object o reference starts pointing to the same object.
           --->In this case any change done by S or o, will reflect in the object.
   
   [NOTE]---> IN CASE OF OBJECTS ITS , NOT THE REFERENCE BUT THE VALUES WHICH ARE NOTHING BUT THE OBJECTS ARE PASSED TO THE CALLING METHOD.
        -----> HOWEVER THIS PROMPTS 2 VARIABLES TO HAVE THE REMOTE TO THE SAME OBJECT, AND HENCE ANY CHANGE DONE BY EITHER OF THE REFERENCE VARIABLE WILL REFLECT IN THE ORIGINAL OBJECT.
           */
           
           System.out.println("Students before Object passing are " +s.name + " and "+ s.rollno);
    

}

}


class CallByValue

{
    
    int number1;
    int number2;
    
    public void swap(int number1, int number2)
    {
        
        this.number1=number1;
        this.number2=number2;
        
        int temp=this.number1;
        this.number1=this.number2;
        this.number2=temp;
    
    }
    
    
    public void getNumbers()
    {
        System.out.println("Inside Calling method : number1 is-> "+ number1+" and number2 is-> "+ number2);
    
    
    
}

}
    
class Student
{
    
    String name;
    int rollno;
    
    Student(String name, int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }
    
    
    public void SetStudent(Object o)
    {
       
        Student s= (Student)o;
        s.name="ravi";
        s.rollno=5467;
    
    
    }




}










