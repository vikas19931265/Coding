package dSerializationExternalization;

/*

Serialization- Externalization
====================================

**In Serialization everything is taken care by JVM and the programmer does not have
    any control.

**In Serialization it is always possible to save total object to the file and it is not
   possible to save part of the object, which may create performance problems.

**To overcome this problem we should go for externalization.

**The main advantage of externalization over the serialization is that everything is taken
  care by programmer and jvm has no control.

**Based upon our requirement we can save either total object or part of object which
  improves performance of system.

**To provide externalization ability for any java object then compulsory the corresponding
  class implements externalization interface.

**Externalization interface defines to method

    writeExternal()
    readExternal()


**Externalization is the child interface of serialization.

            
                    Serializable(1.1v)
                        ^
                        |
                        |
                        |
                    Externalization(1.1v)------> writeExternal() and readExternal




    public void writeExternal(ObjectOutput oo) throws IOException

**Above method will be executed automatically at the time of serialization
 
**Within this method we have to write code to save required variables to the file.



      public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException

**This method will be executed automatically at the time of deserialization

**Within this method we have to write code to read required variables from the file
  and assign to the current object.


**But strictly speaking at the time of the deserialization JVM will create a separate
  new object by executing public no argument constructor. On that object JVM will call
  readExternal() method.

Hence every externalizable implemented class should compulsory contain public no argument
constructor otherwise we will get the run time exception saying InvalidClassException.


*****update1

*/
