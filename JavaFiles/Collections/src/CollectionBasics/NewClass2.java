//                           ALGORITHM OF CUSTOM COLLECTION DEVELOPMENT WHERE AN ARRAY CAN STORE ELEMENTS OF DIFFERENT TYPES

/*
    1. This Algorithm in short says how an array is expanded and size restriction is removed. 
       The same concept is also used in the array list as well.
   
    2. Firstly an array of default size is created example array of size 3.
    
    3. A variable element is created to check when a data is inserted in the array, 
       this also acts as the index.
    
    4. As soon as element value becomes equal to the size of the current array , 
       a new Array is created.
    
    5. This new Array is double the size of the existing array.
    
    6. Now all the data from the first array is transferred to the new Array.
    
    7. Reference variable of the new Array is now assigned to the first array, 
       hence the first object becomes orphaned eligible for garbage collection and 
       the old array starts pointing to the new object.
    
    8. Now array length is increased with the double value.
    
    9. The loop starts again and checks the elements value with the array size and this keeps on doubling as soon as the array becomes full.

*/





package CollectionBasics;

 class CollectionCustomDev {

   
    public static void main(String[] args) {
    CustomDev d = new CustomDev();
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


class CustomDev
{
    private int element=0; // create element with initial value as 0
    Object[] obj= new Object[3]; // initial object array with size 3 is created.
    int j;
    public void add( Object objs)  // method add will receive the object to be added and is received in the variable objs.

    {
        if( element==obj.length)  // element values is checked with the length of the array
                                   // when the array length becomes equal to the element then a new array is created
        {
           Object[] nextObj= new Object[obj.length*2]; // this new array with have size double of initially declared object array
                
           
        for ( int i=0;i<obj.length;i++) // now the values from the old array will be stored into the new array
        {
            nextObj[i]=obj[i]; // values from obj array is stored into the nextObj array
        }
       
        obj=nextObj; // once the values are stored the new reference is assigned to the old reference and the old reference then starts pointing to the 
                    // new object , leaving the old object eligible for the garbage collection.
        }
    
        
            obj[element]=objs; // when elements is not equal to length of the array then objs reference received from the calling method is passed to the obj[element] array.
            element++; // keep incrementing elements
            
        
    
    
    }


public Object[] getRef()   //this method will return reference of the object array.
{
    return obj;
}

}

class Student                      // created a class student whose object is also stored in object array
{
    String name;
    int rollno;

Student( String name, int rollno)
{
    this.name=name;
    this.rollno=rollno;
}

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------