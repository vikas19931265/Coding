package GenericClass;

/*
Conclusions1 :
===============================================================================================================



1. We can define bounded types  only by using extends keyword and we cannot use implements and super keywords.
   But we can replace implements keyword purpose with extends keyword.


    class Test<T extends Number>
    {
            // valid

    }


    class Test<T implements Runnable>
    {

            // invaild as we cannot use implement keyword, we have to replace it with extends

     }


     class Test<T extends Runnable>

    {

            // This is valid

    }


    class Test< T super String>
    {

        // This is valid.

    }


-------------------------------------------------------------------------------------------------------------------------

Conclusion 2:

    As the type parameter "T" we can take any valid java identifier. But it is convention to use T


    class Test<T>
        {
            // valid
    }


    class Test<X>
        {

            // valid

        }

   class Test<Durga>

        {

                // Valid
        }


---------------------------------------------------------------------------------------------------------------------

Conclusion 3:

    Based on our requirement , we can declare any number of type parameters and all these
    type parameters should be separated with comma.


    Example

        class Test<A,B>
        {

        }

        class Test<X, Y,>
        {

        }


       class Hashmap<K,V>
       {

       }

     HashMap<Integer, String> m = new HashMap<Integer, String>();
*/