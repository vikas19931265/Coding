

//Thread Group Important Methods

package A2ThreadGroup;


class ThreadGroupMethodsDemo extends Thread
{
    
    ThreadGroupMethodsDemo(ThreadGroup g, String name)
    {
        super(g, name);
    }
    
    public void run()
    {
        System.out.println("Child thread is running");
    }


}


class Drivers
{
    
    public static void main(String[] args)
    {
        
        ThreadGroup g = new ThreadGroup("ThreadGroup1");
        
        ThreadGroupMethodsDemo t1= new ThreadGroupMethodsDemo(g, "T1");
        
        ThreadGroupMethodsDemo t2=  new ThreadGroupMethodsDemo(g, "T2");
        
        ThreadGroup subGroup= new ThreadGroup(g,"ThreadSubGroup");
        
        ThreadGroupMethodsDemo t3 = new ThreadGroupMethodsDemo(subGroup, "T3");
        
        t1.start();
        
        t2.start();
        
        //String getName():This will return name of the thread group.
        
            System.out.println(g.getName()); //ThreadGroup1
            
            
        //int getMaxPriority():This will return max priority of thread group.
        
            System.out.println(g.getMaxPriority());//10 {by default the priority is of 10};
            
            
        // void setMaxpriority(int p): To change the maxPriority of group
        
            g.setMaxPriority(3);
            System.out.println(g.getMaxPriority());//3{ changed the max priority of threadgroup}
            
            
        // ThreadGroup getParent(): This will return parent group reference of threadgroup
        
           System.out.println(g.getParent().getName()); //main
            
        // void list()://It prints  information about the thread group to the console.
        
            g.list(); /*java.lang.ThreadGroup[name=ThreadGroup1,maxpri=3]
                        Thread[T1,5,ThreadGroup1]
                         Thread[T2,5,ThreadGroup1]  */
        
        //int activeCount(): This will return number of active threads in current group
        
            System.out.println(g.activeCount()); //1
              
            
       //int activeGroupCount(): This will return number of active groups present in the current thread group.
       
            System.out.println(g.activeGroupCount());// 1 or 0
       
            
       //int enumerate(Thread[] t):  /* This will copy all active threads of this thread group into provided thread array.
                                          

       
         Thread[] t4 = new Thread[g.activeCount()];
        
         g.enumerate(t4);
         
         for(Thread s: t4)
         {
             
             System.out.println(s);  //Thread[T1,5,ThreadGroup1]
                                     //Thread[T2,5,]
         }
    
    
    }
    
}

//--------------------------------------------------------------*********************************--------------------------------