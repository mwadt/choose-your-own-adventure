const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

const direction = prompt(`Which way do you go, right or left? `);
if(direction === 'left') {
    console.log('You go left!');
    const action = prompt(`You see a Wolf.  What do you do, fight or flee? `);
    if(action === 'fight') {
        console.log('The Wolf kills you');
    } else if (action === 'flee') {
        console.log('You Survived, and its a deadend so you have to go right. ');
        const right2 = prompt('Do you go right?  or right? ');
        if (right2 === 'right')
            console.log('You go right! ');
            const action = prompt(`You run into a village and a farmer asks for your help.  What do you do? `);
            if(action === 'help') {
                console.log('Farmer gives you a bag of silver shards. ');
                const decision = prompt(`Do you sell the shards in the village, or continue to explore? `);
                if(decision === 'sell') {
                    const choice = prompt(`You receive a lot of coins. What will you do with the money? `);
                    if(choice === 'buy the farm') {
                        console.log('You now own the farm, and the farmer is not happy!');
                    } else if(choice === 'save it and continue exploring') {
                        console.log('You save your money and continue to wander through the village! ');
                    }
                } else if (decision === 'continue exploring') {
                    const lifeDecision = prompt('You wandered out of the village and get attacked by a wolf. Do you run or fight');
                    if(lifeDecision === 'run') {
                        console.log(`The wolf eats your legs, and you die slowly.`);
                    } else if(decision ==='fight') {
                        console.log('The wolf eats your legs, and you die slowly.  :(');
                    }
                }
            } else if(action === 'leave') {
                console.log('The Farmer and his family attacks you! ');
                for(i = 4; i >= 0; i--) {
                    console.log(`You knockout one of the family members.  There are ${i} family members left standing.`)
                    if(i === 0) {
                        console.log('The farm is unethically yours!  Think on your sins!');
                    }
                }
            }
    }
 
} else if(direction === 'right') {
    console.log('You go right! ');
    const action = prompt(`You run into a village and a farmer asks for your help.  What do you do? `);
    if(action === 'help') {
        console.log('Farmer gives you a bag of silver shards. ');
        const decision = prompt(`Do you sell the shards in the village, or continue to explore? `);
        if(decision === 'sell') {
            const choice = prompt(`You receive a lot of coins. What will you do with the money? `);
            if(choice === 'buy the farm') {
                console.log('You now own the farm, and the farmer is not happy!');
            } else if(choice === 'save it and continue exploring') {
                console.log('You save your money and continue to wander through the village! ');
            }
        } else if (decision === 'continue exploring') {
            const lifeDecision = prompt('You wandered out of the village and get attacked by a wolf. Do you run or fight');
            if(lifeDecision === 'run') {
                console.log(`The wolf eats your legs, and you die slowly.`);
            } else if(decision ==='fight') {
                console.log('The wolf eats your legs, and you die slowly.  :(');
            }
        }
    } else if(action === 'leave') {
        console.log('The Farmer and his family attacks you! ');
        for(i = 4; i >= 0; i--) {
            console.log(`You knockout one of the family members.  There are ${i} family members left standing.`)
            if(i === 0) {
                console.log('The farm is unethically yours!  Think on your sins!');
            }
        }
    }
}    

