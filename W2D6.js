/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d

*/
<<<<<<< HEAD

function loopAString(str) {
  var i=0;
  while(i< str.length){
    console.log(str[i]);
  i++;

  }}

  loopAString("hello");

=======
function loopAString(string) {
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
  // create an index variable
  // create a loop which iterates over the input string
  // log current string character to the console
  // increment value of index variable
}


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here



<<<<<<< HEAD

function reverseStr(str) {
  var i=str.length-1;
  var j=1;
  var x='';
  
  while(i>-1){
    x=x+str[i]+j;
  i--;
  j++;
  }
  console.log(x);
  }

  reverseStr("hello");


=======
>>>>>>> 1fec366795f0a180299250b09e2518b56c1dcea0
