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
var numberone =(sum(dicks)/items.length)
document.getElementById("answer1").innerHTML = `<h1>$${numberone} </h1>`

//problem #2
var numbertwo = items.map(function(element,index,array) {
  if (element.price > 14 && element.price < 18)
  {return (element.price + "    " + element.title)}}).filter(function(element,index,array){
    return (element)
  });
document.getElementById("answer2").innerHTML =`<h1>$${numbertwo}</h1>`
//problem #3
var numberthree = items.map(function(element,index,array) {
  if (element.currency_code === "GBP")
  {return (element.title + "    " + element.currency_code)}}).filter(function(element,index,array){
    return (element)
  });
document.getElementById("answer3").innerHTML =`<h1>$${numberthree}</h1>`
//problem #4
var numberfour = items.map(function(element,index,array) {
  if (element.materials[0]==="wood" || element.materials[1] === "wood" || element.materials[2] ==="wood" || element.materials[3] === "wood")
  {return (element.title + "    " + element.materials)}}).filter(function(element,index,array){
    return(element)
  });
  document.getElementById("answer4").innerHTML =`<h1>$${numberfour}</h1>`
//problem #5
var numberfive = items.map(function(element,index,array){
  if (element.materials[7])
  {return ( "TITLE:" + " " + element.title + " " + "AMOUNT OF MATERIALS:" + " " + element.materials.length + " " + "MATERIAL TYPE:" + " " + element.materials )}}).filter(function(element,index,array){
    return(element)
  });
document.getElementById("answer5").innerHTML =`<h1>$${numberfive}</h1>`
//problem #6
var peep = items.map(function(element,index,array){
  if (element.who_made === "i_did")
  { return (element.who_made)}}).filter(function(element,index,array){
    return element;
  });
document.getElementById("answer6").innerHTML =`<h1>$${peep.length}</h1>`
