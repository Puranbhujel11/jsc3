 function exercise (cardio) {
     return () => `Today's excercise is ${cardio}` ;
 }

 var run = exercise("running");
 console.log (run());

 var swim = exercise("swimming");
 console.log (swim());
 
 
