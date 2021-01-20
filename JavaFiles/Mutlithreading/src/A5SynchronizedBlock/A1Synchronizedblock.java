package A5SynchronizedBlock;

/*

Synchronized Block.
===============================================

If very few lines of the code requires synchronization then it is not recommended to declare entire
method as synchronized. We have to enclose those few lines of the code by using synchronized block.

The main advantage of synchronized block over synchronization method is that it reduces waiting time
of the threads and improves performance of the system.



We can declare Synchronized block as follows.

1. To get lock of current object.

    synchronized(this)

        {
            
        }

    If a thread get lock of current object then only it 
    is allowed to execute this area.


2. to get lock of particular object 'b'

    synchronized(b)
    {
        -
    }

    If a thread get lock of particular object 'b' then only
    it is allowed to execute this area.


3. To get class level lock


    synchronized(Display.class)
    {
    
    }

    If a thread got class level lock of 'Display' class, then
    only it is allowed to execute this area
    

*/