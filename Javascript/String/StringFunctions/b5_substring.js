/* 
    Substring
    ============

 The substring() is similar to slice(). The first argument specifies the index at which the desired 
 substring begins. 
 
 The optional second argument indicates the index at which the desired substring ends. 
 The method returns a string containing the substring beginning at the given index up to but 
 not including the character at the index speficied by the second argument. 
 
 The difference between slice and substring is that substring() cannot accept negative indexes.
			
			
*/


var str = "Hi guys Lets Learn JavaScript";
console.log(str.substring(8, 14));	// 14 not included
