console.log('destructuring');


// Object Destructuring
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// Array Destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

[coffeeType, , priceMedium] = item;

console.log(`A medium ${coffeeType} costs ${priceMedium}`);
