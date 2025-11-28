import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  // Амстердам
  {
    'id': 'amsterdam-1',
    'title': 'Luxury Apartment in City Center',
    'type': 'apartment',
    'price': 220,
    'previewImage': '/img/apartment-01.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
  },
  {
    'id': 'amsterdam-2',
    'title': 'Cozy Canal View Studio',
    'type': 'room',
    'price': 120,
    'previewImage': '/img/room.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.3,
  },
  {
    'id': 'amsterdam-3',
    'title': 'Modern Loft near Museum Square',
    'type': 'apartment',
    'price': 190,
    'previewImage': '/img/apartment-02.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
  },
  {
    'id': 'amsterdam-4',
    'title': 'Charming Jordaan Apartment',
    'type': 'apartment',
    'price': 150,
    'previewImage': '/img/apartment-03.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.5,
  },
  {
    'id': 'amsterdam-5',
    'title': 'Designer Studio in De Pijp',
    'type': 'studio',
    'price': 130,
    'previewImage': '/img/room-small.jpg',
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
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.2,
  },
  {
    'id': 'amsterdam-6',
    'title': 'Historic House by the Canal',
    'type': 'house',
    'price': 280,
    'previewImage': '/img/room-small.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.9,
  },

  // Париж
  {
    'id': 'paris-1',
    'title': 'Elegant Parisian Apartment',
    'type': 'apartment',
    'price': 250,
    'previewImage': '/img/apartment-01.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
  },
  {
    'id': 'paris-2',
    'title': 'Montmartre Artist Studio',
    'type': 'studio',
    'price': 110,
    'previewImage': '/img/room.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.4,
  },
  {
    'id': 'paris-3',
    'title': 'Luxury Loft in Le Marais',
    'type': 'apartment',
    'price': 320,
    'previewImage': '/img/apartment-02.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.8575,
      'longitude': 2.355,
      'zoom': 16
    },
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.9,
  },
  {
    'id': 'paris-4',
    'title': 'Charming Saint-Germain Flat',
    'type': 'apartment',
    'price': 180,
    'previewImage': '/img/apartment-03.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.853,
      'longitude': 2.333,
      'zoom': 16
    },
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.6,
  }
];