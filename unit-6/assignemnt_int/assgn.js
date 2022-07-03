/*https://jsfiddle.net/s1yapmnv/3/#
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
var ans = document.getElementById('display_unique')
let abs = document.getElementById('display_count')
let count = 0;

function handle_count(){
  abs.innerText = null;
 
   let ob= {}
    for(let i = 0; i<listOfProducts.length; i++){
       let char = listOfProducts[i].productName
       
       if(ob[char] == undefined){
         ob[char] = 1
         
     }
     else{
      ob[char] += 1
       }
    }
    for(let key in ob){
     let list = document.createElement('li')
     list.innerText = `${key} : ${ob[key]}`
     abs.append(list)
     
     
}

}
function handle_unique(){

 let ob = {}
 if(count == 0){
     

   for(let i = 0; i<listOfProducts.length; i++){
       let char = listOfProducts[i]
       
       if(ob[char.productName] == undefined){
         ob[char.productName] = char;
         
     }
     else{
      ob[char.productName].quantity += listOfProducts[i].quantity
       }
    }
    
}

count++


   
    
    for(let key in ob){
    
     let ul = document.createElement('ul')
     let l1=document.createElement('li')
     let l2 = document.createElement('li')   
     let l3 = document.createElement('li')   
     l1.innerText = `productName : ${ob[key].productName}`
     l2.innerText = `quantity : ${ob[key].quantity}`
     l3.innerText = `description : ${ob[key].description}`
     ul.append(l1,l2,l3)
     ans.append(ul)
}
    
}


