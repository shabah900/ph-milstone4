const products = [
    {name :'pen' ,price: 10 , quantity : 2},
    {name :'khata' ,price: 40 , quantity : 4},
    {name :'rubber' ,price: 5 , quantity : 2},
    {name :'pad' ,price: 100 , quantity : 1,}
]

function totalcost(products){
    let total =0 ;
    for(const product of products){
        total = total + product.price*product.quantity;
    }
    return total ;
}

const HaveToPay = totalcost(products);
console.log(HaveToPay);