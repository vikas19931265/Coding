
package dSerializationExternalization;

/*

Externalization
=================


**If the class implements Serializable then total object will be saved to the file.
  In this case output is 

        durga, 10, 20.
        
**If the class implements Externalizable then only required variables will be saved
  to the file. In this case the output is 

    public no-arg constructor
    durga....10....0





t1-------s=durga,i=10,j=20
                            \
                             \
                              \    
                                s=durga, i=10
                              /    
                             /   
                            /    
 t2---->s=null,i=0,j=0  
    
 t2--->s=durga,i=0,j=0            


*/

import java.io.*;

  class ExternalizableDemo implements Externalizable
{
    
    String s; // We want to serialize only s and i here
    int i ;
    int j;

    public ExternalizableDemo()
    {
        System.out.println("public no-arg constructor");
    }
    
    
    public ExternalizableDemo(String s , int i , int j)
    {
        
        this.s=s;
        this.i=i;
        this.j=j;
    }
    
    
    public void writeExternal(ObjectOutput out) throws IOException
    {
        out.writeObject(s);
        out.writeInt(i);
    }
    

    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException
    {
        s=(String)in.readObject(); // we are changing the value of instance variables s and i.
        i=in.readInt();
        
    }
    
    
    public static void main(String[] args) throws Exception
    {
        ExternalizableDemo t1= new ExternalizableDemo("durga",10,20);
                /*Firstly we created an object of our classs with instance values initialized */
        FileOutputStream fos = new FileOutputStream("abc.ser");
                /*Next We are going to serialize this object , that is going to save this into file
                  but note that this is not serialization where all the contents of the object will be 
                  stored but instead it is externalization */
                  
        ObjectOutputStream oos= new ObjectOutputStream(fos);
        oos.writeObject(t1);
        
            /* Now we are calling writeObject() method, internally writeExternal method will be called
              this method will write only string and integer. 
              
              So we have created a full complete object but instead of serializing all its contents
              we are serializing only durga and 10. 20 will not be written to the file.
              
            */
        
        FileInputStream fis= new FileInputStream("abc.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        ExternalizableDemo t2= (ExternalizableDemo)ois.readObject();
                /*
                
            Now here in the deserialization step we are trying to read the content
            of the file. Here we have typecasted the Object type to the ExternalizableDemo
            type. But since our file does not contain complete object data hence JVM
            will firstly make a call to the no argument constructor.
            
            So in the first step an object will be created to which t2 is pointing
            with all its default values.
            
            Now on top of that object readExternal() method will be called which 
            will change the values of s from null to durga and i from 0 to 10
            and j value remain 0 as we do not want it and we have not serialized it.
            
            
            This object creation occurs only in the case of the externalization as 
            our file does not contain the complete contents of the object. This
            will no happen in the case of the serialization.
            
            */
        
       
        System.out.println(t2.s+"...."+t2.i+"...."+t2.j);
        
    }
    
}
/*
$javac dSerializationExternalization/ExternalizableDemo.java
$java -Xmx128M -Xms16M dSerializationExternalization/ExternalizableDemo
public no-arg constructor
durga....10....0

*/
//update1
