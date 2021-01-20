/*

Comparison table of yield, join and sleep methods.
===============================================================================================================


property                                yield                                           join                                                sleep


1.purpose                        if a thread wants to pause its execution           if a thread wants to wait until completing      if a thread don't want to perform any
                                 to give the chance for remaining threads of        some other thread then we should go for the     operation for a particular amount of time
                                 same priority then we should go for yield()        join() method.                                  then we should go for sleep() method.
                                 method



2. is it overloaded             no, only one method for yield                          yes (3 joins)                                         yes(2 sleep) 


3. is it final                          no                                             yes                                                     no        


4. does it throws interrupted           no                                             yes                                                     yes       
   exception    


5. is it native method                  yes                                            no                                                     sleep(long ms)--->native    
                                                                                                                                                sleep(long ms, int ns)--->non native


6. is it static                        yes                                              no                                                      yes  

*/
package A2InterruptingThread;