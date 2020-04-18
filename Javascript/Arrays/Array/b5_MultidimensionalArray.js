/* 
Multidimensional Array
============================
Multidimensional array is Arrays of Arrays. 
Multidimensional array can be 2D, 3D, 4D etc. 

Ex: - 
 2D - var name[ [ ], [ ], [ ] ] 

 */

// Storing elements in 2d array using array literal

var elements = [
    ['vikas', 'sachin', 100],
    ['ravi', 'amar', 400]

]
// Storing elements in 2d array using the constructor.

var element = new Array(["vikas", "sehwag", "schin"], ["ravi", "amit", "singh"]);

// accessing elements of first array

for (let i = 0; i < elements.length; i++) {

    for (let j = 0; j < elements[i].length; j++) {
        console.log(elements[i][j]);
    }
    console.log("\n");
}


/* 
PS C:\Users\Vikas.Gautam\Desktop\GitV2\Javascript\Arrays\Array> node b5_MultidimensionalArray.js
vikas
sachin
100


ravi
amar
400

*/

