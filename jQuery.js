$(document).ready(function() {
 var result = [];
 var num1;
 var num2;
 var finalNum;
 var holdNum;

 $("#clear").click(() => {
   result = [];
   $("#input").empty();
 });

//.html() sets content and returns it. So here it sets it to the 'result' array and return what was in it to '#input'. 1) Click #2 2) Push 2 into 'result' array --> [2] 3) Return the content of the array to '#input' --> shows 2 on the display
 $("#1").click(() => {
   result.push(1);
   $("#input").html(result);
 });

 $("#2").click(() => {
   result.push(2);
   $("#input").html(result);
 });

 $("#3").click(() => {
   result.push(3);
   $("#input").html(result);
 });

 $("#4").click(() => {
   result.push(4);
   $("#input").html(result);
 });

 $("#5").click(() => {
   result.push(5);
   $("#input").html(result);
 });

 $("#6").click(() => {
   result.push(6);
   $("#input").html(result);
 });

 $("#7").click(() => {
   result.push(7);
   $("#input").html(result);
 });

 $("#8").click(() => {
   result.push(8);
   $("#input").html(result);
 });

 $("#9").click(() => {
   result.push(9);
   $("#input").html(result);
 });

 $("#0").click(() => {
   result.push(0);
   $("#input").html(result);
 });

 $("#decimal").click(() => {
   result.push(".");
   $("#input").html(result);
 });

 $("#plus").click(() => {
   result.push("+");
   $("#input").html(result);
 });

 $("#subtract").click(() => {
   result.push("-");
   $("#input").html(result);
 });

 $("#divide").click(() => {
   result.push("/");
   $("#input").html(result);
 });

 $("#multiply").click(() => {
   result.push("x");
   $("#input").html(result);
 });

 function calculation() {
//running a for loop to get i for our index
   for (let i = 0; i < result.length; i++) {
     if (isNaN(parseInt(result[i])) && (result[i] !== ".") && (i !== result.length -1)) {
//last condition: makes sure that i is not the =.
       var element = result[i];
       num1 = result.splice(0, i).join("");
       num2 = result.splice(1, result.length - 2).join("");

       if (element === "+") {
         finalNum = parseFloat(num1) + parseFloat(num2);
       }

       else if (element === "-") {
         finalNum = parseFloat(num1) - parseFloat(num2);
       }

       else if (element === "/") {
         finalNum = parseFloat(num1) / parseFloat(num2);
       }

       else if (element === "x") {
         finalNum = parseFloat(num1) * parseFloat(num2);
       }
     }
   }
 }

 $("#equal").click(() => {
   result.push("=");
   calculation();
   $("#input").html(finalNum);
   // holdNum = finalNum;
   // $('#input').html(holdNum);
   // calculation();
 });

});
