
// =================================================================================================================================
// --------------------- Introduction to Variables  -------------------------------------
// =================================================================================================================================


/* functions with objects
function myName (name : { first : string ; last : string}){
    console.log(name);
}

myName({first : "Sudeep" , last : "bogati"});
*/


/* arrays
const names = ["Sudeep", "Sunil", "Swastika"];
names.forEach( name => {
    console.log(name.toUpperCase());
});
*/


/*define return type in function 
function getFavoriteNumber(): number {
    return 26;
}
getFavoriteNumber()
*/

/* =============================functions==================================== 
function printId (id : number | string){
    if (typeof id === "string"){
        console.log("Your id is : ", id.toUpperCase());
    }
}
printId("23s2rts");


// --------------------------define last as an optional parameter : ------------------------------------------ 
function myName( obj : { first : string ; last? : string }){
    console.log(obj.last?.toUpperCase());
}
myName({ first : "Sudeep ", last : 'bogati'});*/



/* --------------- define the return type to be a Promise ------------------------------- 
async function myFavNum(): Promise<number> {
    return 12;
}

myFavNum().then((n) => console.log("This is my fav number : %d",n)).catch(err => console.log("Opps some error occurred ! "));
-----------------------------------------------------------------------------------------
*/

/* ----------------- passing an array as a param ---------------------------------------
function welcome( x : string[] | string ){
    if (Array.isArray(x)){
        // here x is a array string 
        console.log("Hello ", x.join(" and "));
    }else{
        // x is a sring 
        console.log("Hello lone traveler : %s haahaa", x);
    }
}

welcome("Nepal");
-----------------------------------------------------------------------------------------
*/


// =================================================================================================================================
// --------------------- Type Aliases -------------------------------------
// =================================================================================================================================
/*
type fullName = {
    first : string, 
    last : string
}

function displayName( name : fullName) {
    console.log("Hello mr. %s" , name.last);
}

displayName({ first : "Sudeep", last : "Bogati"});
*/


