// -----------  duplicate element 

const number = [1,2,3,3,4,5,66,5,5,6];


   //  -------- short cut for no-duplicate array create 

// function noDuplicate(array){
//    return [...new Set(array)]; 
// }

// --------------  expanded way for no-duplicate array 

function noDuplicate(array){
   const unique = [];
for(const item of array){
      if(unique.includes(item) === false ){
         unique.push(item);
      }
}
return unique;

}

console.log(noDuplicate(number));