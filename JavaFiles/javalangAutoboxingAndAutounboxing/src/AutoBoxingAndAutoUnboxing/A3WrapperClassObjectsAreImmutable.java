//Example 3:

package AutoBoxingAndAutoUnboxing;

 class Sample {


     public static void main(String[] args)
     {


        Integer x=10;

        Integer y=x;


         x++;


     System.out.println(x); //11

     System.out.println(y);//10

     System.out.println(x==y);//false




     }


 }
/*

1. All wrapper class objects are immutable that is once we create a wrapper class object then
   we cannot perform any changes in that object.

2. If we are trying to perform any changes then with those changes a new object will be created.


In this program in starting x and y were pointing to same object

    then we did x++ that is x=x+1;

so x content supposed to change, but since its a wrapper object its content wont change instead
a new object will be created with the change and x reference will start pointing to.

*/
