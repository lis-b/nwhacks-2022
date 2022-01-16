const difficultyStringArray = ["beginner", "intermediate", "advanced"];
const timeStringArray = ["less than 1 hour", "1-2 hours", "2-3 hours", "more than 3 hours"];

class Constants {

    static get difficulties() {
        return difficultyStringArray;
    }

    static get times() {
        return timeStringArray;
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
                "4 tbsp. butter",
                "1 medium onion, finely chopped",
                "2 carrots, peeled and finely chopped",
                "2 stalks celery, finely chopped",
                "Kosher Salt",
                "Freshly ground black pepper",
                "2 cloves garlic, minced",
                "2 tbsp. tomato paste",
                "2 tbsp. all-purpose flour",
                "4 c. seafood or fish stalk",
                "1 1/4 c. dry white wine",
                "1 bay leaf",
                "3 sprigs fresh thyme",
                "1/2 c. heavy cream",
                "1 lb. cook lobster meat, chopped",
                "Finely chopped cives, for serving"],
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

class  {

}

module.exports = {
    Constants:Constants,
    LobsterBisque:LobsterBisque,
}
