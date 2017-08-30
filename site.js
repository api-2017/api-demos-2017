console.log("You have JavaScript!");
function howManyPets(user) {
  var plural = "s";
  if (user.pets.length === 1) {
    plural = "";
  }
  return user.name + " has " + user.pets.length + " pet" + plural;
}
var user = {
  name: "Karl",
  age: 39,
  pets: ["Hank","Stewie"]
  // TODO: programmatically access pets.length
}
