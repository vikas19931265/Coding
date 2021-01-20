
/*



    java source file
        (.java)
        
        |
        V
    java compiler(javac)
        |
        V
        
    javac class file(.class file)---------------------input to--------------------
                                                                            |
                                                                            |
                                                                            |
                                                                            |
                                                                            |
                                                                            |
                                                                            |
                                                                            v
                                                                      class  loader
                                                                            |   
                                                                            |
                                            ------------------------------------------------------------------------------                          
                                            |                                       |                               |        
                                        Loading                                 Linking                         Initialization
                                            |
                                            |----Bootstrap CL----------         |---Verify-------
                                            |                         |         |               |
                                            |-----Execution CL        |-------->|---prepare----------------------> Initialization    
                                            |                         |         |               |
                                            |-----Application CL-------         |---resolve------

                                                                        |       ^
                                                                        |       |
                                                                        v       |
                    ------------------------------------------various memory areas of JVM-------------------------------------------------------                    
                    |                       |                       |                                       |                                 |
                    |                       |                       |                                       |                                 |    
                Method  Area         Heap Area                Stack Area                                PC Register                     native method stacks
                (class data)        (object data)                   t1                                      |                                |    
                                                                    .                               PC register for thread1         t1      t2          t3        
                                                                |------|                            PC register for thread2     |       |   |       |   |       |
                                                                |------|                            PC register for thread n    |       |   |       |   |       |
                                                                |------|                                                        |       |   |       |   |       |
                                                each entry in stack is stack frame with 3 parts                                 ---------   --------    --------         
                                                (Local variable array, frame data, operand stack)
                                                for every thread separate stack will be their

                                                                        |
                                                                        |
                                                                        v
                                                                Execution Engine--------------------------------------------------------->may require native method                                            |                                                                   library information provided by ------>Native Method library
                                                                        |                                                                    java network interface(JNI)
                                                                        |
                                                                        |
                        -------------------------------------------------------------------------------------------------------                                        
                        |                                               |                                           |
                        |                                               |                                        Garbage collector and etc
                    Interpretor                                     JIT Compiler + Profiler    
                                                                        |
                                                                Intermidate code generator
                                                                        |
                                                                    code optimizer
                                                                        |
                                                                    target code generator
                                                                        |
                                                                   machine code/native code        
*/

