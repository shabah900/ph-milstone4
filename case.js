const school = 'raj uttora model school';

// -------- string case sensitive .... uppercase lowercase same na 
const subject= 'Chemistry';
const book = 'chemistry';
if(subject==book){
     console.log('true');
}
else{
    console.log('false');
}

console.log(book.toUpperCase());    // convert into upper case 

const drink= 'water';
const liquid = 'water ';
if(drink===liquid){
     console.log('true');
}
else{
    console.log('false');
}
if(drink.trim()===liquid.trim()){   // trim use korle word ar age piche j space thake ta bad jay 
     console.log('true');             // but word ar majhe kono space takle trim ta komabe na 
}
else{
    console.log('false');
}


