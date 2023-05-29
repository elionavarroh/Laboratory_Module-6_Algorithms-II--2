const random = randomIntBetween(1,100)

function randomIntBetween(min,max){
    console.log(Math.floor(Math.random()*(max - min + 1)) + min);
};
