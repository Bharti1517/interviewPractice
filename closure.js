
// Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
function OuterFunction() {
    //Now, as per the definition above, InnerFunction() can access outerVariable even if it will be executed separately. Consider the following example.
    var outerVariable = 100;
    function InnerFunction() {
        console.log('InnerFunction : ',outerVariable);}
    return InnerFunction;
}
var abc = OuterFunction();
console.log(abc);
abc();

/*
In the above example, return InnerFunction; returns InnerFunction from OuterFunction when you call OuterFunction().
A variable abc reference the InnerFunction() only, not the OuterFunction().
So now, when you call abc(), it can still access outerVariable which is declared in OuterFunction(). This is called Closure.
*/

/*
 value of the outer variables will be changed if you change it using inner function.
*/

/*
When to use Closure?
Closure is useful in hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions.
*/

// https://www.tutorialsteacher.com/javascript/closure-in-javascript
