/*

It is always in inappropriate to mix the programming logic with the assert statement
because there is no guarantee for the execution of assert statements always at the 
run time.

example
============

Appropriate way
---------------------------
public void withdraw(double amount)
{
    if(amount<100)
    {
        throw new IllegalRequestException();
    }
    else
    {
        process Request
    }
}

inappropriate way
---------------------------------

public void withdraw(double amount)
{
    assert(amount>=1000)
    {
        process request
    }
}


*/ 
