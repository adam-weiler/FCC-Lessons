// Setup
var collection = {
	"2548": {
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
	},
	"2468": {
		"album": "1999",
		"artist": "Prince",
		"tracks": [
        "1999",
        "Little Red Corvette"
      ]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": []
	},
	"5439": {
		"album": "ABBA Gold"
	}
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


// Only change code below this line
function updateRecords(id, prop, value) {
	console.clear();
	console.log("Adding these:", id, prop, value);

	if (value) { //There is value, add or update artist.
		if (prop != "tracks") {
			collection[id][prop] = value;
		}

		if (prop == "tracks") { //User wants to add a new track.
			if (!collection[id].hasOwnProperty(prop)) { //Collection doesn't have any tracks yet. Create array.
				collection[id][prop] = []
			}
			collection[id][prop].push(value); //Add song to end of array.
		}
	} else { //Value is empty, delete the property.
		delete collection[id][prop];
	}

	console.log(collection)

	return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "Abba");
