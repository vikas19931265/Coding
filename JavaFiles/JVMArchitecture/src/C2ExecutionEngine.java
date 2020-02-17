/*
Execution Engine
=============================


This is the central component of the JVM. Execution engine is responsible to execute
java class files. 

Execution engine mainly contains two components.


1. Interpretor.
2. JIT Compiler.



Interpretor
======================


Interpreter is responsible to read the byte code and interpret into the machine code
(native code) and execute that machine code line by line. The problem with the interpretor
is that it interprets every time even though the same method is invoked multiple times.
This will reduce the performance of the system.

To overcome this problem SUN people introduced JIT compilers in the 1.1 version.



JIT Compiler
=========================

The main purpose of the JIT compiler is to improve the performance. Internally JIT
compiler maintains a separate count for every method. Whenever the JVM is going to 
come across any method call first the method will be interpreted normally by the interpreter
and the JIT compiler will increment the corresponding count variable.

This process will be continued for every method. Once if any method count reaches the
threshold value then the JIT compiler identifies that , method is repeatedly used 
method. Such methods are called as Hot spot.

Immediately the JIT compiles that method and generates the corresponding native code.
Next time JVM across that method call then JVM will use the native code directly and
executes it instead of interpreting once again so that performance of the system will
be improved.

The threshold count varied from JVM to JVM.

Some advanced JIT compilers will re compile generated native code if the counter
reaches the threshold value second time so that more optimized machine code will
be generated.

Internally profiler, wchich is the part of JIT compiler is responsible to identify 
the host spot.


JVM interprets total compiler at least once.

JIM compilation is applicable only for repeatedly required methods and not for 
every method




Execution engine diagram
============================================


                    JIT Compiler
                        |
                        v
                    Interacive code generator

                        |
                        v
                    code optimised
        
                        |
                        v
Interpretor         target code generation                    Garbage collection(GC...)

                        |
                        v
                    machine code
                


                Execution engine
                -----------------


Java Native Interface
==========================================

JNI acts as mediator for Java method calls and corresponding native libraries that is 
JNI is responsible to provide information about native libraries to the JVM.

Native method library holds native libraries information.


        Execution engine        ->  Java Native Interface(JNI) --> Native code library
                                <-                            <--






*/
