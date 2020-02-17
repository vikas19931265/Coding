package GarbageCollection;

/*

Which of the following are valid ways for requesting JVM to run the garbage
collector.

gc() method present in the System class is a static method whereas gc() method
present in Runtime class is instance method.


1. System.gc()----> valid
2. Runtime.gc()------->invalid
3. (new Runtime()).gc()---->invalid as Runtime is singleton class
4. Runtime.getRuntime().gc();-----> valid

*/
