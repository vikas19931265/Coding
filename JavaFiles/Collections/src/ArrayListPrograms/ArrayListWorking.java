//                              ALGORITHM OF CUSTOM COLLECTION DEVELOPMENT WHERE AN ARRAY CAN STORE ELEMENTS OF DIFFERENT TYPES

/*
    1. This Algorithm in short says how an array is expanded and size restriction is removed. The same concept is also used in the array list as well.
    2. Firstly an array of default size is created example array of size 3.
    3. A variable element is created to check when a data is inserted in the array; this also acts as the index.
    4. As soon as element value becomes equal to the size of the current array, a new Array is created.
    5. This new Array is double the size of the existing array.
    6. Now all the data from the first array is transferred to the new Array.
    7. Reference variable of the new Array is now assigned to the first array, hence the first object becomes orphaned eligible for garbage collection and the old array starts pointing to the new object.
    8. Now array length is increased with the double value.
    9. The loop starts again and checks the elements value with the array size and this keeps on doubling as soon as the array becomes full.

*/





package ArrayListPrograms;

public class ArrayListWorking {

   
    public static void main(String[] args) {
    CustomDev d = new CustomDev();   // Firstly Created an object of the CustomDev class.
      
    Integer a   = new Integer(5);  
/*
 1. We are trying to store, 5 inside the Array, remember that for this we need to create integer class object.   
 2. Here the reference a is copied to object reference obj.
 3. Now Object array contains a reference a, inside this reference a value 5 is stored.
 4. While accessing the element we get the actual value, as the Object class method, toString is overridden in the Integer class.
 
*/

    d.add(a);
    
       d.add(8);
       d.add('y');
       d.add("vikas");
       d.add(79);
       d.add("revolver");
       d.add(79);
       d.add("free");
       d.add("hare");
       Student s= new Student("vikas",1234);
       d.add(s);
       Object obj1[]=d.getRef();
        for ( int k=0;k<obj1.length;k++)
    {
       
        if(obj1[k]==(s))
        {
            
            
            System.out.println(s.name);
            System.out.println(s.rollno);
        }
       
        else
        {
        
            System.out.println ( " elements are "+ obj1[k]);
        }
                   
    }
}
}


class CustomDev                  // Create a class Custom Dev
{
    private int element=0;      
    /*
    inital value of element kept to 0 , this will be used to have a count of number of elementes going inside the array, and keeping track of it when it gets full.
                                 
*/  
Object[] obj= new Object[3]; // Create an array of Object, this Object Class array can store elements of different type unlike normal array.

int j;
    
    public void add( Object objs)// A method add is created, this method receives   an object reference from calling method.

    {
        if( element==obj.length) //element value is checked with length of the array , it the length becomes equal to the element value , then a new array is created.
        {
           Object[] nextObj= new Object[obj.length*2];// new array will have the size double then the size of the actual old array.
                
           
        for ( int i=0;i<obj.length;i++) // now once the array , becomes full,  all the old array values are transformed to the new array
        {
            nextObj[i]=obj[i];
        }
       
        obj=nextObj;  // The old reference pointing the the old array , now starts pointing to the new array with new size. Array length gets updated now.
        }
    
        
            obj[element]=objs;// if array is still not full , then keep inserting the elements into the array
            element++; // also keep incrementing the element value as well.
        
    
    
    }


public Object[] getRef()
{
    return obj;   // Array is created in the customDev class, this method will return the reference of the array which will be used to insert element in the array
}

}

class Student       // Class student is created so that , we can store students objects as well in the array.
{
    String name;
    int rollno;

Student( String name, int rollno)
{
    this.name=name;
    this.rollno=rollno;
}

}
