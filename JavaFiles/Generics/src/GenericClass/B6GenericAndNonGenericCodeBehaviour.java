package GenericClass;

/*

Communication with Non Generic code.
-----------------------------------------------------------------

1. If we send generic Object to non Generic area then it starts to behave like Non Generic Object similarly if
   we send , non generic object to generic area then it starts to behave like Generic Object that is the location
   in which Object is present based upon that behavior will be defined.

2.


*/

import java.util.*;


class Test190
{
    public static void main(String[] args)
    {
        ArrayList l = new ArrayList();

        l.add("Durga"); // l is generic type here

        l.add("Ravi");

        // l.add(10); Compile error

         m1(l);// l object is passed to non generic method


        System.out.println(l); // Once l comes back from non generic to generic area, again it starts
                              //to behave like generic object taking only String type of elements.

        //[Durga, Ravi, 10, 10.5, true]

            //    l.add(10.5); // Compile error


    }

        public static void m1(ArrayList l)// l reaches non generic method and starts to behave like non generic
                                            // taking any type of element inside it. This in non Generic Area.
        {


            l.add(10);

            l.add(10.5);

            l.add(true);

        }


    }


/*
run:
[Durga, Ravi]
[Durga, Ravi, 10, 10.5, true]
BUILD SUCCESSFUL (total time: 0 seconds)

*/