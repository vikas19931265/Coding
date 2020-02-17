package CreationalDesignPattern_FactoryDesign;

/*

Factory method (CreationalDesignPattern)


*/

interface Shape
{
    
    public void draw();
}

//------------------------------------------------------------------------------

class Rectangle implements Shape
{
    
    public void draw()
    {
        System.out.println("Drawing Rectangle");
    }
    
}

//------------------------------------------------------------------------------

class Triangle implements Shape
{
    public void draw()
    {
        System.out.println("Drawing Triangle");
        
    }
    
}

//-----------------------------------------------------------------------------


class Circle implements Shape
{
    public void draw()
    {
        System.out.println("Drawing Circle");
    }
}


//-----------------------------------------------------------------------------

class ShapeFactory
{
    public Shape getShapeObject(String s )
    {
        if(s.equalsIgnoreCase("Circle"))
        {
            
            return new Circle();
            
        }
        
        else if(s.equalsIgnoreCase("Triangle"))
        {
            return new Rectangle();
        }
        
        else if (s.equalsIgnoreCase("Rectangle"))
        {
            return new Rectangle();
        }
        
        else
        {
            return null;
        }
    
        
    }
}

//------------------------------------------------------------------------------

 class ShapeFactoryDriver
{
    public static void main(String[] args)
    {
        
        ShapeFactory s = new ShapeFactory();
        Shape sh= s.getShapeObject("triangle");
                /*
            This factory method is giving me whatever object i need. If i need
            triangle object then i just type triangle and i get the triangle object.
            If i need rectangle object then again i just type triangle and i will
            get the triangle object.
                
            So here instead of us creating the objects and exposing the implementation
            classes to the client. What we are doing is that we have created a factory
            method which gives us the object of the class which i need.
            
                
                */
        sh.draw();
        
    }
}
