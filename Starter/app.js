// function greet(whattosay) {
//
//   return function(name) {
//     console.log(whattosay + " " + name);
//   }
// };
//
// let sayHi = greet('Hi');
//
// sayHi('Tony');


//understanding closers
//global ex context
//greet() invocation creates a new context "Hi"
//greet() context is done
//space in memory is created in the invocation,
//even though the stack is done, the memory of the value still exists
//anon function is now invoked sayHi('Tony')
//outter lexical enironment reference created, thus searching for variable sayHi --> greet('hi')


//this is called closure and allows 'nested' function to reference each other and is native to JS programming

//
//
// function buildFunctions() {
//   var arr = [];
//
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       function() {
//         console.log(i);
//       }
//     )
//   }
//   return arr;
// };
//
// var fs = buildFunctions();
//
// //free variables, must use the var keyword inside the master function
// fs[0]();
// fs[1]();
// fs[2]();


//each function invocation was logged as 3, rather than 1, 2 ,3
//why?
//the execution stack is buildFunctions(), fs
//buildFunctions() invocation
//as the loop runs, it adds a new function to the array
//the loop adds this function to the array 3 times
//the function has not logged yet
//thus the invocation array now has 3 functions
//then the arr is returned with 3 functions
//now the next fs buildFunctions() is called

//regardless of which position we asked for in the array return, the answer will be 3
//because the array can only return the number of objects it holds at the time of execution
//the array position can be called on any number less than that defined in the loop and will return the SAME
//amount of objects



//how to output an actual number inside the variable??
// let

//ESC6 --- USE THIS ONE!!!!


function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    let j = i;
    arr.push(
      function() {
        console.log(j);
      }
    )
  }
  return arr;
};

var fs = buildFunctions();

//free variables, must use the var keyword inside the master function
fs[0]();
fs[1]();
fs[2]();


//how to do this in ES5?

// function buildFunctions() {
//   var arr = [];
//
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function(j) {
//           return function(){
//             console.log(j);
//           }
//         }(i))
//     )
//   }
//   return arr;
// };
//
// var fs = buildFunctions();
//
// //free variables, must use the var keyword inside the master function
// fs[0]();
// fs[1]();
// fs[2]();
