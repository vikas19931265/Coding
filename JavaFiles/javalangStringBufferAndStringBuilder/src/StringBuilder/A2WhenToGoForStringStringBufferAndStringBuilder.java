/*

When we should go for String or StringBuffer or StringBuilder.
==============================================================================


String vs StringBuffer vs StringBuilder
-----------------------------------------------

1. If the content if fixed and will not change frequently( like cityName) then we should go 
   for String object.

2. If the content is not fixed and keep on changing but thread safety is required  then we should go
   for StringBuffer.


3. If the content is not fixed and keep on changing but thread safety is not required then we should go 
   for StringBuilder object.


*/
