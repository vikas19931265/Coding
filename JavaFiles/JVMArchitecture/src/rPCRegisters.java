/*

PC Registers (Program Counter Register)
================================================

For every thread a separate PC register will be created at the time of the thread
creation. PC Registers contains the address of the current executing instruction.
Once the instruction execution completes then automatically PC register will be 
incremented to hold address of next instruction.


Native Method stacks
===================================================

For every thread JVM will create a separate native method stack. All the native method
calls invoked by the thread  will be stored in the corresponding native method stack.

*/
