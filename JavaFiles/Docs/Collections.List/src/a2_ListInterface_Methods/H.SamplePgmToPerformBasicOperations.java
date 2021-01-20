
/*


List sample program to perform basic operations on ArrayList.

1. This will add String object.

2. This will add the Student object.

We have to differentiate between both of the objects. If the object is of String type
then simply display the content or else if the object is of Student type then we have 
to typecast it first and then display the contents of the object.


*/
package a2_ListInterface_Methods;

import java.util.*;

class ArrayLists {
    
     
    ArrayList list=new ArrayList();//Creating arraylist  
     
    Object[] array; // Created an Array reference   
   
    public void Operations()
       
    {
            list.add("vikas"); //Added String element to Arraylist
            list.add(new Students());// Added Student to the ArrayList
            
            System.out.println("get"+ list.get(0)); //Displaying first element of ArrayList which is String.
            
            array= list.toArray(); // Convert ArrayList to Array
        
            
           
            System.out.println("array"+array[0]);// Printing first element of the Array same as ArrayList.
         
            list.addAll(list); // Inside the list we are adding again all the elements of thes same list that is
                               // we are duplicating the elements.
       
            
        
            list.retainAll(list); //Deleting all the elements except the element present in List. Nothing will be deleted.
        
            System.out.println("list"+list); // Printing the list.
        
        }
 
        public void Show() // Making show method to display the elements of the list.
        {
            
          
           for(Object o: array)
           {
              if( o instanceof String) // Checking if the element is a string or not.
              {
               
                  System.out.println(o); // If its a String print it.
           
              }
           
              else // If its not string then we have to typecast it to Student type in order to print the content of the object.
              {
                  Students s=  (Students)o; // Typecasting the object to the student type.
                  
                  System.out.println(s.name); // printing the name.
              }
           
           }         
        
        }
     
        
        public void iterator()  // Created a dummy iterator method to do the same work with help of this.
        {
            Iterator itr=list.iterator();
            
            while(itr.hasNext())
            {
                System.out.println(itr.next());
            }
        }
        
        public static void main(String[] args)
     {
       ArrayLists a= new ArrayLists(); // Created ArrayList object.
      
       a.Operations(); // Calling the operations method to perform the required logical operations
       
       System.out.println("------Calling show() method-----");
       
       a.Show(); // Calling the show method to display the elements.
       
       //a.iterator();
       
     }
 
 
 }


class Students
{
    String name = "Checking";
    int rollno;
    
   
}


/*
run:
getvikas
arrayvikas
list[vikas, ListPrograms.Students@6bc7c054, vikas, ListPrograms.Students@6bc7c054]
------Calling show() method-----
vikas
Checking
BUILD SUCCESSFUL (total time: 0 seconds)



*/