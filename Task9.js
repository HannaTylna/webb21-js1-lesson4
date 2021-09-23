const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: [
			"https://www.devtopics.com/best-programming-jokes/",
			"https://www.hongkiat.com/blog/programming-jokes/",
		]
};

function getLanguageAtIndex(programming, index){
    return programming.languages[index]
}
console.log(getLanguageAtIndex(programming, 2))