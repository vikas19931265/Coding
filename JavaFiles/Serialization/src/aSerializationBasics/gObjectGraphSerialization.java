package aSerializationBasics;

/*
Object graphs in Serialization
--------------------------------

Whenever we are serializing an object, the set of all the objects which are reachable
from that particular object will be serialized automatically. This group of objects
is nothing but called as Object Graph.

This is simlar to dog object holding rat object and rat holding an int value.
When we will be trying to serialize d object all its contents will also get
serialized.

In object graph, every object should be serializable in nature. If at least one object
is not getting serialized then we will get run time exception saying

RE: NotSerializableException

In the above program whenever we are trying to serialize the dog object, then automatically
cat and rat objects also get serialized because these are part of object graph of 
dog.

Among dog, cat and rat objects , if atleast one object is not serializable then we will
get the run time exception saying not serializable exception.


*/
import java.io.*;

class Dog3 implements Serializable
{
    Cat c = new Cat();
}

class Cat implements Serializable//If this is not serializable then we will get not serializable exception.
{
    
    Rat r = new Rat();
}


class Rat implements Serializable //If this is not serializable then we will get not serializable exception.
{
   transient int j =20;
}


class SerializeDemo2
{
    public static void main(String[] args) throws Exception
    {
        Dog3 d1= new Dog3();
        FileOutputStream fos = new FileOutputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        oos.writeObject(d1);
        
        FileInputStream fis = new FileInputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectInputStream ois= new ObjectInputStream(fis);
        Dog3 d2=(Dog3)ois.readObject();
        System.out.println(d2.c.r.j);
        
    }
}

/*
run:
0
BUILD SUCCESSFUL (total time: 0 seconds)

*/