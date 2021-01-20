// Generic Method used to print differnt types of Objects data

package GenericMethod;


class GenericsArray
{


    public <T>  void  receiveObject( T[] elements )
    {

         for(T a1 : elements)
         {

             System.out.println(a1);

         }
    }


}


class Driversss1
{

    public static void main(String[] args)
    {

        Integer[] a = {10,20,30};

        Character[] a1={'a','b','c'};

         new GenericsArray().receiveObject(a);

         new GenericsArray().receiveObject(a1);

    }

}

/*

run:
10
20
30
a
b
c
BUILD SUCCESSFUL (total time: 0 seconds)

*/