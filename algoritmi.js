// display in the console the numbers from 1 to 20

console.log ("resultsForExercise1");


for (var i=0; i<=20; i++){
    console.log(i);
}

// display in the console the odd numbers from 1 to 20


console.log ("resultsForExercise2");

for (var n=0; n<=20; n++){
    if (n%2 !==0){
        console.log(n);
    }
}

// compute the sum of the elements of an array and display it in the console

console.log ("resultsForExercise3");

var arr = [3, 5, 2, 10, 6, 8];
var s=0;

for(var index=0; index<arr.length; index++) {
    var number= arr[index];
    s=s+arr[index];
}
console.log(s);

// compute the maximum of the elements of an array and display it in the console 

console.log ("resultsForExercise4");

var array= [15, 400, 2, 89, 7, 50, 24, 76, 13];
var max= array[0];

for(var index2=1; index2<array.length; index2++) {
    if(array[index2]>max){
        max=array[index2];
    }
}
console.log(max);


// compute how many times a certain element appears in an array

console.log ("resultsForExercise5");

var array2= [15, 4, 2, 4, 7, 24, 4, 13, 4, 200, 5, "4", 4];
var certainElement=4;
var numberOfFindings=0;

for(var index3=0; index3<array2.length; index3++) {
    if(array2[index3]===certainElement){
        numberOfFindings++;
    }  
}
console.log(`The element "${certainElement}" appears in the array of: ${numberOfFindings} times`)

/* Challenge - using nested for generate the following pattern 
  0 1 0 1

  1 0 1 0

  0 1 0 1

  1 0 1 0
*/

console.log ("resultsForChallenge");

var array3= [[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]];

for(var index4=0; index4<array3.length; index4++){
    var line="";
    for(var index5=0; index5<array3[index4].length; index5++){
        line+= ` ${array3[index4][index5]}`;
    }
    console.log(line);
}




