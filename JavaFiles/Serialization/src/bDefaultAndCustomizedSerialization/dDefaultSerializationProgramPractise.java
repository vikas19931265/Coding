package bDefaultAndCustomizedSerialization;

import java.io.*;

class Serializations implements Serializable {

    String name = "vikas";
    transient String password = "gautam";

    private void writeObject(ObjectOutputStream os) throws IOException, ClassNotFoundException {
        os.defaultWriteObject();
        password = "123" + password;
        os.writeObject(password);

    }

    private void readObject(ObjectInputStream oi) throws IOException, ClassNotFoundException {
        oi.defaultReadObject();
        String epwd = (String) oi.readObject();
        password = epwd.substring(3);
    }

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Serializations s = new Serializations();
        FileOutputStream fos = new FileOutputStream("/home/vikas/Desktop/serialization/input.txt");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(s);

        FileInputStream fis = new FileInputStream("/home/vikas/Desktop/serialization/input.txt");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Serializations s1 = (Serializations) ois.readObject();
        System.out.println(s1.name + "" + s1.password);

    }

}
/*
run:
vikasgautam
BUILD SUCCESSFUL (total time: 0 seconds)

*/
