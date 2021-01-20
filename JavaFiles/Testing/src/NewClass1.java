
class NewThread extends Thread
{
    
    public void print()
    {
        
        for(int i =0;i<=10;i++)
        {
            System.out.println(i);
            
            try
            {
                Thread.sleep(1000);
            }
        
            catch(InterruptedException e)
        {
        
            
        
        }
    }
    
    }
    

    public void run()
    {
        print();
    }


}



class DriverThread1 
{
    
    public static void main(String[] args)
    {
    
    NewThread t = new NewThread();
    
    NewThread t1 = new NewThread();
    
  
    
    t.start();
    
    t.wait();
    
    t1.start();
    
    
    }
    
}