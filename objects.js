let superHero = {
    name: 'Iron Man',
    powers: ['Flight', 'Lasers', 'Intellect', 'Money'],
    life: 100,
    power: 20,
    attack: function() {
        console.log(`${this.name} attacks for ${this.power}`);
    },
}

console.log(superHero.name);
console.log(superHero.powers[3]);
console.log(superHero['powers']);
console.log(superHero.powers);

// constructor function

function SuperHero(name, powers, life, attackPower) {
    this.name = name;
    this.powers = powers;
    this.life = life;
    this.attackPower = attackPower;

    this.attack = function(hero) {
        console.log(`${this.name} uses ${this.powers[Math.floor(Math.random() * 3)
            ]} to attack ${hero.name} for ${this.attackPower}`);
        hero.life -= this.attackPower;
        console.log(`${hero.name} has ${hero.life} life left`);
    }

}

SuperHero.prototype.gainLife = function(){ // prototype is used to add a method to the constructor function that is shared by all instances of the constructor function
    this.life += 10;
    console.log(`${this.name} has gained 10 life and now has ${this.life}`);
}

let ironMan = new SuperHero('Iron Man', ['Flight', 'Lasers', 'Money'], 100, 20);
let thanos = new SuperHero('Thanos', ['Punch', 'Snap', 'Body Slam'], 200, 15);

ironMan.attack(thanos);
thanos.attack(ironMan);
ironMan.gainLife();

/////////////// MATH OBJECT

console.log("PI:", Math.PI);
console.log("Round:", Math.round(4.5));
console.log("Round:", Math.round(4.4));
console.log("Ceil:", Math.ceil(4.1));
console.log("Floor:", Math.floor(4.9));
console.log("Pow:", Math.pow(8, 2));
console.log("Abs:", Math.abs(-5));
console.log("Min:", Math.min(0, 150, 30, 20, -8, -200));
console.log("Max:", Math.max(0, 150, 30, 20, -8, -200));
console.log("Random:", Math.random());

///////////// Date Object

// Creating a new Date object with the current date and time
// Format: YYYY-MM-DDTHH:mm:ss.sssZ
// The "T" character separates the date from the time portion of the string.
// The "Z" character is the UTC offset representation
// UTC is used worldwide as the standard time.
//    It does not change with the seasons and is the same everywhere.
let currentDate = new Date();
console.log("Current Date:", currentDate);

// Creating a new Date object with a specific date and time
let specificDate = new Date("2024-02-10T08:00:00");
console.log("Specific Date:", specificDate);

// Accessing date components
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
let day = currentDate.getDate();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();
let millisecond = currentDate.getMilliseconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hour:", hour);
console.log("Minute:", minute);
console.log("Second:", second);
console.log("Millisecond:", millisecond);

// Setting date components
currentDate.setDate(currentDate.getDate() + 7);
console.log("New Date:", currentDate);

currentDate.setMonth(currentDate.getMonth() - 1);
console.log("New Date:", currentDate);

// Creating a timestamp
// getTime() returns the number of milliseconds since January 1, 1970 00:00:00.0
// known as the Unix epoch
let timeStampDate = new Date();
let timestamp = currentDate.getTime();
console.log("Timestamp:", timestamp);

// Converting timestamps to dates
let newDate = new Date(timestamp);
console.log("Date from timestamp:", newDate);


// Getting the time zone offset
// returns the difference between UTC time and local time in minutes
let timeZoneOffset = currentDate.getTimezoneOffset();
console.log("Time Zone Offset (in minutes):", timeZoneOffset);

