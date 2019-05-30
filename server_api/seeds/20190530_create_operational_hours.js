
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('operational_hour').del()
    .then(function () {
      // Inserts seed entries
      return knex('operational_hour').insert([
        {
          weekday: 0,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 1,
        },
        {
          weekday: 1,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 1,
        },
        {
          weekday: 2,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 1,
        },
        {
          weekday: 3,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 1,
        },
        {
          weekday: 4,
          start: "9:00pm",
          end: "12:00pm",
          establishment_id: 1,
        },
        {
          weekday: 5,
          start: "9:00pm",
          end: "12:00pm",
          establishment_id: 1,
        },
        {
          weekday: 6,
          start: "12:00pm",
          end: "6:00pm",
          establishment_id: 1,
        }, {
          weekday: 0,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 2
        },
        {
          weekday: 1,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 2
        },
        {
          weekday: 2,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 2
        },
        {
          weekday: 3,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 2
        },
        {
          weekday: 4,
          start: "12:00pm",
          end: "5:00pm",
          establishment_id: 2
        },
        {
          weekday: 5,
          start: "9:00pm",
          end: "12:00pm",
          establishment_id: 2
        },
        {
          weekday: 6,
          start: "12:00pm",
          end: "6:00pm",
          establishment_id: 2
        },
        {
          weekday: 0,
          start: "2:00pm",
          end: "5:00pm",
          establishment_id: 3
        },
        {
          weekday: 1,
          start: "2:00pm",
          end: "5:00pm",
          establishment_id: 3
        },
        {
          weekday: 2,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 3
        },
        {
          weekday: 3,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 3
        },
        {
          weekday: 4,
          start: "9:00pm",
          end: "1:00am",
          establishment_id: 3
        },
        {
          weekday: 4,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 3
        },
        {
          weekday: 5,
          start: "9:00pm",
          end: "1:00am",
          establishment_id: 3
        },
        {
          weekday: 5,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 3
        },
        {
          weekday: 6,
          start: "12:00pm",
          end: "6:00pm",
          establishment_id: 3
        },
        {
          weekday: 0,
          start: "2:00pm",
          end: "5:00pm",
          establishment_id: 4
        },
        {
          weekday: 1,
          start: "2:00pm",
          end: "5:00pm",
          establishment_id: 4
        },
        {
          weekday: 2,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 4
        },
        {
          weekday: 3,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 4
        },
        {
          weekday: 4,
          start: "9:00pm",
          end: "1:00am",
          establishment_id: 4
        },
        {
          weekday: 4,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 4
        },
        {
          weekday: 5,
          start: "9:00pm",
          end: "1:00am",
          establishment_id: 4
        },
        {
          weekday: 5,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 4
        },
        {
          weekday: 6,
          start: "12:00pm",
          end: "6:00pm",
          establishment_id: 4
        },
        {
          weekday: 0,
          start: "2:00pm",
          end: "5:00pm",
          establishment_id: 5
        },
        {
          weekday: 1,
          start: "2:00pm",
          end: "5:00pm",
          establishment_id: 5
        },
        {
          weekday: 2,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 5
        },
        {
          weekday: 3,
          start: "10:00am",
          end: "3:00pm",
          establishment_id: 5
        },
        {
          weekday: 4,
          start: "9:00pm",
          end: "1:00am",
          establishment_id: 5
        },
        {
          weekday: 4,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 5
        },
        {
          weekday: 5,
          start: "9:00pm",
          end: "1:00am",
          establishment_id: 5
        },
        {
          weekday: 5,
          start: "12:00pm",
          end: "3:00pm",
          establishment_id: 5
        },
        {
          weekday: 6,
          start: "12:00pm",
          end: "6:00pm",
          establishment_id: 5
        },
      ]);
    });
};
