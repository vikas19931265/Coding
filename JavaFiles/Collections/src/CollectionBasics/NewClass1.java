/* Array custom growable program ( by vikas) */


package CollectionBasics;

import java.util.Scanner;

class ArrayLists
{
    static Object[] a= new Object[3];
    
    static int size=0;
    
    public static void add( Object s)
    
    {
        
        
       int j=0;
        
     
        
       if(size < a.length)//problem
            
            {
            
                a[size]= s;
                
                
                size++;
            
               
            }
            
           else
            {
                Object[] newArray=  new Object[2 *(a.length)];
                
                for(Object a1 : a)
             {
                 newArray[j]=a1;
                 
                 j++;
              
             }
               newArray[size]=s;
               size++;
               a=newArray;
        
            }
    }
        public static void showElements()
        {
                
        for (Object a1 : a)
        {
            if( a1 instanceof Students2)
            {
                 System.out.println( ((Students2) a1).rollno);
            }  
            
            else
            System.out.println(a1);
        }
       
    
    }

}


class Driver
{
    public static void main(String[] args)
    {
        ArrayLists.add("vikas");
        ArrayLists.add("Sachin");
        ArrayLists.add("Dravid");
        ArrayLists.add("Yuvraj");
        ArrayLists.add("amma");
        ArrayLists.add("ravi");
        ArrayLists.add("amar");
        ArrayLists.add("jaan");
        
        ArrayLists.add(new Students2(10));
        ArrayLists.add("hari");
        ArrayLists.showElements();
        
    }
}

class Students2
{
    int rollno;

    Students2(int rollno)
    {
        this.rollno=rollno;
    }
}