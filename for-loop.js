

for(let i=0 ;i<=10;i++){
    console.log('rohan')
}


//---------------break ---------

for(let i=0 ;i<=10;i++){
    console.log('rohan',i);
    if(i==7){
        break;
    }
}

// ------------ continue = skip this one 
for(let i=0 ;i<=10;i++){
    
    if(i==7){
        continue;      // i=7 , skip rest of the code 
    }console.log('rohan',i);
}