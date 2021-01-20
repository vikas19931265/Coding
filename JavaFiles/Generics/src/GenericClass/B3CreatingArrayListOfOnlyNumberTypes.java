package GenericClass;

// Creating an ArrayList in which we can add only Number types


import java.util.*;

class Demoss
{

    public static void main(String[] args)
    {

        ArrayList<Number> arrayLit= new ArrayList();

        arrayLit.add(0);

        arrayLit.add(10.0);

        arrayLit.add(10.0f);


        System.out.println(arrayLit);


    }

}

/*
run:
[0, 10.0, 10.0]
BUILD SUCCESSFUL (total time: 0 seconds)

*/