//Task 1

// const recipe = {
//     title: "Mole",
//     servings: 2,
//     ingredients: ["cumin", "cinnamon", "cocoa"],
//   };

//   console.log(recipe.title);
//   console.log("Servings: " + recipe.servings);
//   console.log("Ingredients:");
//   for (var i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
//   }

//Task 2

// programming.languages.push("Go");

// programming.difficulty = 7;

// delete programming.jokes;

// programming.isFun = true;

// for (let i = 0; i < programming.languages.length; i++) {
//   console.log(programming.languages[i]);
// }

// for (let language of programming.languages) {
//   console.log(language);
// }

// for (let key in programming) {
//   console.log(key);
// }

// for (let key in programming) {
//   console.log(programming[key]);
// }

//Task 3

// console.log("Hello, I'm a penguin and my name is " + myPenguin.character + "!");

// // 21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

// myPenguin.canFly = false;

// // 22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)

// myPenguin.chirp = function () {
//   console.log("CHIRP CHIRP! Is this what penguins sound like?");
// };
// // TO TEST IT, RUN THIS CODE: myPenguin.chirp();

// // 23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way if you change its name later, your method will still work!

// myPenguin.sayHello = function () {
//   console.log("Hello, I'm a penguin and my name is " + this.character + "!");
// };

// // 24. Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)

// myPenguin.sayHello();

// // 25. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

// myPenguin.character = "Penguin McPenguinFace";
// myPenguin.sayHello();

// // 26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

// myPenguin.fly = function () {
//   if (this.canFly) {
//     console.log("I can fly!");
//   } else {
//     console.log("No flying for me!");
//   }
// };

// // 27. Call your penguin's fly() method and make sure it works!

// myPenguin.fly();

// // 28. Change the canFly property to true -- again, without modifying any of your previous code!

// myPenguin.canFly = true;

// // 29. Now call your penguin's fly() method again and make sure it works as expected!

// myPenguin.fly();

// // 30. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

// for (property in myPenguin) {
//   console.log(property);
// }

// // 31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

// for (property in myPenguin) {
//   console.log(myPenguin[property]);
// }

// Task 4

/* Task 1a: write a function to return more menu items with the same format as the items above. */

// function createMenuItem(name, cost, category) {
//     const dinnerPlate = { name: name, price: cost, category: category };
//     return dinnerPlate;
//   }

//   console.log(createMenuItem("aduunii max", 25, "breakfast"));

//Task 5

// function discount(special) {
//   let discountedPrice = 0;
//   if (special === "teacher" || special === "student") {
//     return (discountedPrice = burger.price - (burger.price * 25) / 100);
//   } else {
//     return (discountedPrice = burger.price - (burger.price * 10) / 100);
//   }
// }

// console.log(discount("teacher"));
