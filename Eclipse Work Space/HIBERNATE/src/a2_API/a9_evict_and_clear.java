package a2_API;
/*
evict function
=================

It is used to remove one object from the session cache or level1 cache or localCache.

By calling evict(-), persistant state object will become detached state object.

syntax
-------
public void evict(Object object)

Ex:
Student st=(Student)session.get(--);
s.o.p(session.contains(st))//true
//remove object from session
session.evict(st);
s.o.p(session.contains(st))//false

clear()
=============================


clear() is used to clear the session or level1 cache.
means using clear() we can remove all the instances from the session.
syntax:
public void clear();

Ex:
---
---
session.clear();




*/