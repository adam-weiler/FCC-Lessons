//Setup
var contacts = [
	{
		"firstName": "Akira",
		"lastName": "Laine",
		"number": "0543236543",
		"likes": ["Pizza", "Coding", "Brownie Points"]
    },
	{
		"firstName": "Harry",
		"lastName": "Potter",
		"number": "0994372684",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
    },
	{
		"firstName": "Sherlock",
		"lastName": "Holmes",
		"number": "0487345643",
		"likes": ["Intriguing Cases", "Violin"]
    },
	{
		"firstName": "Kristian",
		"lastName": "Vos",
		"number": "unknown",
		"likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
	// Only change code below this line
	console.clear();
	console.log("Check out: " + name + " - " + prop)

	for (var x = 0; x < contacts.length; x++) { //Runs through length of array.
		if (contacts[x].firstName == name) { //Checks if current contact is the same as that name.
			if (contacts[x][prop]) { //Checks if that property exists.
				return (contacts[x][prop]);
			} else { //The property does not exist.
				//console.log("whahuht")
				return "No such property";
			}
			return (contacts[x][prop]);
		}
	}
	return "No such contact"; //Ran through array and name does not exist.
	// Only change code above this line
}

// Change these values to test your function
console.log("End result:", lookUpProfile("Sherlock", "likes"));
