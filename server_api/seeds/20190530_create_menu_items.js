
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_item').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_item').insert([
        {
          id: 1,
          name: "Heineken",
          description: "Beer",
          type: "drink",
          price: "4",
          establishment_id: "1",
          weekday: "7"
        },
        {
          id: 2,
          name: "Heineken",
          description: "Beer",
          type: "drink",
          price: "4",
          establishment_id: "2",
          weekday: "12346",
        },
        {
          id: 3,
          name: "Heineken",
          description: "Beer",
          type: "drink",
          price: "4.50",
          establishment_id: "3",
          weekday: "023456",
        },
        {
          id: 4,
          name: "Heineken",
          description: "Beer",
          type: "drink",
          price: "4",
          establishment_id: "4",
          weekday: "12356",
        },
        {
          id: 5,
          name: "Kroenenberg Blanc",
          description: "Beer",
          type: "drink",
          price: "5",
          establishment_id: "1",
          weekday: "23456"
        },
        {
          id: 6,
          name: "Kroenenberg Blanc",
          type: "drink",
          description: "Beer",
          price: "6",
          establishment_id: "2",
          weekday: "023456",
        },
        {
          id: 7,
          name: "Kroenenberg Blanc",
          type: "drink",
          price: "4",
          description: "Beer",
          establishment_id: "4",
          weekday: "023456"
        },
        {
          id: 8,
          name: "Kroenenberg Blanc",
          type: "drink",
          description: "Beer",
          price: "6",
          establishment_id: "5",
          weekday: "7"
        },
        {
          id: 9,
          name: "Edamame",
          type: "food",
          description: "Little salty green beans",
          price: "4",
          establishment_id: "1",
          weekday: "7"
        },
        {
          id: 10,
          name: "Edamame",
          type: "food",
          description: "Little salty green beans",
          price: "5.50",
          establishment_id: "2",
          weekday: "12356"
        },
        {
          id: 11,
          name: "Edamame",
          type: "food",
          description: "Little salty green beans",
          price: "5",
          establishment_id: "3",
          weekday: "2456"
        },
        {
          id: 12,
          name: "Edamame",
          type: "food",
          description: "Little salty green beans",
          price: "5",
          establishment_id: "4",
          weekday: "02346"
        },
        {
          id: 13,
          name: "Edamame",
          type: "food",
          description: "Little salty green beans",
          price: "6",
          establishment_id: "5",
          weekday: "7",
        },
        {
          id: 14,
          name: "Sandwich w/ Fries",
          type: "food",
          description: "Choice of roast beef, chicken, or veggies.",
          price: "8",
          establishment_id: "1",
          weekday: "023456"
        },
        {
          id: 15,
          name: "Sandwich w/ Fries",
          type: "food",
          description: "Choice of roast beef, chicken, or veggies.",
          price: "10",
          establishment_id: "2",
          weekday: "7"
        },
        {
          id: 16,
          name: "Sandwich w/ Fries",
          type: "food",
          description: "Choice of roast beef, chicken, or veggies.",
          price: "7",
          establishment_id: "3",
          weekday: "12356"
        },
        {
          id: 17,
          name: "Sandwich w/ Fries",
          type: "food",
          description: "Choice of roast beef, chicken, or veggies.",
          price: "5",
          establishment_id: "4",
          weekday: "1356",
        },
        {
          id: 18,
          name: "Sandwich w/ Fries",
          type: "food",
          description: "Choice of roast beef, chicken, or veggies.",
          price: "8",
          establishment_id: "5",
          weekday: "7"
        },
        {
          id: 19,
          name: "Soup of the day",
          type: "food",
          description: "Ask your server for the details.",
          price: "4",
          establishment_id: "1",
          weekday: "23456"
        },
        {
          id: 20,
          name: "Soup of the day",
          type: "food",
          description: "Ask your server for the details.",
          price: "6",
          establishment_id: "3",
          weekday: "12356"
        },
        {
          id: 21,
          name: "Soup of the day",
          type: "food",
          description: "Ask your server for the details.",
          price: "6",
          establishment_id: "4",
          weekday: "7"
        },
        {
          id: 22,
          name: "Soup of the day",
          type: "food",
          description: "Ask your server for the details.",
          price: "8",
          establishment_id: "5",
          weekday: "12356"
        },
        {
          id: 23,
          name: "Rotating Beer",
          type: "drink",
          description: "Ask your server for the details.",
          price: "4.5",
          establishment_id: "1",
          weekday: "7"
        },
        {
          id: 24,
          name: "Rotating Beer",
          type: "drink",
          description: "Ask your server for the details.",
          price: "5",
          establishment_id: "2",
          weekday: "7"
        },
        {
          id: 25,
          name: "Rotating Beer",
          type: "drink",
          description: "Ask your server for the details.",
          price: "5",
          establishment_id: "3",
          weekday: "7"
        },
        {
          id: 26,
          name: "Rotating Beer",
          type: "drink",
          description: "Ask your server for the details.",
          price: "4.5",
          establishment_id: "4",
          weekday: "7"
        },
        {
          id: 27,
          name: "Rotating Beer",
          type: "drink",
          description: "Ask your server for the details. Special craft beers rotating on tap!",
          price: "7",
          establishment_id: "5",
          weekday: "7"
        },
      ]);
    });
};
