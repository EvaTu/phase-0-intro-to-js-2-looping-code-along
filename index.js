// Code your solutions in this file
/*for (let age=30;age<40;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
*/

/*const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and add a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);
*/

function writeCards(namesArray,event){
    let thankYouCards = []
    for(let i=0;i<namesArray.length;i++){
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
return thankYouCards
}


function countDown(){
    let count = 10;
    while (count>=0){
    console.log(count);
    count = count-1;
    }
}