const person = {
    name: 'Daniel',
    surname: 'Soto',
    age: 28,
    hobbies: ['soccer', 'gaming'],
    isStudent: false
};

const objectConstuctor = new Object();

const gimli = {
    name: 'Gimli',
    race: 'dwarf',
    weapon: 'axe',
    greet: function () {
        return `Hi, my name is ${this.name}!`;
    }
}

let isEnable = true;
let result = !isEnable ? 'weapon' : 'race';
console.log('gimli weapon', gimli.weapon);
console.log(gimli[result]);
