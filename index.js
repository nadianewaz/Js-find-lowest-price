let phones = [
   
    {name: "xioami", price: 38000, ram: "128GB"},
    {name: "symphoney", price: 19000, ram: "128GB"},
    {name: "redmi", price: 28000, ram: "128GB"},
    {name: "huwai", price: 59000, ram: "128GB"},
    {name: "symphoney", price: 23000, ram: "128GB"},
];

let lowestValue = phones[0];
for(let singlePhone of phones){
    if(singlePhone.price < lowestValue.price){
        lowestValue  = singlePhone;
        console.log(lowestValue);

    }
   
}
