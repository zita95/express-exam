exports.seed = function (knex) {
    return knex('flats').insert([
        {
            id: 1,
            title: 'familyHome',
            price: 25698,
            floorArea: 95,
            country: 'Westeros',
            zip: 555,
            city: 'KingsLanding',
            street: 'FleaBottom'
        },
        {
            id: 2,
            title: 'bungalow',
            price: 28,
            floorArea: 15,
            country: 'PuertoRico',
            zip: 25895,
            city: 'SanJuan',
            street: 'RumStrt.'
        },
        {
            id: 3,
            title: 'flat',
            price: 2820,
            floorArea: 60,
            country: 'Somewhere',
            zip: 6723,
            city: 'Over',
            street: 'TheRainbow'
        },
    ])
}