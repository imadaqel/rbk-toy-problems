/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.

You can assume an input which looks like this:

var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]
Calling your function should result in:
tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];

Remember: your function should work off of the data it receives, 
not a global variable or only the specific example above. 
I.e. If someone called your function with 10 objects 
(with all safely have the same properties), it should work just as well.
*/

<<<<<<< HEAD
var newarray=[]
function tallEnoughToRide(array){
  for (var i=0;i<array.length;i++){

if (array[i]['heightInInches'] >= 48){

newarray.push(array[i]['name'])
}
}
   return newarray;
}
tallEnoughToRide(groupA);

=======
// your answer is here
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0

/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).

Calling your function should result in:

tallestPerson(groupA); //"Kiana at 55 inches"


*/

<<<<<<< HEAD
// your answer is here

var newarray=[]

function tallEnoughToRide(array){
  var tallest =array[0]['heightInInches'];
  var tallestname='';
  for (var i=0;i<array.length;i++){

if (array[i]['heightInInches'] > tallest){
  tallest=array[i]['heightInInches'];
  tallestname=array[i]['name']
}
}
   return tallestname + ' at ' + tallest +' inches';
}
tallEnoughToRide(groupA);
=======
// your answer is here
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
