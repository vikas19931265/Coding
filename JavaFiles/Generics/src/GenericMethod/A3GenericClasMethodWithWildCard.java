package GenericMethod;

/*3

Generic class method with Wild Card
=================================================================================

m1(ArrayList<? extends X> l)


1. X can be either class or interface.

2. If X is a class , then we can this method by passing ArrayList of either X type or its
   child classes.


3. If X is an interface, then  we can call this method by passing ArrayList of either X type or its implementation
   classes. But within the method we cannot add anything to the list except null because we do not know the
   type of X exactly. This type of methods are also best suitable for read only operations.

-------------------------------------------------------------------------------------------



m1(ArrayList<? super X> l

1. X can be either , class or interface. If X is a  class then we can call this method by passing ArrayList
   of either X type or its super(parent) classes.

2. If X is an interface, then we can call this method  by passing ArrayList of either X type or super class of implementation class of
   X.


        Example

            Thread implements Runnable

            And super class of Thread is Object

            Hence we can pass either Runnable type objects or its implementation class (Thread) super class.


3. But within the method we can add X types of objects and null to the list.

*/

import java.util.*;


class GenericMethod3
{

    ArrayList  l;



    public ArrayList receiveArrayList(ArrayList<? extends CharSequence> arrayList)
     {

               /*

               In this program also receiveArrayList() method can be called by passing
               ArrayList of any type which is child class of Number.

               But note we wont be able to perform any action on the object as the child
               class is not specific here.

               This tactics is useful only to call the method and to perform read operations
               but not any kind of write operations.


         CASE 1 : notes

         ArrayList<? extends Number> arrayList

                This method can be called only if we pass an ArrayList of either
                type number or its child classes type that is byte, short, int, long, float ,double
                If we try to pass a string then we will get the compile time error.

         ce:  ArrayList<String> cannot be converted to ArrayList<? extends Number>

         but we wont be able to add any element to the arrayList object as the kind of class
         class extending Number class is not specific.


         Case 2:

            ArrayList<? exnends CharSequence> arrayList

                This method can be called only if we pass CharSequence as the argument or its child
            classes that is String, StringBuffer or StringBuilder.


         This tactics is used only to call the method but not to make any changes to the content of the
          object.*/


         this.l= arrayList;


         return l;  // we are just performing a read operation in this case.


     }




}


class DriverClass4
{
    public static void main(String[] args)
    {

        ArrayList<String> l = new ArrayList<>();

        l.add("vikas");

        l.add("sachin");

        l.add("dravid");

       ArrayList  m =   new GenericMethod3().receiveArrayList(l);



       System.out.println(m);


    }


}

/*
run:
[vikas, sachin, dravid]
BUILD SUCCESSFUL (total time: 0 seconds)


*/

