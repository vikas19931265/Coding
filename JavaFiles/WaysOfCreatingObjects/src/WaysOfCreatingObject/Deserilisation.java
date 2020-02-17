
package WaysOfCreatingObject;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectInputStream;


public class Deserilisation {
    

    public static void main( String[] args) throws FileNotFoundException, IOException, ClassNotFoundException
    {
    
  FileInputStream fis= new FileInputStream("C:\\Users\\609789788\\Desktop\\abc.txt");

  // Created a file input stream object
 ObjectInputStream ois= new ObjectInputStream(fis);

 //Created Object input stream object to read the file input stream in the form of objects.
 
 Dog d2= (Dog) ois.readObject();

 // called readObject on ois reference to read the object and convert it to dog type
 
 // Here we created a dog object of d2 type using deserialization.
 
 System.out.println(d2);
   
    
    }




}


class Dog
{
    
}


//--------------------------------------------------------------------------*******------------------------------------------