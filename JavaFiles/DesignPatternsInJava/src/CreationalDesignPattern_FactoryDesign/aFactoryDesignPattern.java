package CreationalDesignPattern_FactoryDesign;



interface OperatingSystem
{
    
    public void specs();
    
    
}



class Andriod implements OperatingSystem
{
    
    public void specs()
    {
        System.out.println("Most Powerful Operating System is Andriod");
        
        
    }
    
}

class IOS implements OperatingSystem
{
    public void specs()
    {
        System.out.println("Most Secured operating system is IOS");
    }
}


class Windows implements OperatingSystem
{
    public void specs()
    {
        System.out.println("Worst Operating System Is Windows");
    }
}



class Driver
{
    
    public static void main(String[] args)
    {
        
        /* I want to get most powerful operating system object without disclosign the class 
           name to the Client.
        
        If i try to get the object like
        
            OperatingSystem s = new Windows();
        
        Then here i am disclosing the implementation class to the client and whenever the requirement
        will change to get differnt type of object i have to do the changes in type of object to 
        be created.
        
        Instead of doing this , what i can do is that i create a factory method which will return the 
        type of object which is needed for me.
        
        */
        
        OperatingSystemFactory factory= new OperatingSystemFactory();
        
        OperatingSystem OS =factory.getOS("Secure");
        
        OS.specs();
        
        
        
        
    }
    
}



// This is factory class which will give me what ever objects needed. I dont have to create objects 
// on my own using new keyword now.

class OperatingSystemFactory
{
    
    
        
        public OperatingSystem getOS(String s)
        {
            
            if(s.equals("Powerful"))
            {
                
                return new Andriod();
            }
            
            else if(s.equals("Secured"))
            {
                
                return new IOS();
            }
        
        
            else
            {
                
                return new Windows();
            }
            
            
        }
        
        
}

/*
run:
Worst Operating System Is Windows
BUILD SUCCESSFUL (total time: 0 seconds)

*/