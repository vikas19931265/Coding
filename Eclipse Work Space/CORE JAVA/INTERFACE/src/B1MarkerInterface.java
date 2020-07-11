import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;


/*Marker Interface (Design Pattern)


/*What is Marker Interface?
=======================================

1. Marker Interface is an interface which does not contain any methods or fields.

2. If we implement the marker interface then we can perform some operation on object like cloning.
   or we can say object get some ability , this type of the interfaces are called as marker interfaces or ability Interface or Tag interface.

3.It is used to convey to the JVM that the class implementing an interface of this category will have some special behaviour.


4. Syntax of Marker interface
    Interface Left9
    {
        //nothing here

    }

Examples of Marker Interfaces
=================================

Below are some of the examples of marker Interface which are marked for some ability.

1.	Serializable( interface)
2.	Cloneable (interface)
3.	RandomAccess( interface)
4.	SingleThreadModel(interface)

Example 1
=============

By implementing serializable interface our objects  can be saved to the file and can travel across the network.

Example 2
=============

By implementing cloneable interface objects can produce exact duplicate cloned objects

Sample Questions on Marker Interface

    Question .No 1
    Without having any methods how the Objects will get some ability in marker interfaces.
    Answer:
    Internally JVM is responsible to provide required ability.

    Question .No 2
    Why JVM is providing the required ability in the marker interfaces?
    Answer 2:
    To reduce the complexity of the program and to make java language as simple.


Here JVM acts like an assistant, whatever required functionality we want we can just ask our class to implement that particular interface.
For example if we want the cloning facility then we can just implement the cloneable interface. Internally this will be taken care by the JVM which will do the needed coding in order to give the feature to our object .

Here JVM is the one which is implementing the interface like cloneable.

    Question 3
    Is it possible to create our own marker interface??
    Answer 3:  Yes but in that case customization of the JVM will be needed which is out of scope of the programmer.


Cloneable Interface
===========================

Cloneable interface is present in java.lang package.
A class that implements the cloneable interface gives the clone() method present in
the Object class  license in order to create the cloned objects.

After creating a class that implements cloneable interface , it becomes necessary to override 
the clone() method in object class and call the clone method of Object class using super.clone(); */




class Employees implements Cloneable ///* It is important to implement cloneable 
                                     //interface( marker interface ) to make a clone of an object.*/
{


    @Override //overriding the clone () method present in the Object Class
    protected Object clone() throws CloneNotSupportedException
    {
        return super.clone();
                /*1.  Here we have overridden clone method of Cloneable and return clone method implementation which is returning an object.
                   2.  Implementation of the object class clone method.*/
    }


        public static void main(String[] args) throws CloneNotSupportedException
        {
            Employees e1= new Employees();  // created an employee object.

            //Object Cloning.
                Employees e2= (Employees)e1.clone();
                    /*1.  On e1 of employee type we are calling clone method which has been overridden in our class.
                      2. clone method return type is â€œObjectâ€�.
                      3. Since the type returned here is of Object hence we need to typecast it to Student class type */

                    System.out.println(e2);// printing the value of the cloned object.
                    System.out.println(e1);

        }

}



/* o/p
run:
object1WaysOfCreatingObject.Employees@15db9742
object2WaysOfCreatingObject.Employees@6d06d69c
BUILD SUCCESSFUL (total time: 0 seconds)



/*Serializable interface
â€¢ Serialization interface is present in the java.io package.
â€¢ It is used in order to make an object eligible for saving its content in file which is also called as Serialization.
â€¢ Classes that do not implement this interface will not be able to save contents of class in a file.
â€¢ All subtypes of serializable class are themselves serializable.*/





class Serialize implements Serializable
{
        /* 1. It is mandatary to implement serializable interface if content of Objects 
                need to be printed in a file.*/

int rollno;

String name;

    Serialize(int rollno, String name)
    {
        this.rollno=rollno;
        this.name=name;
    }

    
    public static void main(String[] args) throws FileNotFoundException, IOException,  ClassNotFoundException
    {

        Serialize sample= new Serialize(1234,"vikas");
                    //Created an object of Serialize class whose content will be taken 
                    //to the file.

        System.out.println(sample);

//Serialization

    FileOutputStream fos= new FileOutputStream("C:\\Users\\VIKAS GAUTAM\\Desktop\\code.txt");
    ObjectOutputStream oos= new ObjectOutputStream(fos);
    oos.writeObject(sample);

//Deserialization(can create object as well)

    FileInputStream fis = new FileInputStream("C:\\Users\\VIKAS GAUTAM\\Desktop\\code.txt");    
    ObjectInputStream ois= new ObjectInputStream(fis);
    Serialize sample2 =(Serialize)ois.readObject();/*Created Serialize Object.

    1. Object returned from readObject() method will be Object type holding Serialize object reference at run time.
    2.TypeCasted the readObject method returning an object of type â€œobjectâ€� pointing to object of Serialize class to Serialize reference	*/

        System.out.println(sample2.name);

        oos.close();
        fos.close();
        ois.close();
        fis.close();

    }


}

/* o/p
run:
WaysOfCreatingObject.Serialize@15db9742
vikas
BUILD SUCCESSFUL (total time: 1 second) */
