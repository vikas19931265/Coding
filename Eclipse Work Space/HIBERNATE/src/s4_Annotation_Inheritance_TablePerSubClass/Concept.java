package s4_Annotation_Inheritance_TablePerSubClass;
/*
Table Per Subclass using annotation
=========================================


As we have specified earlier, in case of table per subclass strategy, tables are created as per 
persistent classes but they are treated using primary and foreign key. 	

So there will not be any duplicate column in the relation.

We need to specify @Inheritance(strategy=InheritanceType.JOINED) in the parent class 
and @PrimaryKeyJoinColumn annotation in the subclasses.

Let's see the hierarchy of classes that we are going to map.


*/