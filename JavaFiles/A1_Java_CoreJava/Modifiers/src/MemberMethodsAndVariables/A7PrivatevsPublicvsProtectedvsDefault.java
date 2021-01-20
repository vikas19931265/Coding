package MemberMethodsAndVariables;

/* Summary table of private , default, protected and public modifiers


Visibility                 private         default             protected                    public
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

within the same class      yes              yes                 yes                             yes

within child class of      no               yes                 yes                             yes
same package

From non child class       no              yes                  yes                             yes
of same package

From child class of        no              no                   yes(should use                  yes
Outside package                                                     child ref only)


From non child class       no               no                  no                               yes   
of Outside package



2. The most restricted access modifier is private .

3. The most accessible modifier is public.


            private < default < protected < public

4. Recommended modifier for data members ( variables) is private. But recommended modifier for methods is public.


*/

//---------------------------------------------------------------------------------*******************--------------------------------------