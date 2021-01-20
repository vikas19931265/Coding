/*

very important(****)


Because of run time operation, if there is a change in content then with those changes a new
object will be created on the heap memory.

If there is no change in the content then existing object will be reused and new
object will not be created. This point is applicable for change only in the current object.
It may be possible the change we are bringing might be present in other object but that does
not matter. The concern is only for the current object. Objects can be duplicate in heap memory
example two objects can exist in heap with same content "Durga".






Weather the object is present in heap or SCP , the rule is same.

*/
package StringClass;


class Demo2{


    public static void main(String[] args)
    {

        String s1= new String("durga");

        String s2 = s1.toUpperCase();

        String s3= s1.toLowerCase();  // there is no change in content on which s1 called. Hence no new object will
                                      // be created and existing object will be reused. s1 is pointing to durga hence s3
                                      // will also start pointing to durga. s1 and s3 references will become equal now.



        String s4= s2.toLowerCase();// new object will be created as s2 content is uppercase and changing to lower
                                    // case will bring a change in state of object

        String s5= s4.toUpperCase();// new object will be created as s4 content is lowercase and changing to upper
                                    // case will bring a change in state of object

        System.out.println(s1==s2); // false

        System.out.println(s1==s3); // true
    }


}
/*

HEAP                                            SCP


s1------> durga(object)
           ^                                    durga(object)
           |
s3--------


s2-------durga(object)



s4------> durga(Object)


s5------> durga(Object)


*/