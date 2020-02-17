package GenericClass;

/*

Generic Class Program
===============================================================================

*/


class GenericClass<T> // Created a Generic Student class. Inside this Student class i want
                    // to store a  instance variable which can be of any reference type.
{
    T element;

    public void addElement( T element )
    {

        this.element= element;

    }

    public T getElement()
    {

        return element;

    }



}


class DriverClass
{

    public static void main(String[] args)
    {

        //----------------------case 1---------------------------//
        /*

        We created a generic class . Inside the generic class object we have
        first added string as the type.

        Now see our generic class constructor is of "T" type hence it can take
        any type of object as the parameter. No when we made our generic class
        as string type then everywhere where T was present in the generic class
        got replaced with the String.

        So for getElement() return type also got replaced with the String. Now
        we don't have to type cast the element, because everything is happening
        at the run time.

        This is saving us from the big head ache of typecasting.

        Similarly when we make our generic class as of integer type then return type
        of methods constructor parameter type and all the places where "T" was coming
        got replaced with the Integer.  This has saved our time of typecasting the
        elements.

        */


        GenericClass<String> str= new GenericClass<String>();

        str.addElement("Vikas");

        String getString =str.getElement();

        System.out.println(getString);


        GenericClass<Integer> num= new GenericClass<>();

        num.addElement(20);

        Integer getInteger= num.getElement();

        System.out.println(getInteger);



    }



}

/*
run:
Vikas
20
BUILD SUCCESSFUL (total time: 0 seconds)

*/