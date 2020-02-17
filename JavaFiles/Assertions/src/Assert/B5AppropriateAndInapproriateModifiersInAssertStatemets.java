/*

It is always inappropriate for validating public method arguments by using assertions
because outside person is not aware whether assertions are enabled or disabled in 
our system.

It is always appropriate for validating private method arguments by using the assertions
because local person is aware whether the assertions are enabled or disabled in our
system.


It is always inappropriate to validate command line arguments by using assertions
because these are arguments to main method, which is public.

*/ 
