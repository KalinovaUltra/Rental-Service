import { Review } from "../types/reviews";

export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-04-24',
    user: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4
  },
  {
    id: '2',
    date: '2023-07-15',
    user: {
      name: 'Sophie',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    comment: 'The apartment was fantastic! Great location, clean, and had all the amenities we needed. The host was very responsive and helpful.',
    rating: 5
  },
  {
    id: '3',
    date: '2023-06-20',
    user: {
      name: 'Thomas',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false
    },
    comment: 'Nice place but the Wi-Fi was a bit slow. Otherwise, everything was perfect. Would recommend for short stays.',
    rating: 4
  },
  {
    id: '4',
    date: '2023-05-10',
    user: {
      name: 'Lisa',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true
    },
    comment: 'Amazing view and very comfortable bed. The neighborhood is quiet and safe. Close to public transportation and restaurants.',
    rating: 5
  }
];