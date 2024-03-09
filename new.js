var guestsList = ["Mehwish", "Rohan", "Ali"];
var canNotAttend = "Rohan";
// console.log(canNotAttend + " " + "can not attend the dinner.")
var newGuest = "Zeeshan";
guestsList[guestsList.indexOf(canNotAttend)] = newGuest;
// console.log(guestsList);
guestsList.map(function (items) { return console.log(" Dear ".concat(items, " You Are Invited In My Home For Dinner.")); });
