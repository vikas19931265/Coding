package collections_queue;

/*
1.6 Version Enhancement in Collection Framework.

1. As a part of 1.6 version the following two concepts introduced in collection framework.

        i. NavigableSet(Interface)
        ii. NaviabaleMap(Interface)



NavigableSet.


1. It is the child interface of SortedSet and it defines several methods for navigation purposes.


        Collection(I)
            \       
             Set(I)
                \
                 SortedSet(I)
                    \
                    NavigableSet(I)
                        \
                        TreeSet(I)



NavigableSet defines the following methods.

1. floor(e)

    It returns highest element which is <=e

2. lower(e)

    It returns highest element which is <e

3. ceiling(e)

    It returns lowest element which is >=e

3.t.higher(e)

    It returns the lowest element <e

4. pollFirst()

    It removes and return the first element.

5. pollLast()

    It removes and return the last element.

6. descendingFirst()

    It returns NavigableSet in the reverse order.

*/

//------------------------------------------------------------********************************---------------------------------------