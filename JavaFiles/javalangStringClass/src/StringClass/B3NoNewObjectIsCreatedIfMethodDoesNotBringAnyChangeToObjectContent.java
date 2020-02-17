
package StringClass;

 class Demo5 {


        public static void main(String[] args)
        {


            String s1 ="durga";

                    // Object created in String constant pool.

            /*

              heap                                  SCP


                                              s1---->  durga--->object
             */



                String s2= s1.toString();

              /*


              Now we are calling toString() method in object present in SCP. But
              this does not bring any change to the content of the object hence no new
              object will be created in the heap area instead s2 reference will be
               assigned to already existing object that is object will be shared.



              heap                                  SCP


                                        s1----->  durga--->object
                                                       ^
                                                       |
                                         s2 ------------


                */


              System.out.println(s1==s2);  // true


         String s3= s1.toLowerCase();

            /*

                This also does not bring any change to state of s1 object hence s3 reference
                will be assigned to the object to which s1 is pointing to .


              heap                                  SCP


                                        s1----->  durga--->object
                                                       ^
                                                       |
                                         s2 ------------
                                                       ^
                                         s3------------|
           */



          String s4= s1.toUpperCase();

            /*
            This brings a change to state of s1 which is lower case. Hence a new object will
            be created in the heap area.


              heap                                  SCP


                                       s1----->  durga--->object
                                                       ^
                                                       |
                                         s2 ------------
                                                       ^
                                         s3------------|


        s4----->DURGA

            */


         String s5=s4.toLowerCase();

         /*

         This brings a change to state of s4 object which is upper case hence a new object
         will be created in the heap memory

         This brings a change to state of s1 which is lower case. Hence a new object will
         be created in the heap area.


              heap                                  SCP


                                       s1----->  durga--->object
                                                       ^
                                                       |
                                         s2 ------------
                                                       ^
                                         s3------------|


        s4----->DURGA


        s5----->durga



         */


        }





 }
