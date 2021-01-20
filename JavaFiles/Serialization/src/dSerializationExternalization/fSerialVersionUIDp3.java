package dSerializationExternalization;

import java.io.*;

class Student implements Serializable
{
    String name;
    int rollno;
    
    Student(String name, int rollno)
    {
        this.name=name;
        this.rollno=rollno;
    }
    
}

 class SerializingDemo
{
    public static void main(String[] args) throws Exception
    {
        
        Student s1= new Student("vikas",10);
        FileOutputStream fos = new FileOutputStream("fos.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(s1);
        /*
        
        Here we have serialized the object. So during the process the state of the 
        object is serialized along with a uniqe SerialVersionUID. When we will be trying
        to deserialize the object then the JVM will look for the .class file of the Student
        class and match it with the deserialized ID. If both the IDs are going to match
        the only the object is going to deserialize properly or else we are going to get 
        the error.
        
        In case of default SerialVersionUID JVM is going to pass the ID but the problem
        with this approach is that if any change happens in the .class file of the Student
        from its original state then the UIDs wont match and we will get the error. So it
        is important that we maintain the same JVM across the serializing and the deserializing
        machine. If we are maintaining different JVMs then the version of the .class file will
        be different and again we are going to get the same error.
        
        */
        
    
        FileInputStream fis = new FileInputStream("fos.ser");
        ObjectInputStream ois= new ObjectInputStream(fis);
        Student s  =(Student)ois.readObject();
        System.out.println(s.name+" "+s.rollno);
    }
}

/*
run:
vikas 10
BUILD SUCCESSFUL (total time: 0 seconds)

*/