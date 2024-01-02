// basic functions 
/*
function addTwo(num : number){
    return num
}

console.log(addTwo(5));*/



// function loginUser( name : string, email : string, phone : number, isAdmin : boolean ){
//     return `Hello ${name} , you logged in from ${email}`
// }

// ---------------------------------------------------------------------------------
// ----------------Arrow functions-----------------------------------
// ---------------------------------------------------------------------------------


/*
const getHello = ( s : string) : string => {
    return "using arrow functions"
}*/


// const heros = [ "Thor", "Loki", "Iron man ", "Spiderman" ];
// const heros = [ 1,2,3,4,5 ];

// heros.map( hero => {
//     return `hero is ${hero}`;
// });


// ==========================================================================================================================
/* using void when there is no return message 

function logErrors(errMsg : string ): void{
    console.log("Using void...................")
    // return "something string" // this would cause error beccause we are using return type as void which mean you are returning nothing 
}*/

/* never can be used as well as void ........ 
function handleErros(errMsg: string) : never{
    throw new Error(errMsg);
} 

// NOTE : the never represents the value which are never observed . In a return type , this mean that the function throws an exception or terminates execution of the program .
// ..... never also appears when TypeScript determiines ther's nothing left in a union 
// ==========================================================================================================================
*/



