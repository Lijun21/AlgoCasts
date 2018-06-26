//split-----------------------------------------
var name = 'lijunWang';
console.log(name.split(''));

var myString = 'this|is|a|Test';
var splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

var myString = 'ca,bc,a,bca,bca,bc';

var splits = myString.split(['a','b']); 
// myString.split(['a','b']) is same as myString.split(String(['a','b'])) 

console.log(splits);  //["c", "c,", "c", "c", "c"]

//join-----------------------------------------

var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain