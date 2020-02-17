/*

very important(****)


1.Because of run time operation, if there is a change in content then with those changes a new
  object will be created on the heap memory.

2.If there is no change in the content then existing object will be reused and new
  object will not be created. This point is applicable for change only in the current object.
  It may be possible the change we are bringing might be present in other object but that does
  not matter . The concern is only for the current object.

3.Objects can be duplicate in heap memory example two objects can exist in heap with same content "Durga".

4. Here in this program s1 is pointing to String object durga which is in the lower case. Now we are applying
   lower case method on this object which will not lead to any change in the content of the object and
   hence no new object will be created and same object will be shared.

5.But when we apply uppercase() method then this leads to the change in the content of the object
  hence this will lead to the creation of the new object.



Weather the object is present in heap or SCP , the rule is same.

*/
package StringClass;


class Demo {


    public static void main(String[] args)
    {

        String s1= new String("durga");

        String s2 = s1.toUpperCase();//New Object is created as lower case changed to upper case.

        String s3= s1.toLowerCase();  // there is no change in content on which s1 called. Hence no new object will
                                      // be created and existing object will be reused. s1 is pointing to durga hence s3
                                      // will also start pointing to durga. s1 and s3 references will become equal now.

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

*/

