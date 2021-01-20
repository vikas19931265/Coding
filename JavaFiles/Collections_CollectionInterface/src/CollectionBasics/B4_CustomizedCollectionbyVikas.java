package CollectionBasics;

/*

Customised Collection program
======================================

*/


class CustomisedArray
{
    int element=0;
    
    int i=0;
    
    Object[] a = new Object[5];
    
    public void add(Object o)
    {
        if(element==a.length)
        {
            Object[] newArray= new Object[2*(a.length)];
            
            for(Object obj: a)
            {
                newArray[i]= obj;
                
                i++;
            }
        
            a=newArray;
        
        }
        
        a[element]=o;
        
        element++;
    
    
    }
     

    public void checkElements()
    {
        for(Object obj : a)
        {
            System.out.println(obj);
        }
    }

}


class Drivers
{
    public static void main(String[] args)
    {
        
        CustomisedArray a= new CustomisedArray();
        
        a.add(1);
        
        a.add(2);
        
        a.add(3);
        
        a.add(4);
        
        a.add(5);
        
        a.add(6);
        
        a.add("Vikas");
        
        a.add(new Students());
        
        a.checkElements();
                
    }
}


class Students
{
    String name="Vikas";
}


/*
run:
1
2
3
4
5
6
Vikas
CollectionBasics.Students@6bc7c054
null
null
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//---------------------------------------------------------------------**************************---------------------------------