// const add =(a,b)=>a+b
// function sum(a,b)
// {
//     console.log("Before return");
//     return(a+b);
//     console.log("after return");
// }
// console.log(sum(10,20))

//Asynchronous programing.........
//register()
//send Email()
//login()
//getdata()
//display data()
function waitfortwoseconds()
{
    const ms=new Date().getTime()+1000;
    while(new Date().getTime()<ms);
}
function register()
{
    waitfortwoseconds();
    console.log("register end");
}
function sendemail()
{
    waitfortwoseconds();
    console.log("email end");
}
function login()
{
    waitfortwoseconds();
    console.log(" login end");
}
function getData()
{
    waitfortwoseconds();
    console.log("data end");
}
function displayData()
{
    waitfortwoseconds();
    console.log("Display end");
}
register();
sendemail();
login();
getData();
displayData();
console.log("other Application")

