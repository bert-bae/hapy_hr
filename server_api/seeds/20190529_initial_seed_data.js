
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('establishment').del()
    .then(function () {
      // Inserts seed entries
      return knex('establishment').insert([
        { 
          id: 1,
          name: "The Fun Club",
          city: "Vancouver",
          province: "BC",
          address_line: "610 Granville Street",
          postal_code: "V1V 1V1",
          description: "Fun club restaurant with drinks and food in a light atmosphere on Granville Street.",
          longitude: "49.285070",
          latitude: "-123.120235"
        },
        { 
          id: 2,
          name: "The Bar Bar",
          city: "Vancouver",
          province: "BC",
          address_line: "920 Burrard Street",
          postal_code: "V1V 1V1",
          description: "Fun bar with drinks. It's clearly just a bar.",
          longitude: "49.281661",
          latitude: "-123.125900"
        },
        { 
          id: 3,
          name: "Food & Drinks",
          city: "Vancouver",
          province: "BC",
          address_line: "198 Main Street",
          postal_code: "V1V 1V1",
          description: "Running out of ideas for descriptions, food and drinks served here.",
          longitude: "49.283184",
          latitude: "-123.120179"
        },
        { 
          id: 4,
          name: "Hangout",
          city: "Vancouver",
          province: "BC",
          address_line: "500 Commercial Street",
          postal_code: "V1V 1V1",
          description: "A place to hang out and meet new people. Drinks on tap are cool and plentiful.",
          longitude: "49.290252",
          latitude: "-123.128666"
        },
        { 
          id: 5,
          name: "Chill Box",
          city: "Vancouver",
          province: "BC",
          address_line: "920 Granville Street",
          postal_code: "V1V 1V1",
          description: "Mostly sea food with wine. Fancy little place to go in the middle of the day.",
          longitude: "49.249268",
          latitude: "-122.900474"
        },
      ]);
    });
};
