/*

Cache:
===================

Hibernate gives inbuilt support for Cache.

Cache is a mechanisam to store loaded objects from the DB.

By using cache we can improve the performance of the application.

there are two types of cache in hibenrate

1.FirstLevel cache(Level 1 cache)
2.SecondLevel cache(Level2 cache)

FirstLevel Cache
=========================================

It is defualt cache in HB.

When we activate hb environment by default we can see level1 cache in the application.

Level1 is associated with hb session. the scope of level1 cache is limited to session only.

for example
--
--
--
Student student1 = (Student)session1.get(Student.class, 1);
--
--
--
Student student2 = (Student)session1.get(Student.class,1);

both of them here will return the same object since the object is already present in the cache.

If we run above appilcation we can see only one select query on the console. here student2 object 
is loaded from session or level1 cache.


Example
-------
--
--
--
Session session1 = sf.openSession();
Student student1 = (Student)session1.get(Student.class, 1);
--
--
--
Session session2 = sf.openSession();
Student student2 = (Student)session2.get(Student.class,1);


If we run above application we can see two select queries.here
we are loading student objects from different sessions.

Second level cache or level2 cache.
=================================================

It is not a default cache, we have to configure explicitly in the configuration file.

Level2 cache is associated with session factory.

Whenever we loaded one object from the db, hb verifies that object availbele in session or not.
If not available in session, it searches in session factory (level2 cache). if the data is not available 
in level2 cache hb hit the DB get the record and stored in level2 cache and level1 cache.

If we are executing same query from same session or different session, the data will be loaded from
 either session or sessionfactory.

Different vendors provides the level2 cache.

EHCache
swarm cache
JbossCache.
OS Cache
and so on...



*/