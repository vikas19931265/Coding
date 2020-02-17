package GenericMethod;

/*

Generic Method with WildCard
================================================================================


2. m1(ArrayList<?> l)


1. We can call this method by passing ArrayList of any type. But within the method
   we cannot add anything to list except null because we don't know the type exactly.

2. Null is allowed because it is valid value for any type of object.


Example

         m1(ArrayList<?> l
{
        l.add(10.5); // invalid

        l.add("A");  // invalid

        l.add(10) ; invalid

        l.add(null); valid

}


3. This type of methods are best suitable for read only operations.

*/
import java.util.*;


class GenericMethod2
{

    ArrayList  l;



    public ArrayList receiveArrayList(ArrayList<?> arrayList)
     {

        /* NOTE :  we have passed ? as arraylist type argument hence in the arrayList now we can add only null
               this is useful for the read only operation where we don't want to make any change to the content
               of the object. We just want to perform the read operation. */

        // this.add("vikas"); // invalid

         this.l= arrayList;


         return l;  // we are just performing a read operation in this csae.


     }




}


class DriverClass3
{
    public static void main(String[] args)
    {

        ArrayList l = new ArrayList();

        l.add("Vikas");

        l.add("Gautam");

        l.add(10);

        ArrayList  m =   new GenericMethod2().receiveArrayList(l);

       System.out.println(m);


    }


}

/*

    run:
[Vikas, Gautam, 10]
BUILD SUCCESSFUL (total time: 0 seconds)


*/