console.log("one");
//setTimeout(function() { console.log("two"); },5000);
var my_array = [];
for(var i=0; i<200000000; i++) {
  my_array.push(i);
  //console.log(i);
}
console.log(my_array.length);
console.log("two");
console.log("three");
