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

module.exports = Constants;
