// Creating our own immutable class by Vikas

package StringClass;


class Cities
{
    
    String city;
    
    Cities(String city)
    {
        
        this.city= city;
        
    }
    
    
    public Cities modify(String city)
    {
        
        if( this.city.equals(city))
        {
            
            return this;
            
        }
        
    
        else
        {
            
            return new Cities( city);
            
        }
    
    
    }
    
    
}



class Driver2
{
    
    public static void main(String[] args)
    {
        
            Cities c1= new Cities("Chennai");
            
            Cities c2= c1.modify("Delhi");
        
            Cities c3= c1.modify(("Chennai"));
            
            System.out.println(c1==c2); // false
            
            System.out.println(c1==c3); // true
    
    
    }
    
}

/*
run:
false
true
BUILD SUCCESSFUL (total time: 0 seconds)


*/