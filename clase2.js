const person = {
    name: 'Daniel',
    surname: 'Soto',
    age: 28,
    hobbies: ['soccer', 'gaming'],
    isStudent: false
}; // object literal // keys: // values: 'string' number object arrays boolean function null undefiend 

const objectConstuctor = new Object();

const gimli = {
    name: 'Gimli',
    race: 'dwarf',
    weapon: 'axe',
    greet: function () {
        return `Hi, my name is ${this.name}!`;
    }
};

let isEnable = false;
let result = isEnable ? 'weapon' : 'race';
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
    console.log(`${key.toUpperCase()}:`, gimli[key]);
}
const gimliKeys = Object.keys(gimli);
console.log('gimli', gimli);

console.log('gimliKeys', gimliKeys);

const job = {
    position: 'programmer',
    type: 'hourly',
    isAvailable: true,
    showDetail() {
        const accepting = this.isAvailable ? 'is accepting application' : 'is not currently accepting';
        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
}

// use Object.create to pass properties

const barista = Object.create(job);

barista.position = "barista";
console.log('barista details', barista.position);

const employees = {
    boos: 'Michel',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Pedro'
};

console.log('Object.keys(employees)', Object.keys(employees))
// iterate object keys
const keys = Object.keys(employees).forEach(employee => {
    let value = employees[employee];
    console.log(`${employee}: ${value}`);
})

console.log('employees:', keys);

// initialize an object

const session = {
    id: 1,
    time: `26-July-2021`,
    device: 'Mobile',
    browser: 'Chrome'
};

const values = Object.values(session);

console.log('values session:', values);

// Object entries

const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source',
};

const entries = Object.entries(operatingSystem);

console.log('entries operatingSystem', entries);

const entriesData = entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`)
});

// Object assign
const name = {
    fistName: 'Daniel',
    lastName: 'Soto'
};

const details = {
    job: 'Programmer',
    employer: 'Idat'
};

// merge the objects
// const character = Object.assign(name, details)
const character = {...name, ...details};

console.log('character', character);

// Object Freeze

const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};
// Freeze the object

const newUser = Object.freeze(user);


console.log('newUser', newUser);


// Object seal
const user2 = {
    username: 'AzureDiamond',
    password: 'hunter2'
};
const newUser2 = Object.seal(user2);

newUser2.password = '**********';
newUser2.active = true;

console.log('newUser2', newUser2);

// Object PrototypeOF

const people = ['Daniel', 'Jimmy', 'Roberto', 'Luis'];

console.log('people', Object.getPrototypeOf(people));


const computer = {
    company: 'ASUS',
    type: 'Laptop',
    release: 2021,
    hasMonitor: true,
    hasKeyboard: true,
    colors: [
        {
            type: 'light',
            color: 'blue',
        },
        {
            type: 'dark',
            color: 'blue',
        }
    ],
    memory: '4GB',
    proccesor: 'Intel i7 10700-H'
}

const { company, type, release, hasMonitor, hasKeyboard, colors,memory, proccesor} = computer;

console.log('company', memory)
