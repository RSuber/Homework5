// code goes here :)

//problem #1
var dicks = items.map(function(element,index,array){
  return element.price
})
function sum(arr){
var sumofnums=0
for (var i=0; i < arr.length ; i++) {
  sumofnums=sumofnums + arr[i]}
  return sumofnums
}
console.log(sum(dicks)/items.length)

//problem #2
items.map(function(element,index,array) {
  if (element.price > 14 && element.price < 18)
  {return (element.price + "    " + element.title)}}).filter(function(element,index,array){
    return (element)
  });

//problem #3
items.map(function(element,index,array) {
  if (element.currency_code === "GBP")
  {return (element.title + "    " + element.currency_code)}}).filter(function(element,index,array){
    return (element)
  });

//problem #4
items.map(function(element,index,array) {
  if (element.materials[0]==="wood" || element.materials[1] === "wood" || element.materials[2] ==="wood" || element.materials[3] === "wood")
  {return (element.title + "    " + element.materials)}}).filter(function(element,index,array){
    return(element)
  });
//problem #5
items.map(function(element,index,array){
  if (element.materials[7])
  {return ( "TITLE:" + " " + element.title + " " + "AMOUNT OF MATERIALS:" + " " + element.materials.length + " " + "MATERIAL TYPE:" + " " + element.materials )}}).filter(function(element,index,array){
    return(element)
  });

//problem #6
var peep = items.map(function(element,index,array){
  if (element.who_made === "i_did")
  { return (element.who_made)}}).filter(function(element,index,array){
    return element;
  });
console.log(peep.length)
