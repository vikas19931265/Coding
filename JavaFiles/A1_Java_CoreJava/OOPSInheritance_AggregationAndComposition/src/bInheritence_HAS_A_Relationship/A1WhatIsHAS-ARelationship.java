/*

HAS-A Relationship
==========================

1. HAS-A relationship is known as composition or Aggregation.

2. There is no specific keyword to implement HAS-A relationship but mostly we can use
   new operator.

3. The main advantage of HAS-A relationship is re usability of the code.


Example
==============

class Engine
{
        //Engine specific functionality
}

class Car
{
    Engine e = new Engine();

    //.................
}


4. class Car here in this example HAS-A engine Reference.

5. The main disadvantage of HAS-A relationship is that it increases the dependency
   between the components and creates maintenance problems.


*/