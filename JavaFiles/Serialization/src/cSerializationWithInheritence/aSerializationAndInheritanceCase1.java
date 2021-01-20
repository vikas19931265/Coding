
package cSerializationWithInheritence;
/*

Serialization with respect to inheritance [Case1]
================================================================================


Even though the child class doesnot implement serialization we can serialize child
class object if parent class implements serializable interface that is serializable
nature is inheriting from the parent to child hence if parent is serilizable then
by default every child is also serilizable.


In the above example even though dog class does not implements serializable we can 
serialize dog object because its parent animal class implements serializable.


note
-----

Object class does not implement Serializable interface. Because if it does then all the 
classes will start to implement the serializable interface which is not the case.

*/

import java.io.*;

class Animal implements Serializable
{
    int i =10;
}

class Dog extends Animal
{
    int j =20;
}


 class SerializeDemo
{
    public static void main(String[] args) throws Exception

    {
        Dog d1= new Dog();
        System.out.println(d1.i+"......"+d1.j);
        FileOutputStream fos = new FileOutputStream("abc.ser");
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        oos.writeObject(d1);
    
        FileInputStream fis= new FileInputStream("abc.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Dog d2=(Dog)ois.readObject();
        System.out.println(d2.i+"....."+d2.j);
        
        
        
    }
    
}


/*
$javac SerializeDemo5.java
$java -Xmx128M -Xms16M SerializeDemo5
10......20
10.....20
*/