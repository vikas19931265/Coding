
/*

        Object
              base1 
                    der1
                    der2

               base2     
                    derv3
                    derv4    

Base2 b = new Derv4()     
        
    a) Object o=(Base2) b;
        
            i) b is of type base2 and getting converted to base2 hence compile fine.
            ii) base2 converted type held by object reference o which is parent of all classes hence compile fine.
            iii) b is of type Base2 whose run time object is Der4 and Base2 is parent of Der4 hence run time also fine.

    b) Object o= (Base1)b;

            i)b is of type base2 and getting type casted to Base1 , Base1 and base2 have no relationship hence compile time error
                    error: incompatible type , required base1 found base2

    c) Object o= (Dev3) b;

            i) b is of type base2 and Dev3 is child of base2 hence compile fine.
            ii) Dev3 object held by reference of type Object hence compiles fine.
            iii) Run time object of base2 is der4 and der3 is not parent of der4 hence run time error ( classCastException)

    d) Base2 b1 = (Base1) b;

            i) b is of type Base2 and getting type casted to base1 having no relationship with base2 hence compile time error.

    e) Base1 b1= (Derv4) b;

            i) b is of type base2 having relationship with derv hence compile fine.
            ii) Derv4 object is not a child of b1 of type Base1 hence compile time error.

    f) Base b1=(Derv1)b;
      
            i) b is of type base2 and getting converted to Derv1 having a relation hence compiles fine.
            ii) Base1 is parent of Derv1 object hence compiles fine.
            iii) Derv1 is not parent of run time object of b of type Derv4 hence classCastException.

*/


//--------------------------------------------------------------------------********--------------------------------------------------------------




