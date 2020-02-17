package Generics;

/*

Generics resolves type casting
===============================================================================


For example to hold only String type of objects we can create Generic version of 
ArrayList object as follows.


    ArrayList<String> l = new ArrayList<String>;

    For this array list we can add only String type of Objects. By mistake if 
 we are trying to add any other type , immediately we will get compile time error


At the time of retrieval we are not required to perform typecasting.


    Example

        ArrayList<String> l = new ArrayList<String>();

        l.add("durga");

        String name1= l.get(0);
                      |  
                   Type-Casting is not required here.

 hence through Generics, we can solve typecasting problem


*/

//--------------------------------------------------------------------************************----------------------------------------------------