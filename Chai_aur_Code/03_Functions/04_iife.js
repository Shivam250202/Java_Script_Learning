(function chai(){
    // immediately invoked function expression (IIFE)
    console.log("Hello, this is an IIFE!");
})();
// ; use to separate statements of IIFE from other code
((name) => {
    console.log( `Hello, ${name}! This is an IIFE with an arrow function.` );
})(`Shivam`)