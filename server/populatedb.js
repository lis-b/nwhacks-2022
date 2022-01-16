#!/usr/bin/env node

const User = require("./models/user.js");
const Recipe = require("./models/recipe.js");
const Database = require("./database.js");

// Test users and recipes
const Constants = require("./constants.js");

// Recipes
class LobsterBisque {
    static get recipe(){
        return {
            name: "Lobster Bisque",
            time: 1,
            difficulty: 1,
            description: "a nice soup",
            ingredients: [
                {ingredient: "butter",quantity:"4 tbsp"},
                {ingredient: "onion", quantity: "1, finely chopped"},
                {ingredient: "carrots", quantity: "2, peeled and chopped"},
                {ingredient: "celery", quantity: "2 stalks, finely chopped"},
                {ingredient: "salt", quantity: "to taste"},
                {ingredient: "pepper", quantity: "to taste"},
                {ingredient: "garlic", quantity: "2 cloves"},
                {ingredient: "tomato paste", quantity: "2 tbsp"},
                {ingredient: "all purpose flour", quantity: "2 tbsp"},
                {ingredient: "fish stalk", quantity: "4 cups"},
                {ingredient: "wine", quantity: "1 1/4 cups, must be dry white"},
                {ingredient: "bay leaf", quantity: "1"},
                {ingredient: "thyme", quantity: "3 sprigs"},
                {ingredient: "heavy cream", quantity: "1/2 cup"},
                {ingredient: "lobster meat", quantity: "1 lb cooked"},
                {ingredient: "chives", quantity: "to taste"}
            ],
            steps: [
                "In a large, heavy pot over medium heat, heat butter. Add onion, carrots, and celery and cook until soft, about 7 minutes. Season with salt and pepper, then stir in garlic and tomato paste. Cook until garlic is fragrant and tomato paste coats vegetables, about 2 minutes. Sprinkle over flour and cook, 1 minute more.",
                "Pour in seafood stock and wine, then stir in bay leaf and thyme. Reduce heat and let simmer until liquid is reduced and flavors meld, stirring occasionally, 30 minutes.",
                "Remove bay leaf and thyme and purée with an immersion blender until very smooth. Return to medium-low heat and stir in heavy cream and lobster meat, cooking just until warm, about 5 minutes.",
                "Garnish with chives before serving."],
            rating: [34,2],
            country: "France",
        }
    }   
}

class BLT {
    static get recipe() {
        return {
            name: "Simple BLT",
            time: 0,
            difficulty: 0,
            description: "A classic bacon, lettuce, and tomato sandwich that's easy and delicious to make!",
            ingredients: [
                {ingredient: "bread", quantity: "2 slices"},
                {ingredient: "bacon", quantity: "4 slices"},
                {ingredient: "lettuce", quantity: "3 leaves"},
                {ingredient: "tomato", quantity: "2 slices"},
                {ingredient: "mayonnaise", quantity: "1 tbsp."}
            ],
            steps: [
                "Cook the slices of bacon in a large skillet over medium-high heat until the bacon reaches a desired crispiness.",
                "Spread 1 tbsp. on one slice of bread. On the other slice of bread, arrange the bacon, lettuce, tomato slices in your desired order." +
                 "Combine the two slices of bread together to create your B. L. T. sandwich!"
            ],
            rating: [53, 9],
            country: "United States",
        };
    }
}

class Cookies {
    static get recipe() {
        return {
            name: "Chocolate Chip Cookies",
            time: 1,
            difficulty: 0,
            description: "Yummy, chewy and simple chocolate cookies that anyone can make!",
            ingredients: [
                {ingredient: "butter", quantity: "1 cup"},
                {ingredient: "sugar", quantity: "1 cup"},
                {ingredient: "eggs", quantity: "2"},
                {ingredient: "vanilla extract", quantity: "1 tbsp."},
                {ingredient: "baking sode", quantity: "1 tsp."},
                {ingredient: "hot water", quantity: "2 tsp."},
                {ingredient: "flour", quantity: "3 cups"},
                {ingredient: "chocolate chips", quantity: "2 cups"},
            ],
            steps: [
                "Preheat your oven to 175 degrees C (350 degrees F).",
                "Let the butter soften and whisk it together with the sugar until the mixture is smooth." +
                 "After mixing, mix in the eggs one at a time. Also mix the vanilla extract with the mixture." +
                 "Dissolve the baking soda and salt into the hot water. Add dissolved solution to your mixed batter." +
                 "Stir in the flour and chocolate chip until smooth. Place spoonfuls of your batter on ungreased pans or baking trays.",
                 "Once your oven is done preheating, bake your cookies for about 10 minutes or whenever the edges seem nicely browned and crisp."
            ],
            rating: [22,0],
            country: "Canada",
        };
    }
}

class GrilledCheese {
    static get recipe() {
        return {
            name: "Grilled Cheese",
            time: 0,
            difficulty: 0,
            description: "Simple homemade grilled cheese.",
            ingredients: [
                {ingredient: "butter", quantity: "1 tbsp."},
                {ingredient: "bread", quantity: "2 slices"},
                {ingredient: "cheese", quantity: "1 slice"},
            ],

            steps: [
                "Spread butter on one side of both slices of bread, place the cheese between" +
                 "the two slices of bread, and place the grilled cheese on a pan with the sides" +
                 "with butter on the outside.",

                "Turn on the stove and put it on medium heat. Wait for one side to turn into a" +
                  "golden brown and flip the grilled cheese on its other side.",

                "Wait for the other side to turn golden brown. Be careful not to wait too long for" +
                "the second side since it takes much shorter to cook than the first side since the pan is already hot."
            ],

            rating: [5, 9],
            country: "United States"
        };
    }
}

