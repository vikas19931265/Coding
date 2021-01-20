package A3InterThreadCommunication;

/*

What are protoypes of wait, notify, notifyAll

1. public final void wait() throws InterruptedException

    wait until getting notification.

2. public final native void wait(long ms) throws InterruptedException

3. public final void wait(long ms, int ns) throws InterruptedException



1. public final native void notify()

2. public final native void notifyAll()


note

    Every wait() method throws InterruptedException which is checked exception hence whenever
we are using wait() method compulsory we should handle this interrupted exception either
by try catch or by throws keyword otherwise we will get compile time error.





-------------                         ---------------                                                               
|            |                        |              |                                                   --------------                              ------------   
| new/born   |---t.start() ---------->|ready/runnable|---if thread scheduler allocated processor-------->|  running   |---if run() complete--------->|  dead    |
|-------------                        |--------------                                                    |____________|                              |-----------   
  |                                         ^                                                                       |    
                                            |                                                                       |
Thread t = new Thread();                    |                                                                       |
                                            |                                                                       |
                                            |                                                                   obj.wait()
                                      if waiting thread got lock                                                    |                          
                                            |                                                                   obj.wait(2000)    
                                            |                                                                        |
                                            |                                                                  obj.wait(2000,100)
                                            |                                                                        |
                                            |                                                                   ----------------------     
                                            |                                                                   |                     |   
                                            |                                                                   |waiting state        |   
                                            |                                                                   |                     |   
                                            |                   1.if waiting thread gets notification or         ----------------------                                
                                            |                   2. if time expires or           ----------------------         |  
                                             -------------- 3. if waiting thread interrupted--- |another waiting state|.-------
                                                                                                | to get lock         |          
                                                                                                 ----------------------   










*/