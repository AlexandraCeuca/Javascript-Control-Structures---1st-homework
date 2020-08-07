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

var arr = [3,5,2,10,6,8];
var s=0;

for(index=0; index<arr.length; index++) {
    var number= arr[index];
    s=s+arr[index];
}
console.log(s);

// compute the maximum of the elements of an array and display it in the console 

console.log ("resultsForExercise4");