class Onigiri {
    static get recipe() {
        return {
            name: "Onigiti (Japanese Rice Balls)",
            time: 0,
            difficulty: 0,
            description: "Traditional Japanese rice balls that are super simple to make!",
            ingredients: [
                {ingredient: "rice", quantity: "1 bowl"},
                {ingredient: "nori seaweed", quantity: "1 sheet"},
                {ingredient: "salt", quantity: "1 tsp."},
            ],
            steps: [
                "Make freshly cooked rice and let it cool down slightly before making onigiri.",
                "Dampen your hand with water and salt to prevent rice from sticking to your hands while flavouring the onigiri.",
                "Press the rice gently to form the rice into a triangle.",
                "Place the slice of nori on the bottom of the onigiri and wrap the onigiri with it."
            ],
            rating: [14, 2],
            country: "Japan"
        };
    }
}

class PotatoSalad {
    static get recipe() {
        return {
            name: "Potato Salad",
            time: 1,
            difficulty: 1,
            description: "A nice and refreshing potato salad with egg and celery!",
            ingredients: [
                {ingredient: "eggs", quantity: "3"},
                {ingredient: "potatoes", quantity: "4"},
                {ingredient: "sugar", quantity: "1 tsp."},
                {ingredient: "salt", quantity: "2 tsp."},
                {ingredient: "mayonnaise", quantity: "1 cup"},
                {ingredient: "celery", quantity: "1 stock"},
                {ingredient: "vinegar", quantity: "2 tbsp."},
            ],
            steps: [
                "Peel the potatoes and cut them into bite-sized pieces. Fill a saucepan with water" +
                 "and place over medium heat. Boil the chopped potatoes to a boil. Lower the flame" +
                 "and cook the potatoes until they are soft. Drain the water and let the potatoes cool.",

                 "Slice the celery into thin pieces.",

                 "In a deep saucepan, boil the eggs in water over medium heat. When boiled, keep the eggs under running cold water.",

                 "Thinly slice the celery.",

                 "Mix the mayonnaise, celery, sugar, vinegar, and salt in a bowl. Then evenly mix in the potato, celery, and eggs."
            ],
            rating: [20, 8],
            country: "Mexico"
        };
    }
}

class OvenToast {
    static get recipe() {
        return {
            name: "Oven Toast",
            difficulty: 0,
            time: 0,
            description: "Who said you can't make toast in an oven?",
            ingredients: [
                {ingredient: "bread", quantity: "2 slices"},
            ],
            steps: [
                "Preheat the oven to 175 degrees C (350 degrees F).",
                "Place bread in the oven",
                "Bake for 4 minutes. Flip the bread over and bake the other side."
            ],
            rating: [1, 18],
            country: "United States"
        };
    }
}

class Lasagna {
    static get recipe() {
        return {
            name: "Lasagna",
            time: 2,
            difficulty: 2,
            description: "A common Italian meal that is homemade! This recipe is not for the faint of heart.",
            ingredients: [
                {ingredient: "tomato sauce", quantity: "2 cans"},
                {ingredient: "onion", quantity: "1 cup"},
                {ingredient: "ground beef", quantity: "1 lb"},
                {ingredient: "garlic", quantity: "2 cloves"},
                {ingredient: "water", quantity: "1 cup"},
                {ingredient: "sugar", quantity: "2 tbsp."},
                {ingredient: "dry lasagna noodles", quantity: "1 package"},
                {ingredient: "cheese", quantity: "1 cup"},
                {ingredient: "salt", quantity: "2 tsp."},
            ],
            steps: [
                "On medium heat, cook beef, onion and garlic until browned." +
                "Stir in tomato sauce and water. Incorporate seasoning into the pan." +
                "Simmer with the pan covered for around 1.5 hours. Remember to stir occasionally.",

                "Mix water with a few pinches of salt and bring to a boil. Cook the lasagna noodles" +
                "for around 8 minutes. Drain the noodles. Rise with cold water.",

                "Preheat the oven to 190 degrees C (375 degrees F).",

                "In a baking dish, start assembling the lasagna. Spread 1 cup of the meat sauce at the" +
                "bottom of the dish. Then spread a layer of lasagna noodles over the sauce. Sprinkle with" +
                "grated cheese. Repeat this layering process with the remaining ingredients.",

                "Spray foil with cooking spray and cover the baking dish with the foil.",

                "Bake the assembled dish in the oven for 30 minutes. Remove the foil and bake for another 30 minutes." +
                "Cool 15 minutes before serving."
            ],
            rating: [419, 66],
            country: "Italy"
        };
    }
}

// Users
class User1 {
    static get user() {
        return {
            username: "pat123",
            email: "pat@cool_walrus_chef.com",
            password: "12345",
            first_name: "Pat",
            last_name: "Applebees",
        }
    }
}

class User2 {
    static get user() {
        return {
            username: "bonjour_croissant",
            email: "baker123@bakery.fr",
            password: "baguette",
            first_name: "Geraldine",
            last_name: "Louise",
        }
    }
}

var recipies = [
    LobsterBisque.recipe,
    BLT.recipe,
    Cookies.recipe,
    GrilledCheese.recipe,
    Onigiri.recipe,
    PotatoSalad.recipe,
    OvenToast.recipe,
    Lasagna.recipe
];

var users = [
    User1.user,
    User2,user
];

// Setup the database
require('dotenv').config();
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.qw0sk.mongodb.net/recipe_db?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Delete all recipies from the database
Database.deleteMany(Recipe, {}).then((result) => {
    console.log(`Deleted ${result} recipies from the database`);

    // Insert all recipies into the database
    Database.insert(recipies);
});

// Delete all users from the database
Database.deleteMany(User, {}).then((result) => {
    console.log(`Deleted ${result} users from the database`);
    Database.insert(users);
});
