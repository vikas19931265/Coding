/*

Exactly same as previous example same with change only in constants.


String s1= new String("Spring");

s1.concat("summer");

String s2= s1.concat("winter");

s1=s1.concat("fall");

System.out.println(s1);

System.out.println(s2);



String s1= new String("Spring");

        1 object "Spring" in heap(spring object with reference s1) and 1 in SCP for future use.


s1.concat("summer");

        1 object "summer" in SCP and 1 in heap( springsummer(object) with no reference);


String s2= s1.concat("winter");

        1 object "winter" in SCP and 1 in heap(springwinter(object) with s2 reference).


s1=s1.concat("fall");

        1 object "fall" in SCP and 1 object( Spring fall with reference s1 in heap)


TOTAL   8 OBJECTS


S1---------->Springfall

S2---------->SpringWinter


*/


