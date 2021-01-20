package aSerializationBasics;

/*

Note:
-----------

We can serialize any number of objects to the file. But in which order we serialized
in the same order only we have to deserialize the object. Order of the objects is 
important in the serialization.

example
    
     
     Cat c1= new Cat();
     Rat r1= new Rat();
     Dog d1= new Dog();
     
     Fos fos= new Fos("abc.txt");
     OOS oos= new OOS(fos);
     oos.writeObject(d1);
     oos.writeObject(c1);
     oos.writeObject(r1);
     
     FIS fis= new FIS("abc.serv");
     OIS ois= new OIS(fis);
     Dog d2=(Dog)ois.readObject();
     Cat c2= (Cat)ois.readObject();
     Rat r2= (Rat)ois.readObject();

 
*/