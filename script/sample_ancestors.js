let sample_ancestors = {
  core_children: [
    {
      name: 'My Awesome Son',
      birth_date: '2015-07-04',
      sex: 'male',
      place_of_birth: 'Happy Land'
    },
    {
      name: 'My Awesome Daughter',
      birth_date: '2020-05-02',
      sex: 'female',
      place_of_birth: 'Happy Land'
    }
  ],

  parents: [
    {
      name: 'That\'s Me',
      birth_date: '1985-09-12',
      sex: 'male',
      place_of_birth: 'City of Eagles',
      places: ['City of Eagles', 'Happy Land'],
      craft: 'Web-developer',
      parents: [
        {
          name: 'Joe Black',
          birth_date: '1965-12-11',
          sex: 'male',
          place_of_birth: 'Corntown',
          places: ['Corntown', 'City of Eagles'],
          craft: 'Miner',
          parents: [
            {
              name: 'Jack Black',
              birth_date: '1937-02-28',
              sex: 'male',
              place_of_birth: 'Corntown',
              places: ['Corntown'],
              craft: 'Farmer'
            },
            {
              name: 'Melinda Black (Blue)',
              birth_date: '1938-10-14',
              sex: 'female',
              place_of_birth: 'Corntown',
              places: ['Corntown'],
              craft: 'Farmer'
            }
          ]
        },

        {
          name: 'Amanda Black (Brown)',
          birth_date: '1968-01-24',
          sex: 'female',
          place_of_birth: 'New Road',
          places: ['New Road', 'City of Eagles'],
          craft: 'Painter',
          parents: [
            {
              name: 'Richard Brown',
              birth_date: '1941-12-18',
              sex: 'male',
              place_of_birth: 'New Road',
              places: ['New Road'],
              craft: 'Truck driver'
            },
            {
              name: 'Ann Brown (Green)',
              birth_date: '1942-06-09',
              sex: 'female',
              place_of_birth: 'Frogtown',
              places: ['Frogtown', 'New Road'],
              craft: 'Teacher (mathematics)'
            }
          ]
        }
      ]
    },

    {
      name: 'My Awesome Wife',
      birth_date: '1990-03-02',
      sex: 'female',
      place_of_birth: 'City of Eagles',
      places: ['City of Eagles', 'Happy Land'],
      craft: 'Housewife',
      parents: [
        {
          name: 'Frank Lopez',
          birth_date: '1975-05-29',
          sex: 'male',
          place_of_birth: 'City of Eagles',
          places: ['City of Eagles'],
          craft: 'Scientist (geology)',
          parents: [
            {
              name: 'Pedro Lopez',
              birth_date: '1939-08-21',
              sex: 'male',
              place_of_birth: 'Buenos Toros',
              places: ['Buenos Toros', 'Los Gatos', 'City of Eagles'],
              craft: 'Architect'
            },
            {
              name: 'Luciana Lopez (Sanchez)',
              birth_date: '1942-11-02',
              sex: 'female',
              place_of_birth: 'Pueblo de la Pasta',
              places: ['Pueblo de la Pasta', 'Los Gatos', 'City of Eagles'],
              craft: 'Cook'
            }
          ]
        },

        {
          name: 'Helen Lopez (Anderson)',
          birth_date: '1977-12-10',
          sex: 'female',
          place_of_birth: 'New Road',
          places: ['New Road', 'City of Eagles'],
          craft: 'Doctor',
          parents: [
            {
              name: 'Andrew Anderson',
              birth_date: '1943-04-11',
              sex: 'male',
              place_of_birth: 'Saint Paul',
              places: ['Saint Paul'],
              craft: 'Plumber'
            },
            {
              name: 'Ora Anderson (Shermann)',
              birth_date: '1942-12-29',
              sex: 'female',
              place_of_birth: 'Saint Paul',
              places: ['Saint Paul'],
              craft: 'Seamstress'
            }
          ]
        }
      ]
    },
  ]
}
