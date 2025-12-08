import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  // Амстердам
  {
    'id': 'amsterdam-1',
    'title': 'Luxury Apartment in City Center',
    'type': 'apartment',
    'price': 220,
    'previewImage': '/img/1.jpg',
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
    'previewImage': '/img/10.jpg',
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
    'previewImage': '/img/11.jpg',
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

  // Paris
  {
  'id': 'paris-1',
  'title': 'Luxury Apartment near Louvre',
  'type': 'apartment',
  'price': 250,
  'previewImage': '/img/2.jpg',
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
  'isPremium': true,
  'isFavorite': false,
  'rating': 4.9,
},
{
  'id': 'paris-2',
  'title': 'Cozy Studio in Le Marais',
  'type': 'studio',
  'price': 110,
  'previewImage': '/img/21.jpg',
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
  'isPremium': false,
  'isFavorite': true,
  'rating': 4.4,
},
{
  'id': 'paris-3',
  'title': 'Modern Loft near Hôtel de Ville',
  'type': 'apartment',
  'price': 210,
  'previewImage': '/img/22.jpg',
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
  'isPremium': true,
  'isFavorite': false,
  'rating': 4.7,
},
{
  'id': 'paris-4',
  'title': 'Chic Apartment in Île de la Cité',
  'type': 'apartment',
  'price': 180,
  'previewImage': '/img/13.jpg',
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
  'isPremium': false,
  'isFavorite': true,
  'rating': 4.6,
},

  // Cologne
  {
    'id': 'cologne-1',
    'title': 'Modern Apartment near Cathedral',
    'type': 'apartment',
    'price': 140,
    'previewImage': '/img/3.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
  },
  {
    'id': 'cologne-2',
    'title': 'Cozy Room in Old Town',
    'type': 'room',
    'price': 85,
    'previewImage': '/img/5.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.3,
  },
  {
    'id': 'cologne-3',
    'title': 'Spacious Apartment near Rhine',
    'type': 'apartment',
    'price': 170,
    'previewImage': '/img/14.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
  },
  {
    'id': 'cologne-4',
    'title': 'Designer Studio in Belgisches Viertel',
    'type': 'studio',
    'price': 120,
    'previewImage': '/img/20.jpg',
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
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
  },

  // Brussels
  {
    'id': 'brussels-1',
    'title': 'Luxury Apartment near Grand Place',
    'type': 'apartment',
    'price': 160,
    'previewImage': '/img/17.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
  },
  {
    'id': 'brussels-2',
    'title': 'Cozy Studio in Sablon',
    'type': 'studio',
    'price': 95,
    'previewImage': '/img/21.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.2,
  },
  {
    'id': 'brussels-3',
    'title': 'Modern Loft in European Quarter',
    'type': 'apartment',
    'price': 180,
    'previewImage': '/img/apartment-02.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.6,
  },
  {
    'id': 'brussels-4',
    'title': 'Charming Apartment near Atomium',
    'type': 'apartment',
    'price': 130,
    'previewImage': '/img/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.853022,
        'longitude': 4.352522,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.853022,
      'longitude': 4.352522,
      'zoom': 16
    },
    'isPremium': false,
    'isFavorite': false,
    'rating': 4.4,
  },

  // Hamburg
  {
    'id': 'hamburg-1',
    'title': 'Modern Apartment near Elbphilharmonie',
    'type': 'apartment',
    'price': 170,
    'previewImage': '/img/9.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.7,
  },
  {
    'id': 'hamburg-2',
    'title': 'Cozy Room in Sternschanze',
    'type': 'room',
    'price': 90,
    'previewImage': '/img/room.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.3,
  },
  {
    'id': 'hamburg-3',
    'title': 'Spacious Loft in HafenCity',
    'type': 'apartment',
    'price': 200,
    'previewImage': '/img/11.jpg',
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
    'isPremium': true,
    'isFavorite': false,
    'rating': 4.8,
  },
  {
    'id': 'hamburg-4',
    'title': 'Designer Apartment in Eimsbüttel',
    'type': 'apartment',
    'price': 140,
    'previewImage': '/img/20.jpg',
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
    'isPremium': false,
    'isFavorite': true,
    'rating': 4.5,
  },
];
