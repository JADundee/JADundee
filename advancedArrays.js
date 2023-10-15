// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const exclaim = []
array.forEach(user => {
  let {username} = user
  username = username + "!"
exclaim.push(username)})
console.log(exclaim)

//Create an array using map that has all the usernames with a "? to each of the usernames

const question = array.map(user => {
  let {username} = user
  return username + "?";
})
console.log(question)

//Filter the array to only include users who are on team: red

const teamRedArray = array.filter(group => {
   return group.team === "red"
})
console.log(teamRedArray)

//Find out the total score of all users using reduce

const total = array.reduce((accumulator, user) => {
  return accumulator + user.score
}, 0)
console.log(total)
// (1), what is the value of i?
/* index of the number */
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const bonusArray = array.map(userItems => {
  userItems.items = userItems.items.map(item => {
    return item + "!"
  });
  return userItems;
})
console.log(bonusArray)