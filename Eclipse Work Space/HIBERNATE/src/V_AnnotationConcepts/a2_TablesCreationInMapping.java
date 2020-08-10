/*

@ManytoOne
==============

foreign key column that is the child reference  is created in the parent table


@OneToMany
=================

This will create a new table to maintanin the relationship. But using bidirectional mapping
we can remove this extra table.

If unidrectional additional table is created keeping the relationship.

If bidirectional that is from other side it is @ManyToOne then the reference is created in the
parent table.

So in this way we get two relationships, and to keep one only relationship of the parent reference in child
table we go for mappedby


@ManytoMany
================

In this case also new table will be created but the new table is important to maintain the relationship 
hence we should not remove it.

*/