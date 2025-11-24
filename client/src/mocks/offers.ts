import {FullOffer} from '../types/offer';

const offers: FullOffer[] = [
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b1',
    'title': 'Luxury Apartment in City Center',
    'description': 'A modern and spacious apartment located in the heart of the city. Perfect for couples and small families looking for comfort and convenience.',
    'type': 'apartment',
    'price': 290,
    'images': [
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/room-small.jpg'
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
      'latitude': 48.86261,
      'longitude': 2.352499,
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
      'name': 'Marie',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': true,
    'rating': 4.8,
    'bedrooms': 2,
    'maxAdults': 4
  },
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b2',
    'title': 'Cozy Studio near Eiffel Tower',
    'description': 'Charming studio apartment with a beautiful view, just a short walk from the Eiffel Tower. Ideal for romantic getaways.',
    'type': 'room',
    'price': 180,
    'images': [
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/apartment-01.jpg',
      '/img/room-small.jpg'
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
      'latitude': 48.85861,
      'longitude': 2.354499,
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
      'name': 'Pierre',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.3,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b3',
    'title': 'Modern Loft with City View',
    'description': 'Stylish loft apartment featuring contemporary design and stunning city views. Perfect for urban explorers.',
    'type': 'apartment',
    'price': 320,
    'images': [
      '/img/apartment-02.jpg',
      '/img/apartment-03.jpg',
      '/img/studio-01.jpg',
      '/img/room.jpg',
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
      'latitude': 48.86061,
      'longitude': 2.349499,
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
    'isFavorite': true,
    'rating': 4.9,
    'bedrooms': 1,
    'maxAdults': 3
  },
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b4',
    'title': 'Charming Private Room',
    'description': 'Comfortable private room in a shared apartment. Great for solo travelers or couples on a budget.',
    'type': 'room',
    'price': 120,
    'images': [
      '/img/room-small.jpg',
      '/img/room.jpg',
      '/img/apartment-03.jpg',
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
      'latitude': 48.85461,
      'longitude': 2.348499,
      'zoom': 16
    },
    'goods': [
      'Wi-Fi',
      'Heating',
      'Kitchen access',
      'TV',
      'Laptop friendly',
      'Towels',
      'Breakfast'
    ],
    'host': {
      'isPro': false,
      'name': 'Luc',
      'avatarUrl': '/img/avatar-max.jpg'
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.1,
    'bedrooms': 1,
    'maxAdults': 2
  },
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b5',
    'title': 'Spacious Family Apartment',
    'description': 'Large apartment perfect for families, located in a quiet neighborhood with easy access to all major attractions.',
    'type': 'apartment',
    'price': 450,
    'images': [
      '/img/apartment-03.jpg',
      '/img/apartment-01.jpg',
      '/img/apartment-02.jpg',
      '/img/room.jpg',
      '/img/studio-01.jpg',
      '/img/room-small.jpg'
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
      'latitude': 48.85761,
      'longitude': 2.347499,
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
      'Towels',
      'Parking'
    ],
    'host': {
      'isPro': true,
      'name': 'Claire',
      'avatarUrl': '/img/avatar-angelina.jpg'
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
    'bedrooms': 3,
    'maxAdults': 6
  },
  {
    'id': 'bbb06a0e-3f92-446d-9a68-cb64b5d38e2b6',
    'title': 'Artist Studio with Character',
    'description': 'Unique studio apartment with artistic touches, located in a historic building with plenty of charm.',
    'type': 'apartment',
    'price': 200,
    'images': [
      '/img/studio-01.jpg',
      '/img/room.jpg',
      '/img/apartment-02.jpg',
      '/img/room-small.jpg'
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
      'latitude': 48.85961,
      'longitude': 2.350499,
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
      'isPro': true,
      'name': 'Antoine',
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