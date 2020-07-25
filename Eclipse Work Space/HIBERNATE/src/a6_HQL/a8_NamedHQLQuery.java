/*

Named HQL Query
================


The hql query that is placed in hibernate mapping file having logical name for global visiblity is called named hql queries.

Generally in the real world we can write the queries inside the mapping file.

steps to work with named queries
---------------------------------
1.placed the hql query inside the mapping file by using <query> tag.

it is child tag of <hibernate-mapping>

<hibernate-mapping>
--
--
<query name="GET_ALL_RECORDS_STUDENT">
from Student
</query>
</hibernate-mapping>




*/