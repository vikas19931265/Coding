package A3InterThreadCommunication;

/*

Producer consumer problem

Producer thread is responsible to produce items to the queue and consumer thread is responsible to consume items fro the
the queue.

If the queue is empty then the consumer thread will call wait() method  and enter into the waiting state.  

After producing items to the queue producer thread is responsible to call notify method then waiting consumer will get
that notification and continue its execution with the updated items.


producer thread.


class ProducerThread
{

    produce()

    {

        synchronized(q)  // wait method can only be called inside synchronized block 

        {
            produce item to the queue.

            q.notify(); // once q thread completes execution , it has to notify back to waiting thread.

        }

    }

}


       |
       |
       |
     queue (object common between producer and consumer thread)


Consumer thread.


class ConsumerThread
{

    consumer()
    
    {

        synchronized(q)
        {
            if( q is empty)

                q.wait(); // q is like thread here, this will cause the q thread to complete first.

             else

             consume items
        }

     }

}



/*

In which ever thread , wait() method is called that thread will go into the waiting state and will
wait to receive notification from the object on which the wait method was called.

In this case wait method is called inside the consumer , hence consumer will go into the waiting state
and will wait for q( of type queue) to finish the execution.


*/



