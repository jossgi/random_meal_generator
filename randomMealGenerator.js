//Meal ingredient arrays

//Array for mains
const foodMain = ['chicken breast', 'chicken thigh', 'beef steak', 'pork loin', 'gammon steak', 'lamb cutlets', 'turkey mince', 'pork chops', 'beef ribs', 'honey roast ham', 'fish'];
const foodMainVeggie = ['tofu', 'soya', 'black beans', 'chickpeas', 'oat flakes', 'nuts'];

//Array for vegetables
const foodVeg = ['carrots', 'broccoli', 'potatoes', 'kale', 'beetroot', 'mushrooms', 'leek', 'tomatoes', 'cauliflower', 'cabbage', 'peas', 'onions'];

//Array for sauces
const foodSauce = ['gravy', 'peri peri sauce', 'peppercorn sauce', 'teriyaki sauce', 'tomato & herb sauce', 'coleslaw dressing', 'tartar sauce', 'honey mustard', 'chilli sauce', 'horseradish sauce'];

// Settings
const fastText = false; //Set to false for slow text
const textSpeed = 1000; //Set text delay speed in milliseconds
let veggie = false;

// Check if veggie
const myArgs = process.argv.slice(2);
if (myArgs=='veggie'){
    veggie = true;
}

//Grab random ingredients
const getRandomIngredient = arr => {
    const randomNum = Math.floor(Math.random() * arr.length);
    return (arr[randomNum]);
}

let main;
if (veggie){
    main = getRandomIngredient(foodMainVeggie).toUpperCase();
} else {
    main = getRandomIngredient(foodMain).toUpperCase();
}
let veg = getRandomIngredient(foodVeg).toUpperCase();
let sauce = getRandomIngredient(foodSauce).toUpperCase();

//line space
const lineSpace = noOfLines => {
    for (let x=0; x<noOfLines; x++){
        console.log('');
    }
}

//delay code for suspense
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

//output meal to console
const outputMeal = async () => {


    lineSpace(2);
    console.log('I will now come up with a brilliant new meal idea. Just let me think.');
    lineSpace(1);
    if (!fastText){ await sleep(textSpeed); }
    console.log(".");
    if (!fastText){ await sleep(textSpeed); }
    console.log(".");
    if (!fastText){ await sleep(textSpeed); }
    console.log(".");
    lineSpace(1);
    if (!fastText){ await sleep(textSpeed); }
    console.log('Hmmm, in my expert opinion, I suggest you try the following ingredients...');
    lineSpace(1);
    if (!fastText){ await sleep(textSpeed*2); }
    console.log(`Use ${main} as the main ingredient.`);
    lineSpace(1);
    if (!fastText){ await sleep(textSpeed*2); }
    console.log(`${veg} would make an excellent vegetable accompaniment.`);
    lineSpace(1);
    if (!fastText){ await sleep(textSpeed*2); }
    console.log(`And bring the meal together with some ${sauce}.`);
    lineSpace(1);
    if (!fastText){ await sleep(textSpeed*2); }
    console.log(`Does that sound good? If not just try again for another suggestion!`);
    console.log(`(Don't forget you can select vegetarian options by adding 'veggie' as a command line argument, e.g. node randomMealGenerator.js veggie)`);
    lineSpace(2);
}

//Output meal suggestion
outputMeal();


