package a5_Pk_GENERATORS;
/*
Increment
===========


this algorithm generates the pk value of type long short or int only.

this algorithm works with all DB s/ws. so it is database independent algorithm.

This algorithm uses max value of pk column+1 formula to generate the pk value.

NOTE: increment algorithm generates SELECT query to get max value from DB.

this algorithm starts with 1

example:
--------
<h-m>
<class ------->
<id name -------->
<generator class="increment"/>
</id>
--
--
</class>
</h-m>


*/