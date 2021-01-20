/*
Creating deadlock using join
=================================
*/
package New;

class JoinDeadlock
{
    public static void main(String[] args) throws Exception
    {
        Thread.currentThread().join();
    }
}


