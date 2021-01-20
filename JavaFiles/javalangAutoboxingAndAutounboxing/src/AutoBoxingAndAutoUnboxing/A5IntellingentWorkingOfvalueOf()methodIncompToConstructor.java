/*
Intelligent working of valueOf() method
================================================================================


Internally autoboxing concept is implemented by using valueOf() method hence buffer concept
is applicable for valueOf() methods also.


valueOf() method works intelligently to get wrapper object of a primitive in comparison
to constructor used to get wrapper object of primitive.

In valueOf() method we have buffer concept.

Example...

        Integer  x =Integer.valueOf(10); // this will create a wrapper object.

Now this 10 value is already present in the buffer. So x start pointing to the object present
in the buffer containing the value of 10.

Now again if we are trying to autobox on some other variable lets say

        Integer y=Integer.valueOf(10);

then this will not create a new object instead it will start pointing to the same object to
which x is pointing to . Hence in this way we are improving the performance.


*/
package AutoBoxingAndAutoUnboxing;


class autobox
{

    public static void main(String[] args)
    {

    //case 1

    Integer x = new Integer(10);

    Integer y= new Integer(10);

    System.out.println(x==y);//false




    //case 2:

    Integer x1=10;

    Integer y1=10;

    System.out.println(x1==y1);//true


    //case 3:

    Integer x2= Integer.valueOf(10);

    Integer y2=Integer.valueOf(10);

    System.out.println(x==y);// true


    //case 4:

    Integer x3=10;

    Integer y3=Integer.valueOf(10);

    System.out.println(x==y); //true


    }



    }