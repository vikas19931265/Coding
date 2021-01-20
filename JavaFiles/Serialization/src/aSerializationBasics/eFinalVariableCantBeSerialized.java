package aSerializationBasics;

/*
Transient vs Final 
--------------------------

Every final variable = will be replaced at the compile time only.

Final variables will be participated in the serialization directly by the value.
and hence declaring a final variable as transient has no impact

 */
import java.io.*;

class Dog2 implements Serializable {

    int i = 10;
    transient final int j = 20;
}

class SerializedDemo3 {

    public static void main(String[] args) throws Exception {
        Dog2 d1 = new Dog2();//Created the dog object which will be later saved to the file.

        //Serialization
        FileOutputStream fos = new FileOutputStream("/home/vikas/Desktop/serialization/abc.txt"); // These 3 lines are serialization
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(d1);

        //Deserialization
        FileInputStream fis = new FileInputStream("/home/vikas/Desktop/serialization/abc.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Dog2 d2 = (Dog2) ois.readObject(); // return type of readObject() is object

        System.out.println(d2.i + "....." + d2.j);

    }

}

/*
run:
10.....20
BUILD SUCCESSFUL (total time: 0 seconds)

*/
