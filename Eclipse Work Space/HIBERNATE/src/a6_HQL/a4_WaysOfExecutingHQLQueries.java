/*

Approach 1
==================

In this approach we are selecting complete object from the database, that means selecting all the columns from DB.

Generally to select all the columns in hql we will go for either query.list() or query.iterate() method.

Using query.list()
-------------------
Here list() method returns list of Student(POJO) objects.
--
--
Query query = session.createQuery("from Student s ");
List<Student> studentList = query.list(); 

for (Student student : studentList) 
{
System.out.print(student.getSno() + "\t");
System.out.print(student.getSname() + "\t");
System.out.print(student.getSemail() + "\t");
System.out.println(student.getSmobile());
}

list() never perform lazyloading.
list() perform early loading.
It returns List of POJO Objects.

here only one time hits the DB when the JVM calls query.list() method.

Using query.iterate();
----------------------
Here iterate() method returns Iterator interface with Student Type.

Query query = session.createQuery("from Student");
Iterator<Student> iterator = query.iterate();

while (iterator.hasNext()) 
{
Student student = (Student) iterator.next();
System.out.print(student.getSno() + "\t");
S.o.p(student.getSname() + "\t");//hits 
//the DB get the records
s.o.p(student.getSemail() + "\t");
S.o.pln(student.getSmobile());
}
--it performs lazy loading.
--it returns Iterator interface with POJO object type.
--multiple number of times hits the DB(n+1 times, here n is no of records).

-- when the jvm call iterate(), this method select only primary key column values, by passing this primary key value to 
the another select query it get the record.

--it hits no of rows in db+1 times.

Approach 2
=======================

In this approach we are selecting the partial object, means selecting specific(limited columns or not all the columns) 
columns form DB.

Generally to select specific columns in hql we will go for either query.list() or query.iterate() method.

Using query.list()
-------------------
Here list() method returns list of Object[] type objects.
Query query = session.createQuery("select s.sname,s.semail from Student s");
List<Object[]> list = query.list();

Iterator<Object[]> iterator = list.iterator();
while (iterator.hasNext()) {
Object[] object = (Object[]) iterator.next();
String name = (String) object[0];
String email = (String) object[1];
System.out.print(name + "\t");
System.out.println(email);
}


Using query.iterate()
--------------------
Here iterate() method return Iterator interface with Object[] Type.

Query query = session.createQuery("select s.sno, s.sname from Student s");

Iterator<Object[]> iterator = query.iterate();

while (iterator.hasNext()) {
Object[] row = (Object[]) iterator.next();
int sno = (Integer) row[0];
String sname = (String) row[1];
System.out.println(sno + "\t" + sname);
}
Note:
Here iterate() doesn't perform lazy loading. and it doesn't hits the DB multiple times in case we are selecting only 
partial columns

Approach 3
=======================

In this approach we can select only one column from the DB.

Here we can use either query.list() or query.iterate() to select only one column. 

Using query.list()
-------------------
Here list() method retuns list of pojo class property data type(String for sname, Integer for sno).

Query query = session.createQuery("select s.sname from Student s");
	
List<String> list = query.list();
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
String sname = (String) iterator.next();
System.out.println(sname);
}
------------------
Using query.iterate()
--------------------
Here iterate() method returns Iterator interface with pojo class property data type(String for sname).

Query query = session.createQuery("select s.sname from Student s");

Iterator<String> iterator = query.iterate();
while (iterator.hasNext()) {
String sname = (String) iterator.next();
System.out.println(sname);
} 


list()
=====================

list is used to get the results from the DB. it returns java.util.List.

here no lazy loading that means if results are used or not used by the programmer calling getxxx() the pojo class object
representing the data.

iterate()
---------
iterate() selects the records from DB by excuting multiple sql select quereis.
it performs lazy loading so it initialize on demond.

NOTE:

While selecting all the columns we will go for list()
while selecting specific columns or limited columns or single column we will go for iterate()

-if we want to process the results in presentation layer or service layer then use list().

-if we want to process the results in data access layer itself then use iterate().

-if we are selecting more no of records use list().

-if we are selecting less no of records use iterate().

*/
