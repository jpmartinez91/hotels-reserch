export const Hotels = [
  {
    id: 1,
    name: 'Lakewood',
    rating: 3,
    country: 'US',
    city: 'Miami',
    address: 'addressA',
    rates: [
      {
        customerType: 1,
        weekDay: 110,
        weekend: 90,
      },
      {
        customerType: 2,
        weekDay: 80,
        weekend: 80,
      },
    ],
  },
  {
    id: 2,
    name: 'Bridgewood',
    rating: 4,
    country: 'US',
    city: 'Miami',
    address: 'addressB',
    rates: [
      {
        customerType: 1,
        weekDay: 160,
        weekend: 60,
      },
      {
        customerType: 2,
        weekDay: 110,
        weekend: 50,
      },
    ],
  },
  {
    id: 3,
    name: 'Ridgewood',
    rating: 5,
    country: 'US',
    city: 'Miami',
    address: 'addressC',
    rates: [
      {
        customerType: 1,
        weekDay: 220,
        weekend: 150,
      },
      {
        customerType: 2,
        weekDay: 50,
        weekend: 40,
      },
    ],
  },
];

export const CostumerType = [
  {
    id: 1,
    name: 'regular',
  },
  {
    id: 2,
    name: 'rewards',
  },
];
