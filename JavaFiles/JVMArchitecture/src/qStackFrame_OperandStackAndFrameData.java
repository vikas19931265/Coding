
/*

Operand Stack
=================================================

JVM used operand stack as the work space. Some instructions can push the values
to the operand stack and some instructions can pop the values from the operand 
stack and some instructions can perform required operations.

It like a workplace or rough work place.

assembly program
========================

iload 0
iload 1
iadd
istore 2


Before Starting
------------------------

local variable array

|100
|----
|90
|-----
|
-------

operand stack 

empty

After iload 0
-----------------------

local variable array

100
90
empty

operand stack

empty
100

After iload 1
---------------------

local variable array

100
90
empty


operand stack

90
100

After iadd
------------

local variable array

100
90
empty


operand stack

empty
190


After i store 2
--------------------------

local variable array

100
90
190


operand stack 

empty



Frame data
======================

Frame data contains all symbolic references related to the method. It also contains
a reference to the exception table which provides the corresponding catch block 
information in case of the exceptions.

*/