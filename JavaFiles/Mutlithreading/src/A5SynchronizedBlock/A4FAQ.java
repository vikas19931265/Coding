package A5SynchronizedBlock;

/*

FAQ

1. What is synchronized keyword and where we can apply?

2. Explain advantage of synchronized keyword.?[resolve data inconsistency problems]

3. Explain disadvantage of synchronized keyword?[increases waiting time of threads and creates performance issues]

4. What is race condition?

    If multiple threads are operating simultaneousness on the same java object then there
 may be a chance of data inconsistency problem. This is called as Race condition.

   We can overcome this problem by using synchronized keyword.

5. What is object lock and when it is required.

6. What is class level lock and when it is required.

7. What is the difference between class level lock and object level lock.

8. While a thread executing synchronized method on the given object is the remaining thread allowed
   to execute any other synchronized method simultaneously on the same object.[ No ]

9. What is synchronized block?

10. How to declare synchronized block to get lock of current object.

11. How to declare synchronized block to get class level lock.

12. What is the advantage of synchronized block over synchronized method.

13. Is a thread can acquire multiple locks simultaneously? [Yes]

    Yes, of course from different objects 

        class X
        {
            public synchronized void m1()   

                    ---> here thread has lock of x
            {
                Y y = new Y();

                synchrnoized(y)

                    {   ---> here thread has locks of x and y
                        Z z = new Z();
                        
                        synchronized(z)
                        {
                            --- --> here thread has locks of x, y and z.
                            --
                        }

                    }       
            }       
        }   



14. What is synchronized statement.?

    Interview people created terminology. The statements present synchronized method and
synchronized block are called as synchronized statements.




*/