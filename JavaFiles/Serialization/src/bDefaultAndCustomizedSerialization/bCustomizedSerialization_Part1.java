/*

We can implement customized serialization by using the following two methods

1. private void writeobject(ObjectOutputStream os) throws Exception

        This method will be executed automatically at the time of serialization. Hence at the 
        time of serialization if we want to perform any activity we have to define that in 
        this method only.


2. private void readObject(ObjectInputStream is) throws Exception

     This method will be executed automatically at the time of deserialization. Hence at the 
     time of the deserialization if we want to perform any kind of activity we have to define 
     that in this method only.
     

*/