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
console.log('function', gimli.greet());
// gimli.weapon = 'sword'
// gimli['race'] = 'elf'
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}`;
}
gimli.parents = false;

console.log('gimli.fight', gimli.fight());

delete gimli.parents;

// Iterate through properties of gimli
for (let key in gimli) {
    console.log(`${key}:`, gimli[key]);
}

console.log('gimli', gimli);