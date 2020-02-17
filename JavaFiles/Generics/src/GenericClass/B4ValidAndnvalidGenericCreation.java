package GenericClass;

/*

Which are valid and invalid?
===================================================================================

1 ArrayList<String> l = new ArrayList<String>();   // valid

   This is valid, it is always expecting arraylist of string type

2 ArrayList<?> l = new ArrayList<String>(); // valid

   ArrayList of anytype.

3 ArrayList<?> l = new ArrayList<Integer>(); // valid

4 ArrayList<? extends Number> l = new ArrayList<Integer>();// valid

    Integer , is child class of Number hence it will compile fine.

5 ArrayList<? extends Number> l = new ArrayList<String>();//invalid

    String is not child class of Number hence we will get compile time error.

    CE: incompatible types, found AL<String> required AL<? extends Number>

6 ArrayList<? super String> l = new ArrayList<Object>();// valid

    Object is super class of String hence completely fine.

7 ArrayList<?> l = new ArrayList<?>();//invalid

    CE: Unexpected type , found: ? required: class or interface without bounds

8 ArrayList<?> l = new ArrayList<? extends Number>();// invalid

CE: Unexpected type , found ? extends Number , required class or interface without bounds.



*/

import java.util.*;
