let elements=[
    'jan', 'feb', 'mar','apr','may','june','jul'
]

console.log(elements.splice(1,0,'test')); 
        /* 
            remember when we are inserting elements
            , new element will take the specified position specified and
            push the rest of elements to the right.    
        */
        
console.log(elements);

/* 
[
  'jan',  'test',
  'feb',  'mar',
  'apr',  'may',
  'june', 'jul'
]

*/
