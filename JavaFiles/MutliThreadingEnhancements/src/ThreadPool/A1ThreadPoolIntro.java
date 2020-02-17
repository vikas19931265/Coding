/*

ThreadPools( Executor Framework)
-----------------------------------------

1. Creating a new thread for every job may create performance and memory problems. To overcome
   this we should go for the ThreadPool.

2. ThreadPool is a pool of already created threads ready to do our job.

3. Java 1.5 version introduces ThreadPool framework to implement ThreadPools.

4. ThreadPool framework is also knows as Executor Framework


How To create a Thread pool?
---------------------------------

We can create Thread group as follows.

    ExecutorService service = Executors.newFixedThreadPool(3);


How To Submit Job
----------------------

We can submit a runnable job by using submit() method.

        service.submit(job);

How to shutdown Executor service
----------------------------------

We can shutdown executor service by using shutdown method

       service.shutdown();


*/


//------------------------------------------------------------*****************************---------------------------------------