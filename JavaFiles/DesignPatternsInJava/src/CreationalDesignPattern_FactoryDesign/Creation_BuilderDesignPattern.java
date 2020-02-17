package CreationalDesignPattern_FactoryDesign;

/*
Builder Design pattern- Used when we have many parameters in constructors

*/

 class Phone
{
    
    private String os;
    private int ram;
    private String processor;
    private double screenSize;
    private int battery;
    
    /*
    
    Phone p = new Phone("Andriod",2,"Qualcom",5.5, 3100);
    
    1. Here in this program in order to create the phone object we have
       to pass all the parameters to Phone constructor.
    
    2. This is a tedious task as when we dont want to pass the a value like
       type of OS then also we need to at least supply some default value 
       which will be acting as the default value.
       
    3. Also the order of of arguments supplied in the method should be same
       as the order which is supplied in the constructor.
    
    Instead of dealing with the scenario where we are going to have a number
    of methods passed as the argument to the constructor we can go with the
    builder design pattern
    
    For this we will create a Builder class
    */
    
    
    Phone(String os,int ram,String processor,double screenSize,int battery)
    {
        
        this.os=os;
        this.ram=ram;
        this.processor=processor;
        this.screenSize=screenSize;
        this.battery=battery;
    }
   
   
   
    public String toString()
    {
        
        return this.os+" "+this.ram+" "+this.processor+" "+this.screenSize+" "+this.battery;
    }
    
    
}


 class Driver1
{
    
    public static void main(String[] args)
    {
        
        Phone p = new PhoneBuilder().getOS("Andriod").getPhone();
                /*
                
                Here the PhoneBuilder is going to return me the object of phone type
                
                getPhone() method will take the arugments from the PhoneBuilder object
                and put this values in the phone object and return the same as well.
                
                */
            
        
        System.out.println(p);
    }
    
}




class PhoneBuilder
{
    private String os;
    private int ram;
    private String processor;
    private double screenSize;
    private int battery;
    
    public PhoneBuilder getOS(String os)
    {
        this.os=os;
        
        return this;
    }
    
    public PhoneBuilder getRam(int  ram)
    {
        this.ram=ram;
    
        return this;
        
    }
    
    public PhoneBuilder getProcessor(String processor)
    {
        this.processor=processor;
    
        return this;
        
    }
    
    public PhoneBuilder getScreenSize(double screenSize)
    {
        this.screenSize=screenSize;
    
        return this;
        
    }
    
    public PhoneBuilder getBattery(int battery)
    {
        this.battery=battery;
    
        return this;
        
    }
    
    
    public Phone getPhone()
    {
        
        return new Phone(os,ram,processor,screenSize,battery);
    }
    
    
}
