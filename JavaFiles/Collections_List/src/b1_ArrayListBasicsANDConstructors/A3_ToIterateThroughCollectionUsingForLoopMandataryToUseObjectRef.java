
/*

Use Object reference in for-each loop to iterate through the elements of the ArrayList.

*/


package b1_ArrayListBasicsANDConstructors;

import java.util.ArrayList;

class ArrayListDemos
{
    
  
    public static void main(String[] args)
    {
        ArrayList array = new ArrayList(6);
        
        array.size(); // size will be '0' because no element is inserted till now.
        for( int i=0; i<100000;i++)
        
        {
            array.add(i);
        
           
        }
     
        
        System.out.println("addition completed");
        
        for( Object o: array) //important.
        {
            
            /*
            
           In case of ArrayList , for - each loop takes Object reference
           inside the array.
            
           This is because any other kind of class reference cannot be converted
           to the Object type.
            
           Consider for example here , if we would have taken integer reference in array
           then integer reference will not be able to hold run time object other than integer. If 
           run time object here would be String or "Object" then typeCasting would be impossible
           hence
            
           WE HAVE TO TAKE OBJECT REFERENCE TO ITERATE INSIDE THE ARRAYLIST BECAUSE
           ARRAYLIST CAN CONTAIN HETEROGENEOUS ELEMENTS AND WE HAVE TO ASSIGN ROOT
           OF ALL THE CLASSES AS REFERENCE TO ITERATE THROUGH HENCE 'OBJECT REF' IS MANDATORY.
            
            
            CE: incompatible types- Object cannot be converted to integer. 
            
            
            We can read it like,
            
                    FOR-EACH ELEMENT IN ARRAY OF TYPE OBJECT.   
            */
            
           System.out.println((Integer)o);
        
        
        }
        
        
    }
    
}


//-------------------------------------------------------------------------************-------------------------------------------------