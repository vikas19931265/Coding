package Generics;

import java.util.*;

 class Driver1
{
  public static void main(String[] args)
  {
    ArrayList<Student1> l = new ArrayList();
    l.add(new Student1("vikas"));
    l.add(new Student1("ravi"));

    l.forEach(

      		value->
      			{
      				System.out.println(value.name); // here we have not done any kind of typecasting.
                }
                  );
  }
}

class Student1
{
  String name;
  Student1(String name)
  {
    this.name=name;
  }
}

/*
Login / Create Account to save this project.

vikas
ravi

Completed with exit code: 0
*/