/*

Wait() , notify() , notifyAll()
===========================================

1. We can use these methods for the purpose of interthread communication.

2. The thread which is expecting updation , it is responsible to call .wait()
   method then immediately the thread will enter into the waiting state.

3. The Thread which is responsible to perform updation, after performing updation
   the thread can call notify() method. The waiting thread will get that notification
   and continue its execution with those updates.

*/





