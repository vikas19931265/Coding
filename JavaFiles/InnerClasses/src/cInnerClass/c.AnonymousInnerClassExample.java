package cInnerClass;


/*

Anonymous Inner Class Exmaple
====================================

*/


class Sample
{
    
    public void m1()
    {
        
        System.out.println("I am inside m1");
        
    }
    
    
}


 class Driver
{
    
    public static void main(String[] args)
    {
        
        Sample s = new Sample()
        {
            
            public void m1()
            {
                
                System.out.println("I am inside Driver");
                
                
            }
          
           
            
        };
        
        s.m1();
    
       
        
        
        
        
    }
    
    
    
}
/*
run:
I am inside Driver
BUILD SUCCESSFUL (total time: 0 seconds)

*/