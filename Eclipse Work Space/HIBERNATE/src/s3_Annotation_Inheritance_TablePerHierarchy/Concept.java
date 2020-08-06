package s3_Annotation_Inheritance_TablePerHierarchy;
/*
Table per Hierarchy
===========================


In the previous page, we have mapped the inheritance hierarchy with one table using xml file. 
Here, we are going to perform this task using annotation. 

You need to use @Inheritance(strategy=InheritanceType.SINGLE_TABLE),
@DiscriminatorColumn and
@DiscriminatorValue annotations for mapping table per hierarchy strategy.

In case of table per hierarchy, only one table is required to map the inheritance hierarchy. 
Here, an extra column (also known as discriminator column) is created in the table to identify the class.




*/