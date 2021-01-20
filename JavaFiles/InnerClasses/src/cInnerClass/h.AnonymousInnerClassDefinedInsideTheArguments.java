package cInnerClass;

/*

Anonymous inner class that is defined inside arguments.
--------------------------------------------------------

*/



class ThreadDemo9
{
    
    public static void main(String[] args)
    {
        
        Runnable r = new Runnable()// r is implemented class object
        {
            
            public void run()
            {
                for(int i =0 ; i<10; i++)
                {
                    System.out.println("Child Thread");
                }
            }
            
        };
        
        new Thread(new Runnable() // This is just shortcut of Thread t = new Thread(r); 
                                  // Here we have replaced r object with its actual content
                                  // new Runnable is implemented class object.
                                  //So we have done 2 things, created implemented class object and wrote code for implemented class as well.
           /*
                
            Lets say Thread t = new Thread(r) 
                
                            t.start();
                
                We can run it like new Thread(r).start() also
                
                But for that we have pass object to Thread constructor of class which implement the runnable interface.
                
                We can do all this thing inside the argument itself. Create an implementation class of Runnable and pass 
                its object
                
                new Thread( new Runnable() //this will create object of implemented class 
                            
                            {
                
                                class definition // the object will be created from this class 
                
                            }   
                            
            
            Steps of Working
            ====================
            
            1. new Thread(new Runnable
                            {
                                
                            }
                            
                                ).start();
            
            2. Here first we created Thread object.
            
            3. Inside the thread object we are supposed to pass Runnable interface implementation class.
            
            4. To create the implementation class we have created the anonymous inner class like,
            
                            new Runnable
                            {
                                
                            }
                            
             5. Now we will get anonymous object of Runnable interface and on top of that we are calling
                the start() method which will in return call the run() method.
                
                
             6. WITH LINE Runnable r = new Runnable() WE ARE CREATING THE ANONYMOUS/IMPLEMENTATION CLASS OBJECT.   
                with the reference r.
                
             7. but in arguments case, we have only new Runnable() with anonymous object.    
            
            
            */                       
                                  
                                  
                {
                    
                    public void run()
                    {
                        for(int i=0;i<10;i++)
                        {
                            System.out.println("Child Thread2");
                        }
                    }
                    
                }
        
        ).start();
        
        Thread t = new Thread(r);
        
        t.start();
        
        for(int i =0;i<10;i++)
        {
            System.out.println("main thread");
        }
        
        
    }
}

/*
run:
main thread
main thread
main thread
main thread
main thread
main thread
main thread
main thread
main thread
main thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread
Child Thread2
Child Thread2
Child Thread2
Child Thread2
Child Thread2
Child Thread2
Child Thread2
Child Thread2
Child Thread2
Child Thread2
BUILD SUCCESSFUL (total time: 0 seconds)

*/
