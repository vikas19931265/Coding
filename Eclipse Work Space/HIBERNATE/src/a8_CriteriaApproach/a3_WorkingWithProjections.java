/*

Useful for working with non select operations.


Steps to work with projections
------------------------------
1.Create Projection objects

Projection p1 = Projections.property("property name")
Ex:
Projection p1=Projections.property("sno")

2.Create ProjectionList object

ProjectionList proList = Projections.projectionList();

3.add projection to the projectionlist;
proList.add(p1);

4.set the projectionlist to the criteria
criteria.setProjection(proList);


*/


