package GenericClass;

// Generic class

class Demo1<T>  // creating a generic collections class which can accept any kind of the objects.
{
  T s;

  Demo1(T s)
  {
  this.s=s;
  }

  public T getObject()
  {
  	return this.s;
  }

}

 class Driver2
{
  public static void main(String[] args)
  {

    Demo1<Student> s = new Demo1(new Student());
    Student	s1=s.getObject();  // no typecasting is needed as the Demo1 class is the generic type and does not need the specific parameters.
    Student.display();
  }
}


class Student
{
  	public static void display()
    {
      System.out.println("Student details are presented");
    }
}


/*
Student details are presented

Completed with exit code: 0
*/