/*
Pojo states
==================


There are 3 types of POJO states.

1.transient
2.persistant
3.detached



transient:
================

never persistent, not associated with any Session.
Means In this state, POJO class object doesnot represents record in the table and that object does 
not contain identity(pk) value. Transient object was not associated with the session.It is just ordinary POJO class object 



persistent:
==================

associated with a unique Session.

Means In this state, POJO class object represents table row in the DB(flush()).
This state object contains indentity(pk) property value.

here pojo object associated with session.


detached:
================
previously persistent, not associated with any Session


Note
===========

Transient instances may be made persistent by calling save(), persist(), update() or saveOrUpdate()---------.

Persistent instances may be made transient by calling delete(). 

Any instance returned by a get() or load() method is persistent. 

when we call evict(), clear() and close(), persistant object become detached object.

when we call update(), merge() the detached object will become persistant.

when we call flush(), hibernate maintain the sync between session cache with db.



*/