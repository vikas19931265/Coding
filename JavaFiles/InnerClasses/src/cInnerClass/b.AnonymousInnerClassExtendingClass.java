package cInnerClass;

/*

Anonymous inner class that extends a class..
-------------------------------------------------------

Analysis.
---------

1. PopCorn p = new PopCorn();

        Here we have just created the PopCorn object.

2.  PopCorn p= new Popcorn()
    {
    
    };

    a. We are creating a child class , that extends the popcorn class without the name(anonymous inner class)

    b. For that child class we are creating an object with the parent reference.



3. PopCorn p = new PopCorn()
    
    {
            public void taste()
            {

                System.out.println("spicy");

            }
    };

    a. We are creating a class that extends PopCorn without name( anonymous inner class)

    b. In that child class we are overriding taste() method.

    c. For that child class we are creating an object with the parent reference.
    


The generated dot class files are 

        Popcorn.class
        Test.class
        Test$1.class
        Test$2.class

*/

class PopCorn
{
    public void taste()
    {
            
        System.out.println("Salty");
    }
}

class Test21
{
    
    public static void main(String[] args)
    {
        PopCorn p = new PopCorn() // new PopCorn() is the anonymous inner class object not PopCorn class object.
        {
            public void taste()   // Here we created an anonymous inner class extending PopCorn class and overridding the method taste.
            {
                System.out.println("Spicy");
            }
        };
    
                     p.taste();
    
    
        PopCorn p2 = new PopCorn()
        
        {
            public void taste()
            {
                System.out.println("Sweet");
                
            }
        };   
        
    
            p2.taste(); // sweet.
    
            
        PopCorn p3 = new PopCorn()
        
        {
            public void taste()
            {
                System.out.println("Salty");
                
            }
        };   
        
    
            p3.taste(); // sweet.
    
            
            
      System.out.println(p.getClass().getName());//Test21$1
      
      System.out.println(p2.getClass().getName());//Test21$2
      
      System.out.println(p3.getClass().getName());//Test21$3
    
    }
        


}
    
    
/*
run:
Spicy
Sweet
Salty
Test21$1
Test21$2
Test21$3
BUILD SUCCESSFUL (total time: 0 seconds)

*/    
    

