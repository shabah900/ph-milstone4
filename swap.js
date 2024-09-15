let a=10;
let b=2;

console.log(a,b);
// -------  distraction swap 
[a,b]=[b,a];


 console.log(a,b);


const height = [ 1,2,3,4,5,6,7];

function getmax(numbers){
      let max = numbers[0] ;
    for(const num of numbers ){
        if(num >=max ){
            max=num;
        }
    }
    return max ;
}
const max = getmax(height);
console.log(max);