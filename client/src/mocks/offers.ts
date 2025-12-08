import { FullOffer } from '../types/offer';

const offers: FullOffer[] = [
  {
    'id': 'amsterdam-1',
    'title': 'Luxury Apartment in City Center',
    'description': 'A modern and spacious apartment located in the heart of Amsterdam. Perfect for couples and small families looking for comfort and convenience.',
    'type': 'apartment',
    'price': 220,
    'images': [
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/room.jpg',
      '/img/studio-01.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Laptop friendly',
      'Baby seat',
      'Fridge',
      'Towels'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': '/img/chel1.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'amsterdam-2',
    'title': 'Cozy Canal View Studio',
    'description': 'Charming studio apartment with a beautiful canal view, just a short walk from the city center. Ideal for romantic getaways.',
    'type': 'room',
    'price': 120,
    'images': [
      '/img/chel2.jpg',
      '/img/13.jpg',
      '/img/apartment-02.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367434,
      'longitude': 4.883734,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Hair dryer'
    ],
    'host': {
      'isPro': false,
      'name': 'Max',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.3,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'amsterdam-3',
    'title': 'Modern Loft near Museum Square',
    'description': 'Stylish loft apartment featuring contemporary design and close to major museums. Perfect for urban explorers.',
    'type': 'apartment',
    'price': 190,
    'images': [
      '/img/2.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
      '/img/21.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.357994,
      'longitude': 4.879549,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Laptop friendly',
      'Balcony',
      'Elevator'
    ],
    'host': {
      'isPro': true,
      'name': 'Sophie',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 1,
    'maxAdults': 3
  },
  {
    'id': 'amsterdam-4',
    'title': 'Charming Jordaan Apartment',
    'description': 'Beautiful apartment in the historic Jordaan district with traditional Dutch architecture and cozy atmosphere.',
    'type': 'apartment',
    'price': 150,
    'images': [
      '/img/1.jpg',
      '/img/room.jpg',
      '/img/13.jpg',
      '/img/studio-01.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.379723,
      'longitude': 4.883333,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Essentials'
    ],
    'host': {
      'isPro': false,
      'name': 'Thomas',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.5,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'amsterdam-5',
    'title': 'Designer Studio in De Pijp',
    'description': 'Modern designer studio in the trendy De Pijp neighborhood, known for its vibrant market and cafes.',
    'type': 'studio',
    'price': 130,
    'images': [
      '/img/15.jpg',
      '/img/16.jpg',
      '/img/apartment-02.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.356112,
      'longitude': 4.893611,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Breakfast'
    ],
    'host': {
      'isPro': true,
      'name': 'Lisa',
      'avatarUrl': '/img/chel2.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.2,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'amsterdam-6',
    'title': 'Historic House by the Canal',
    'description': 'Beautiful historic house with canal views, featuring traditional Dutch architecture and modern amenities.',
    'type': 'house',
    'price': 280,
    'images': [
      '/img/18.jpg',
      '/img/19.jpg',
      '/img/apartment-03.jpg',
      '/img/room.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.383057,
      'longitude': 4.883611,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Laptop friendly',
      'Garden',
      'Parking'
    ],
    'host': {
      'isPro': true,
      'name': 'Klaus',
      'avatarUrl': '/img/chel1.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.9,
    'bedrooms': 3,
    'maxAdults': 5
  },

  // Paris
  {
  'id': 'paris-1',
  'title': 'Luxury Apartment near Louvre',
  'description': 'Spacious and elegant apartment just steps away from the Louvre Museum, with views of the Seine river.',
  'type': 'apartment',
  'price': 250,
  'images': [
    '/img/chel1.jpg',
    '/img/11.jpg',
    '/img/12.jpg',
    '/img/room.jpg',
    '/img/studio-01.jpg'
  ],
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.8600, // Лувр/Сена
    'longitude': 2.3400,
    'zoom': 16
  },
  'goods': [
    'Wi-Fi',
    'Heating',
    'Air conditioning',
    'Kitchen',
    'Coffee machine',
    'Dishwasher',
    'Washing machine',
    'TV',
    'Laptop friendly',
    'Balcony',
    'Towels',
    'Hair dryer'
  ],
  'host': {
    'isPro': true,
    'name': 'Marie',
    'avatarUrl': '/img/avatar-angelina.jpg'
  },
  'isPremium': true,
  'isFavorite': false,
  'rating': 4.9,
  'bedrooms': 2,
  'maxAdults': 4
},
{
  'id': 'paris-2',
  'title': 'Cozy Studio in Le Marais',
  'description': 'Charming studio in the historic Le Marais district, known for its cobblestone streets and art galleries.',
  'type': 'studio',
  'price': 110,
  'images': [
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/studio-01.jpg'
  ],
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.8580, // Ле Маре
    'longitude': 2.3550,
    'zoom': 16
  },
  'goods': [
    'Wi-Fi',
    'Heating',
    'Kitchenette',
    'Coffee machine',
    'TV',
    'Laptop friendly',
    'Towels',
    'Hair dryer',
    'Essentials'
  ],
  'host': {
    'isPro': false,
    'name': 'Pierre',
    'avatarUrl': '/img/avatar-max.jpg'
  },
  'isPremium': false,
  'isFavorite': true,
  'rating': 4.4,
  'bedrooms': 1,
  'maxAdults': 2
},
{
  'id': 'paris-3',
  'title': 'Modern Loft near Hôtel de Ville',
  'description': 'Contemporary loft apartment just a short walk from the Paris City Hall, in the heart of the city.',
  'type': 'apartment',
  'price': 210,
  'images': [
    '/img/10.jpg',
    '/img/apartment-03.jpg',
    '/img/6.jpg',
    '/img/room.jpg'
  ],
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.8565, // Ратуша
    'longitude': 2.3522,
    'zoom': 16
  },
  'goods': [
    'Wi-Fi',
    'Heating',
    'Air conditioning',
    'Full kitchen',
    'Coffee machine',
    'Dishwasher',
    'Washing machine',
    'TV',
    'Laptop friendly',
    'Elevator',
    'Towels'
  ],
  'host': {
    'isPro': true,
    'name': 'Claire',
    'avatarUrl': '/img/chel1.jpg'
  },
  'isPremium': true,
  'isFavorite': false,
  'rating': 4.7,
  'bedrooms': 1,
  'maxAdults': 3
},
{
  'id': 'paris-4',
  'title': 'Chic Apartment in Île de la Cité',
  'description': 'Elegant apartment on the historic Île de la Cité island, home to Notre-Dame Cathedral.',
  'type': 'apartment',
  'price': 180,
  'images': [
    '/img/chel1.jpg',
    '/img/11.jpg',
    '/img/19.jpg',
    '/img/studio-01.jpg'
  ],
  'city': {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  'location': {
    'latitude': 48.8550, // Остров Сите
    'longitude': 2.3470,
    'zoom': 16
  },
  'goods': [
    'Wi-Fi',
    'Heating',
    'Kitchen',
    'Coffee machine',
    'TV',
    'Laptop friendly',
    'Towels',
    'Hair dryer',
    'Breakfast included'
  ],
  'host': {
    'isPro': false,
    'name': 'Antoine',
    'avatarUrl': '/img/avatar-max.jpg'
  },
  'isPremium': false,
  'isFavorite': true,
  'rating': 4.6,
  'bedrooms': 1,
  'maxAdults': 2
},

  // Cologne
  {
    'id': 'cologne-1',
    'title': 'Modern Apartment near Cathedral',
    'description': 'Contemporary apartment just steps away from the iconic Cologne Cathedral, featuring stunning views and modern amenities.',
    'type': 'apartment',
    'price': 140,
    'images': [
      '/img/1.jpg',
      '/img/apartment-02.jpg',
      '/img/17.jpg',
      '/img/room.jpg'
    ],
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941278,
      'longitude': 6.958281,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Hair dryer',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Hans',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 1,
    'maxAdults': 3
  },
  {
    'id': 'cologne-2',
    'title': 'Cozy Room in Old Town',
    'description': 'Comfortable room in a traditional German house in the historic Old Town, close to the Rhine river and local breweries.',
    'type': 'room',
    'price': 85,
    'images': [
      '/img/17.jpg',
      '/img/18.jpg',
      '/img/studio-01.jpg'
    ],
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.936621,
      'longitude': 6.952674,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Shared kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Breakfast included'
    ],
    'host': {
      'isPro': false,
      'name': 'Lena',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.3,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'cologne-3',
    'title': 'Spacious Apartment near Rhine',
    'description': 'Large apartment with beautiful views of the Rhine river, perfect for families or groups visiting Cologne.',
    'type': 'apartment',
    'price': 170,
    'images': [
      '/img/21.jpg',
      '/img/20.jpg',
      '/img/room.jpg',
      '/img/1.jpg'
    ],
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932894,
      'longitude': 6.965278,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Baby seat',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Michael',
      'avatarUrl': '/img/chel2.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'cologne-4',
    'title': 'Designer Studio in Belgisches Viertel',
    'description': 'Modern designer studio in the fashionable Belgian Quarter, known for its boutiques, galleries and restaurants.',
    'type': 'studio',
    'price': 120,
    'images': [
      '/img/11.jpg',
      '/img/12.jpg',
      '/img/13.jpg'
    ],
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.940112,
      'longitude': 6.943611,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchenette',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Hair dryer',
      'Bicycle rental'
    ],
    'host': {
      'isPro': true,
      'name': 'Sarah',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
    'bedrooms': 1,
    'maxAdults': 2
  },

  // Brussels
  {
    'id': 'brussels-1',
    'title': 'Luxury Apartment near Grand Place',
    'description': 'Elegant apartment just a short walk from the magnificent Grand Place, featuring classic Belgian architecture with modern comforts.',
    'type': 'apartment',
    'price': 160,
    'images': [
      '/img/apartment-01.jpg',
      '/img/2.jpg',
      '/img/7.jpg',
      '/img/room.jpg'
    ],
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.850346,
        'longitude': 4.351721,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.8476,
      'longitude': 4.3528,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Laptop friendly',
      'Towels',
      'Hair dryer',
      'Chocolate welcome gift'
    ],
    'host': {
      'isPro': true,
      'name': 'Jean',
      'avatarUrl': '/img/chel2.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 1,
    'maxAdults': 3
  },
  {
    'id': 'brussels-2',
    'title': 'Cozy Studio in Sablon',
    'description': 'Charming studio in the historic Sablon district, famous for its antique markets and chocolate shops.',
    'type': 'studio',
    'price': 95,
    'images': [
      '/img/room.jpg',
      '/img/1.jpg',
      '/img/apartment-01.jpg'
    ],
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.850346,
        'longitude': 4.351721,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839268,
      'longitude': 4.356389,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchenette',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Breakfast included',
      'City guide'
    ],
    'host': {
      'isPro': false,
      'name': 'Sophie',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.2,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'brussels-3',
    'title': 'Modern Loft in European Quarter',
    'description': 'Contemporary loft in the European Quarter, close to EU institutions and featuring sleek, modern design.',
    'type': 'apartment',
    'price': 180,
    'images': [
      '/img/apartment-02.jpg',
      '/img/16.jpg',
      '/img/12.jpg',
      '/img/room.jpg'
    ],
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.850346,
        'longitude': 4.351721,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842938,
      'longitude': 4.383365,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Full kitchen',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Office space'
    ],
    'host': {
      'isPro': true,
      'name': 'Luc',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.6,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'brussels-4',
    'title': 'Charming Apartment near Atomium',
    'description': 'Comfortable apartment with views of the iconic Atomium, located in a quiet residential area.',
    'type': 'apartment',
    'price': 130,
    'images': [
      '/img/11.jpg',
      '/img/room.jpg',
      '/img/8.jpg',
      '/img/studio-01.jpg'
    ],
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.850346,
        'longitude': 4.351721,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.894949,
      'longitude': 4.341278,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Parking',
      'Garden access'
    ],
    'host': {
      'isPro': false,
      'name': 'Emma',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
    'bedrooms': 1,
    'maxAdults': 2
  },

  // Hamburg
  {
    'id': 'hamburg-1',
    'title': 'Modern Apartment near Elbphilharmonie',
    'description': 'Stylish apartment with views of the Elbe river and the iconic Elbphilharmonie concert hall.',
    'type': 'apartment',
    'price': 170,
    'images': [
      '/img/apartment-01.jpg',
      '/img/9.jpg',
      '/img/apartment-03.jpg',
      '/img/room.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.543278,
      'longitude': 9.991281,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Kitchen',
      'Coffee machine',
      'Dishwasher',
      'TV',
      'Laptop friendly',
      'Towels',
      'Hair dryer',
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Anna',
      'avatarUrl': '/img/chel2.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 1,
    'maxAdults': 3
  },
  {
    'id': 'hamburg-2',
    'title': 'Cozy Room in Sternschanze',
    'description': 'Comfortable room in the vibrant Sternschanze neighborhood, known for its alternative culture and nightlife.',
    'type': 'room',
    'price': 90,
    'images': [
      '/img/6.jpg',
      '/img/4.jpg',
      '/img/5.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.556621,
      'longitude': 9.972674,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Shared kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Bicycle available',
      'Local tips'
    ],
    'host': {
      'isPro': false,
      'name': 'Paul',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.3,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'hamburg-3',
    'title': 'Spacious Loft in HafenCity',
    'description': 'Large industrial-style loft in the modern HafenCity district, with views of the harbor and contemporary design.',
    'type': 'apartment',
    'price': 200,
    'images': [
      '/img/16.jpg',
      '/img/15.jpg',
      '/img/studio-01.jpg',
      '/img/8.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.542894,
      'longitude': 10.005278,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Air conditioning',
      'Full kitchen',
      'Coffee machine',
      'Dishwasher',
      'Washing machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Parking',
      'Elevator'
    ],
    'host': {
      'isPro': true,
      'name': 'Klaus',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'hamburg-4',
    'title': 'Designer Apartment in Eimsbüttel',
    'description': 'Beautifully designed apartment in the trendy Eimsbüttel district, known for its cafes, shops and green spaces.',
    'type': 'apartment',
    'price': 140,
    'images': [
      '/img/apartment-03.jpg',
      '/img/2.jpg',
      '/img/5.jpg',
      '/img/11.jpg'
    ],
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.570112,
      'longitude': 9.983611,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels',
      'Hair dryer',
      'Garden access',
      'Bicycle storage'
    ],
    'host': {
      'isPro': true,
      'name': 'Julia',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.5,
    'bedrooms': 1,
    'maxAdults': 2
  },
];

export {offers} ;