/*

Why its recommended to use Runtime.getRuntime().gc() then System.gc()???

It is convenient to use System class gc method() when compared to Runtime class
gc() method.

With the respect to performance it is highly recommended to use Runtime class
gc() method when compared with System class gc() method. Because System class
gc() method internally calls Runtime class gc() method only.


        class System
        {
            public static void gc()
            {
                Runtime.getRuntime().gc();
            }
        }



*/
