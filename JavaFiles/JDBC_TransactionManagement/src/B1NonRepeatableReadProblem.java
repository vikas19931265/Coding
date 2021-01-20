/*

2. Non-Repeatable Read Problem:
=========================================

For the same Read Operation, in the same transaction if we get different results at different times,
then such type of problem is called Non-Repeatable Read Problem.

Eg:

T1: select * from employees;
T2: update employees set esal=10000 where ename='durga';
T1: select * from employees;

In the above example Transaction-1 got different results at different times for the same query.




*/