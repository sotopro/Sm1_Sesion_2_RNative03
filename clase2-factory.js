class TailFactory {
    constructor(props) {
        this.tailLength = props.tailLength;
    }
};

class TorsoFactory {
    constructor(props) {
        this.color = props.color 
    }
};

class HeadFactory {
    constructor(props){
        this.snoutLenth = props.snoutLenth
    }
}

class ReptilePartFactory {
    constructor(type, props) {
        if(type === 'tail') return new TailFactory(props);
        if(type === 'torso') return new TorsoFactory(props);
        if(type === 'head') return new HeadFactory(props);
    }
}
// let registedPartFactories = {};

// registedPartFactories['tail'] = class TailFactory {
//     constructor(props) {
//         this.tailLength = props.tailLength;
//     }
// }
// registedPartFactories['torso'] = class TorsoFactory {
//     constructor(props) {
//         this.color = props.color 
//     }
// };

// registedPartFactories['head'] = 
// class HeadFactory {
//     constructor(props){
//         this.snoutLenth = props.snoutLenth
//     }
// }

// class ReptilePartFactory {
//     constructor(type, props) {
//         return new registedPartFactories[type](props)
//     }
// }

let alligator = {};
let alligatorProps = {
    tailLength: 2.5,
    color: 'green',
    snoutLenth: 1
}

// gets a tail from the tail factory
// alligator.tail = new ReptilePartFactory('tail', alligatorProps);
// alligator.torse = new ReptilePartFactory('torso', alligatorProps);
alligator.head = new ReptilePartFactory('head', alligatorProps);

console.log('aligator', alligator);
