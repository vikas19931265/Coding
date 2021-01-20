/*

Generic Method
================================================================================

Like generic class, we can create generic method that can accept any type of argument.

Lets see a simple example of java generic method to print array elements.
We are using here E to denote the element.

*/
package GenericMethod;


 class GenericMethods
{

    public static <E> void printElements(E[] elements) // here u can consider E also as Object[]
    {

        for(E eleme :elements)
        {

            System.out.println(eleme);

        }


    }


    public static void main(String[] args)
    {

        Character[] ch={'v','i','k','a','s'}; // we cant pass use char[] ch here as generics does not work with the primitives.

        Integer[] in={1,2,3,4,5};

        System.out.println("printing the character elements");;

        printElements(ch);

        System.out.println("printing the integer elements");;

        printElements(in);

        Student[] stud={new Student(),new Student(),new Student()};
        printElements(stud);

    }


}


class Student
{

}


/*
$javac GenericMethod/GenericMethods.java
$java -Xmx128M -Xms16M GenericMethod/GenericMethods
printing the character elements
v
i
k
a
s
printing the integer elements
1
2
3
4
5
GenericMethod.Student@2a139a55
GenericMethod.Student@15db9742
GenericMethod.Student@6d06d69c

*/