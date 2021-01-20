package A3InterThreadCommunication;

/*
Difference between notify and notifyAll();


We can use notify() method to give the notification for only one waiting thread. If multiple threads are waiting then only one thread will 
be notified  and the remaining threads have to wait for further notifications.

Which thread will be notified , we cannot expect , this depends on the JVM.


We can use notifyAll() to give the notification for all the waiting threads of a particular object.
Even though multiple threads will be notified but the execution will be performed one by one only.
This is because threads requires lock and only one lock is available.





On which object we are calling wait method , thread requires the lock of that particular object.

For example, if we are calling wait method on s1 then we have to get lock of s1 object but not s2 object.

Stack s1 = new Stack();

Stack s2 = new Stack();


synchronized(s1)

{

  s2.wait() // This is invalid as we are owner of s1 but calling wait on s2
            // This will throw IllegalMonitorStateException

}


synchronized(s1)

{

  s1.wait() // This is completely fine.


}




*/
