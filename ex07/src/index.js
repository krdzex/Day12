var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold",
    }

};

// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(collection, id, prop, value) {
    // Only change code below this line
    if (prop !== 'tracks' && value !== "") {
        collection[id][prop] = value;
    } else if (prop === "tracks" && collection[id].hasOwnProperty("tracks") === false) {
        collection[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        collection[id][prop].push(value);
    } else if (value === "") {
        delete collection[id][prop];
    }
    return collection;
}
// Only change code above this line
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));
console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
module.exports = updateRecords;