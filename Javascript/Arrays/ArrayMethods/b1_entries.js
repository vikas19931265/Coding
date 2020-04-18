/* 
Entries function
=================

The entries() method creates a new iterator object of an array, holding the key/value pairs for
every value in the array. A key represents the index number carrying an item as its value. It does not affect the original array.

It does not accept any parameters.

Return
===========

Returns a newly created iterator object.
*/

var elements = new Array("vikas", "sachin" ," sehwag");
var itr= elements.entries();
for(var it of itr)
{
    console.log(it);
}

/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Arrays\ArrayMethods> node a2_entries.js
[ 0, 'vikas' ]
[ 1, 'sachin' ]
[ 2, ' sehwag' ]
*/