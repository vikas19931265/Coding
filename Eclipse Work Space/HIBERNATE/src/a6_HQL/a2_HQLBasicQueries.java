/*

1.SQL: select * from tb_student 
==========================================


HQL:        from Student
			from Student s
			from Student as s
			select s from Student as s
			select s from Student s

Note:
if you want to select all the columns from the DB using hql we can use alias name in the place of *.


2.SQL: select * from tb_student  where no>50 and email like '%gmail.com' 
===============================================================================

HQL:

from Student s where s.sno>50 and s.semail like '%gmail.com'   
select s from Student s where s.sno>50 and s.semail like '%gmail.com' 

3. SQL: select NO, NAME from TB_STUDENT 
===================================================

HQL: select s.sno, s.sname from Student s

4.SQL: select NO, NAME from TB_STUDENT where NO>50 and EMAIL like '%gmail.com'  
=======================================================================================


HQL: select s.sno, s.sname from Student s where s.sno>50 and s.semail like '%gmail.com' 


update
================

update Student as s set s.semail= 'abc@yahoo.com' where s.sno>50

delete
================

delete from Student s where s.sno=50

order by example
========================

from Student s order by s.sno desc

Sub query
=============================

from Student s where s.sno = (select max(st.sno) from Student st)

named parameters
===========================
from Student s where s.sno=:no

positional paramters
===========================
from Student s where s.sno = ?


*/