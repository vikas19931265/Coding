package GenericClass;

/*

Conclusions(Generics Concept applicable only at Compile time)..
===============================================================================

1. The main purpose of Generics is to provide type safety and to resolve type casting problems.

2. Type Safety and type casting , both are applicable at compile time , hence Generics concept
   is also applicable only at the compile time but not at the run time.


   At the time of the compilation as last step, Generics syntax will be removed and hence for the
    JVM generics syntax will not be available.


Hence the following declarations are equal to one another.

    ArrayList l  = new ArrayList<String>();------------
                                                      |
    ArrayList l = new ArrayList<Integer>();           |
                                                        All these are equal.
    ArrayList l = new ArrayList<Double>();            |
                                                      |
    ArrayList l = new ArrayList();------------------  |


Compiler only changes what is in left side.

The following declarations are equal.


    ArrayList<String> l = new ArrayList<String>();

    ArrayList<String> l = new ArrayList();

            Both of these are equal , as it doesn't matter what is present after equal to.


   For these ArrayList objects , we can add only String type of Objects.





*/

import java.util.*;


class ArrayLists1
{
    public static void main(String[] args)
    {
        ArrayList l = new ArrayList<String>();

                    // This will be treated as ArrayList l = new ArrayList(); as generics is only present at
                    // compile time, it has nothing to do with type of object held. If Generics concept would have
                    // been applicable at RunTime then we should have got an exception as ArrayList non generic reference is
                   // trying to hold ArrayList generic object.

        l.add(10);

        l.add(10.5);

        l.add(true);

        System.out.println(l);

    }
}

/*
run:
[10, 10.5, true]
BUILD SUCCESSFUL (total time: 0 seconds)

*/