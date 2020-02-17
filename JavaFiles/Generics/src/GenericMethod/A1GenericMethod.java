package GenericMethod;

/*

Generic methods and wild-card characters(?)
================================================================================


m1(Al<String> l)


1. We can call this method by passing ArrayList of only String type.

2. But within the method , we can add only string type of objects to the List. By mistake
   if we are trying to add any other type then we will get compile time error.


    m1(ArrayList<String> l)

    {

        l.add("A");

        l.add(null); // null is valid value of any type of object.

        l.add(10); // This is invalid, we will get compile time error.

}




*/


import java.util.*;


class GenericMethod
{

    ArrayList  l;

        // I created an arrayList object firstly. This object is non  generic type.

    public ArrayList receiveArrayList(ArrayList<String> arrayList)
     {
           /* Now using this method i am going to receive arrayList object from another class
             The kind of object to be received has to be arrayList of String type or of non generic
             type.

             Once we receive the object we are going to add one more element to it that is
             "amit mishra". But note that since the ArrayList is of string type and hence
             only string typyes of elements can be added inside it.


             After that we will set the arrayList reference to our instance variable "ArrayList l"
             reference and then return the ArrayList object.  */





         arrayList.add("amit mishra");

         this.l= arrayList;

         return l;

     }




}


class DriverClass21
{
    public static void main(String[] args)
    {

        ArrayList l = new ArrayList();

        l.add("Vikas");

        l.add("Gautam");

        l.add(10);

        ArrayList  m =   new GenericMethod().receiveArrayList(l);

       System.out.println(m);


    }


}

/*
run:
[Vikas, Gautam, 10, amit mishra]
BUILD SUCCESSFUL (total time: 0 seconds)


*/