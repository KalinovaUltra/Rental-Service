import {FullOffer} from '../types/offer';

const offers: FullOffer[] = [
  {
    'id': 'amsterdam-1',
    'title': 'Luxury Apartment in City Center',
    'description': 'A modern and spacious apartment located in the heart of Amsterdam. Perfect for couples and small families looking for comfort and convenience.',
    'type': 'apartment',
    'price': 220,
    'images': [
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
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
      'avatarUrl': '/img/avatar-angelina.jpg'
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
      '/img/room.jpg',
      '/img/apartment-01.jpg',
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
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
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
      '/img/apartment-03.jpg',
      '/img/room.jpg',
      '/img/apartment-01.jpg',
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
      '/img/studio-01.jpg',
      '/img/room.jpg',
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
      'avatarUrl': '/img/avatar-angelina.jpg'
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
      '/img/room-small.jpg',
      '/img/apartment-01.jpg',
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
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.9,
    'bedrooms': 3,
    'maxAdults': 5
  },
  {
    'id': 'paris-1',
    'title': 'Elegant Parisian Apartment',
    'description': 'Beautiful apartment in the heart of Paris with Eiffel Tower views and luxurious amenities.',
    'type': 'apartment',
    'price': 250,
    'images': [
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg'
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
      'latitude': 48.858844,
      'longitude': 2.294351,
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
      'Balcony'
    ],
    'host': {
      'isPro': true,
      'name': 'Marie',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'paris-2',
    'title': 'Montmartre Artist Studio',
    'description': 'Charming artist studio in the heart of Montmartre with beautiful city views and creative atmosphere.',
    'type': 'studio',
    'price': 110,
    'images': [
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg'
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
      'latitude': 48.886704,
      'longitude': 2.343104,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Coffee machine',
      'TV',
      'Laptop friendly',
      'Towels'
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
  }
];

export {offers};