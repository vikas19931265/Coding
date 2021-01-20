/*

Generic class
===============================================================

A class that can refer any type is known as the generic class. We mostly used T type parameter
to create generic class of the specific type.

Instead of using T we can use any other character as well

*/
package GenericClass;


class Generics2<T>
{

  T s ;

  Generics2(T s) // Created a constructor
  {
      this.s=s;
  }


  public T getObject()
  {

      return this.s;
  }

}


// We are going to pass student type of object to this generic class

class Students
{
    String name="vikas";

}

class Integers
{

    int a =10;

}


class Drivers11
{
    public static void main(String[] args)
    {

        Students s = new Students();

        Generics2<Students> s1= new Generics2(s); // Created Student type generic class.

        System.out.println(s1.getObject().name); //vikas
                                                 // No need of typecasting here, getObject will return the generic object which will change depending
                                                 // upon the kind of the generic class we are going to create.


        Integers a = new Integers();

        Generics2<Integers> i1 = new Generics2(a);;

        System.out.println(i1.getObject().a);//10

    }

}

/*
run:
vikas
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/