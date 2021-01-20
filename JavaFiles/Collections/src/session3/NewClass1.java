
package session3;
import java.util.*;

class ArrayLists {
    
     
    ArrayList list=new ArrayList();//Creating arraylist  
     
    Object[] array;   
    public void Operations()
        {
            list.add("vikas");
            list.add(new Students());
            System.out.println("get"+ list.get(0));
            array= list.toArray();
        
            
           
            System.out.println("array"+array[0]);
         
            list.addAll(list);
       
            
        
            list.retainAll(list);
        
            System.out.println("list"+list);
        
        }
 
        public void Show()
        {
            
          
           for(Object o: array)
           {
              if( o instanceof String)
              {
               
                  System.out.println(o);
           
              }
           
              else
              {
                  Students s=  (Students)o;
                  
                  System.out.println(s.name);
              }
           
           }         
        
        }
     
        
        public void iterator()
        {
            Iterator itr=list.iterator();
            
            while(itr.hasNext())
            {
                System.out.println(itr.next());
            }
        }
        
        public static void main(String[] args)
     {
       ArrayLists a= new ArrayLists();
      a.Operations();
       //a.Show();
       //a.iterator();
       
     }
 
 
 }


class Students
{
    String name = "Checking";
    int rollno;
    
   
}