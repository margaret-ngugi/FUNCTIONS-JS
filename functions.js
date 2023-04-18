//You manage a grocery store and need to keep track of the inventory
 //of various itemsYou will use arrays to store the data and various 
 //functions to manipulate and analyze the data. 

 //1.Create an array containing the names of all items in the inventory maximum of 10.
 const names = ["sukuma","cabbage","tomatoes","potatoes","carrots","onions","oranges"
,"mangoes","apples","melons"]
               


 //2.Create a separate array with the corresponding stock quantities of each item maximum of 10.
const stock = [3,5,7,8,9,2,5,6,7,8]

 //3.Write a function to add a new item to the inventory, updating both arrays.
    
    const name = ["sukuma","cabbage","tomatoes","potatoes","carrots","onions","oranges"
    ,"mangoes","apples","melons"]
  const stock2 = [3,5,7,8,9,2,5,6,7,8]
    function numArray(){
    name.push("lemons")
    console.log(name);
     stock2.push(4)
    console.log(stock2)
    
 }
 numArray()


 //4.Write a function to update the stock quantity of an existing item.
 function newStock(){
   const stock4 = [3,5,7,8,9,2,5,6,7,8]
   console.log(stock4);



 }

 newStock();


 //5.Write a function to calculate the total number of items in the inventory.
  
 function totalNumber() {
   const stock3 = [3,5,7,8,9,2,5,6,7,8]
  let i = 0;
 let sum = 0;

while(i<stock3.length){
    console.log(stock3[i]);
    sum += stock3[i]
   
    
    i++;
}
console.log({sum});

 }
 totalNumber()



 //6.Write a function to find the item with the lowest stock quantity.
 function lowestStock(){
    const stock1 = [3,5,7,8,9,2,5,6,7,8]
    const lowest = Math.min(...stock1);
    console.log("lowestNumber:"+lowest);


 }
 lowestStock()

