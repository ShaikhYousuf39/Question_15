let guestsList: string[] = ["Mehwish","Rohan","Ali"];
let canNotAttend : string = "Rohan";

// console.log(canNotAttend + " " + "can not attend the dinner.")

let newGuest = "Zeeshan";

guestsList [guestsList.indexOf(canNotAttend)] = newGuest;

// console.log(guestsList);

guestsList.map((items) => console.log(` Dear ${items} You Are Invited In My Home For Dinner.`) );