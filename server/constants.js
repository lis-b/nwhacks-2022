///////////////////////////////////////////////////////
///////// Constants for frontend and backend //////////
///////////////////////////////////////////////////////
const difficultyList = ["beginner", "intermediate", "advanced"];
const timeStringList = ["<1 hour", "1-2 hours", "2-3 hours", ">3 hours"];
const ingredientsList = ["apple","bacon","tomato","olives","flour","chocolate chips","egg","seaweed","potato","carrot",
                            "beef","cheese","salmon","lettuce","celery","dry lasagna noodles"];

class Constants {

    static get difficulties() {
        return difficultyList;
    }

    static get times() {
        return timeStringList;
    }
    
    static get ingredients() {
        return ingredientsList;
    }
}
///////////////////////////////////////////////////////


///////// DUMMY DB ENTRIES FOR TESTING ////////////////

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

// class  {

// }

module.exports = {
    Constants:Constants,
    LobsterBisque:LobsterBisque,
    User1:User1,
    User2:User2,

}
