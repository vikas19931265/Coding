package GenericMethod;

// Creating a generic method

/*

Writing
 public <T extends Number>

will force the T type of argument we are supplying to the acceptObject method to
be of number type only. If it is not the number type then we are going to get the
compile time error.

*/

import java.util.*;
class Demo
{

  public <T extends Number> void acceptObject(T element) // T has to be of number type..dont write like acceptObject(<T extends Number) element)
    {
   		System.out.println(element);

  	}
}


 class Driver
{
  public static void main(String[] args)
  {
    Integer i=10;

    new Demo().acceptObject(i);
  }
}

/*
run:
10
BUILD SUCCESSFUL (total time: 0 seconds)

*/