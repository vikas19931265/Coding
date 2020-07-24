/*
contains
==========================

It is used to check the object is associated with session or not

public boolean contains(Object object);


flush()
===============
This method is called by the hibernate before commit the trasaction and close the session.

NOTE:

If we are not calling the flush() explicitly in the application hibernate calls the flush()(in commit()) 
before commiting the tx. If we are calling flush() method explicitly hibernate won't call the flush() method.

when we call flush() following steps will executes.

--prepares appropriate query based on requirement

for example if the method is save() INSERT query, if the method is update() or merge() UPDATE query.

--Creates statement or prepared statements to process the above query.

--Invoke setters to set the data for the query.
	pstmt.setInt(1,st.getSno());
	pstmt.setString(2,st.getSname())

--execute the query using statement or pstmt 

setFlushMode(-)
================================

Hibernate automatically calls the flush() before commiting the transaction (tx.commit()).

we can set or change the session flush mode using setFlushMode(-).

public void setFlushMode(FlushMode flushMode);

the default value for flush mode is AUTO, so automatically calls the flush() method.
if the flush mode value is MANUAL, we have to call the flush() explicitly.

code to change the flush mode
session.setFlushMode(FlushMode.MANUAL);

NOTE: to get the flush mode for the current session use following method.

public FlushMode getFlushMode();

EX:
--
--
s.o.p(session.getFlushMode())//AUTO

So the default value for flushmode is AUTO.



*/