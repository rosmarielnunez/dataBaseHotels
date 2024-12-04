const fs = require('fs');
const { faker } = require('@faker-js/faker');
const NUMBER_OF_HOTELS = 100;

const createLitsHotels = () => {
    const hotels = [];
    for (let id = 0; id < NUMBER_OF_HOTELS; id++) {
        hotels.push({
            id: faker.string.uuid(),
            name: `Hotel ${faker.word.words()}`,
            image: faker.image.urlPlaceholder({ width: 240, height: 180, text: '' }),
            description: faker.lorem.sentence(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            stars: faker.number.int({ min: 1, max: 5 }),
            rate: parseFloat(faker.number.float({ min: 1, max: 5, precision: 0.1 })),
            price: faker.number.float({ min: 100, max: 500 }),
        });
    }
    return hotels;
}

const createDataHotels = () => {
    const data = {
        hotels: createLitsHotels(),
    }
    fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
};

createDataHotels();