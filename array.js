/* ARRAYS PRACTICE */

/* 
LOOK THROUGH THE DATA PROVIDED IN ./data.JS. YOU'LL SEE THAT IT IS AN ARRAY OF PLAYER OBJECTS.
BELOW ARE SOME PRACTICE PROBLEMS TO HELP YOU REVIEW YOUR JAVASCRIPT SKILLS
*/

const players = [
  {
    id: 1,
    name: "Kobe Bryant",
    team: "Lakers",
    position: "SG",
    status: "retired",
    years_active: "1996 - 2016",
  },
  {
    id: 2,
    name: "Damian Lillard",
    team: "Blazers",
    position: "PG",
    status: "active",
    years_active: "2012 - 2020",
  },
  {
    id: 3,
    name: "Isiah Thomas",
    team: "Pistons",
    position: "PG",
    status: "retired",
    years_active: "1981 - 1994",
  },
  {
    id: 4,
    name: "Michael Jordan",
    team: "Bulls",
    position: "SG",
    status: "retired",
    years_active: "1984 - 2003",
  },
  {
    id: 5,
    name: "Joel Embiid",
    team: "Sixers",
    position: "C",
    status: "active",
    years_active: "2014 - 2020",
  },
  {
    id: 6,
    name: "Lebron James",
    team: "Lakers",
    position: "PF",
    status: "active",
    years_active: "2003 - 2020",
  },
  {
    id: 7,
    name: "Kawhi Leonard",
    team: "Clippers",
    position: "SF",
    status: "active",
    years_active: "2011 - 2020",
  },
  {
    id: 8,
    name: "Giannis Antetokounmpo",
    team: "Bucks",
    position: "PF",
    status: "active",
    years_active: "2012 - 2020",
  },
  {
    id: 9,
    name: "Patrick Ewing",
    team: "Knicks",
    position: "C",
    status: "retired",
    years_active: "1985 - 2002",
  },
  {
    id: 10,
    name: "Larry Bird",
    team: "Celtics",
    position: "SF",
    status: "retired",
    years_active: "1979 - 1992",
  },
  {
    id: 11,
    name: "Shaq Oneal",
    team: "Lakers",
    position: "C",
    status: "retired",
    years_active: "1992 - 2011",
  },
  {
    id: 12,
    name: "Bill Russell",
    team: "Celtics",
    position: "C",
    status: "retired",
    years_active: "1956 - 1969",
  },
  {
    id: 13,
    name: "Steph Curry",
    team: "Warriors",
    position: "PG",
    status: "active",
    years_active: "2009 - 2020",
  },
  {
    id: 14,
    name: "James Harden",
    team: "Rockets",
    position: "PG",
    status: "active",
    years_active: "2009 - 2020",
  },
  {
    id: 15,
    name: "John Wall",
    team: "Wizards",
    position: "PG",
    status: "active",
    years_active: "2010 - 2020",
  },
  {
    id: 16,
    name: "Jimmy Butler",
    team: "Heat",
    position: "SF",
    status: "active",
    years_active: "2011 - 2020",
  },
  {
    id: 17,
    name: "Karl Malone",
    team: "Jazz",
    position: "PF",
    status: "retired",
    years_active: "1985 - 2004",
  },
  {
    id: 18,
    name: "Devin Booker",
    team: "Suns",
    position: "SG",
    status: "active",
    years_active: "2015 - 2020",
  },
  {
    id: 19,
    name: "Jayson Tatum",
    team: "Celtics",
    position: "SF",
    status: "active",
    years_active: "2017 - 2020",
  },
  {
    id: 20,
    name: "Magic Johnson",
    team: "Lakers",
    position: "PG",
    status: "retired",
    years_active: "1979 - 1991",
  },
];

// Task 1

/*
Create a function 'getPlayerById' which takes in two arguments
1. an array
2. the id of a player
This function should then return the following string `${name} is a ${position} for the ${team}`
*/

function getPlayerById(/* code here */) {
  /* code here */
}

/* Uncomment the console.log() to check your work */
// console.log(getPlayerById(players, 16)) // `Jimmy Butler is a SG for the Heat`
// console.log(getPlayerById(players, 1)) // `Kobe Bryant is a SG for the Lakers`
// console.log(getPlayerById(players, 9)) // `Patrick Ewing is a C for the Knicks`

// Taks 2

/* 
Create a function `getPlayersByTeam` that takes in two arguments
1. an array 
2. the name of a team
The function should return a new array with the names of the players for that team
*/

/* Uncomment the console.log() to check your work */
// console.log(getPlayersByTeam(players, 'Lakers')) // ['Kobe Bryant', 'Lebron James', 'Shaq Oneal', 'Magic Johnson']
//console.log(getPlayersByTeam(players, 'Spurs')) // []

// Task 3

/* 
The player with id 7, Kawhi Leonard, has been traded from the 'Clippers' to the 'Magic'. Use an array method to update his team. Use console.log() to check your work
*/

// Task 4

/* 
Create a function 'getPlayersByDraft' that takes in three arguments.
1. an array
2. a minimum draft year
3. a maximum draft year
This function should return the number of players drafted within those years
*/

/* Uncomment the console.log() to check your work */
// console.log(getPlayersByDraft(players, 1994, 2005)) // 2
// console.log(getPlayersByDraft(players, 1951, 1991)) // 7
// console.log(getPlayersByDraft(players, 2008, 2012)) // 5

// Task 5

/* 
Create a function 'addNewPlayer' that takes in
an array of players and a player object. 
This function should add the player to the end of the array
*/

// Task 6

/* 
Uh oh, we forgot to add a player the player with id 0 t
o the beginning of the players array. Use an array method 
to add 'anthony' to the beginning of the array. Use 
console.log to check your work
*/

let anthony = {
  id: 0,
  name: "Anthony Davis",
  team: "Lakers",
  position: "PF",
  status: "active",
  years_active: "2012 - 2020",
};

// Task 7

/* 
create a function called `removePlayer` that takes in two arguments
1. an array
2. the index of a player
This function should remove the player at the given index from the array
*/

/* 
STRETCH GOAL 
create a function called `removePlayerById` that takes in two arguments
1. an array
2. the id of a player
This function should remove the player with the given id from the array
*/
