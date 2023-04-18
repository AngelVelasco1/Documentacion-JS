function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        
        if (randomNumber) {
            resolve(randomNumber)
        }
        else {
            reject("Can't obtain the random number")
        }
    })
}

getRandomNumber() 
    .then((num) =>  {
        console.log(`The random number is ${num}`)
    })
    .catch((error) => {
        console.error(`Error: ${error}`)
    })
