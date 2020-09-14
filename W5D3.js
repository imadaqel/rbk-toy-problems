/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
 function map(coll, f) {
  var acc = [];
 if(Array.isArray(coll)){
 	acc={}
 }
 each(coll, function(element, key){
  acc[key]=f(element, key);

 })
 return acc;
}

 function uppercaseValues(obj){
   var arr={}
 map(obj,function(value,key){
//var x=1
 		if (typeof(value)==='string'){
       console.log(value)
        var x= value.toUpperCase() 
         arr[key]=x;
     }
        
 		
 	})
 	return arr;
 }

 uppercaseValues({a:"hi",b:"hiiiii",c:11})




/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/
function sum(numbers) {
return reduce(numbers,function(sum,number,i){
 sum+=number;
return sum;
})
}
sum([1,2,3,4,8])