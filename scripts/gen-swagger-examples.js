import fs from "fs";
import YAML from "yaml";
import { faker } from "@faker-js/faker";

const SWAGGER_PATH = "docs/swagger.yaml";

function genLoginExample() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
  };
}

function genRegisterExample() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
    userType: faker.helpers.arrayElement(["normal", "pro"]),
  };
}

function genOfferExample() {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    publishDate: faker.date.recent().toISOString().slice(0, 10),
    city: faker.helpers.arrayElement(["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"]),
    isPremium: faker.datatype.boolean(),
    isFavorite: faker.datatype.boolean(),
    rating: Number(faker.number.float({ min: 1, max: 5, fractionDigits: 1 })),
    type: faker.helpers.arrayElement(["apartment", "house", "room", "hotel"]),
    rooms: faker.number.int({ min: 1, max: 5 }),
    guests: faker.number.int({ min: 1, max: 8 }),
    price: faker.number.int({ min: 50, max: 500 }),
    features: JSON.stringify(['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat', 'Washer', 'Towels', 'Fridge']),
    commentsCount: faker.number.int({ min: 0, max: 50 }),
    latitude: Number(faker.location.latitude()),
    longitude: Number(faker.location.longitude()),
    userId: faker.number.int({ min: 1, max: 10 })
  };
}

function genReviewExample() {
  return {
    text: faker.lorem.paragraph(),
    rating: faker.number.int({ min: 1, max: 5 })
  };
}

try {
  const raw = fs.readFileSync(SWAGGER_PATH, "utf-8");
  const doc = YAML.parse(raw);

  // Пример для /login
  const loginContent = doc?.paths?.["/login"]?.post?.requestBody?.content?.["application/json"];
  if (loginContent) {
    loginContent.example = genLoginExample();
    console.log("Пример для POST /login добавлен");
  }

  // Пример для /register
  const registerContent = doc?.paths?.["/register"]?.post?.requestBody?.content?.["multipart/form-data"];
  if (registerContent) {
    registerContent.example = genRegisterExample();
    console.log(" Пример для POST /register добавлен");
  }

  // Пример для POST /offers
  const offerContent = doc?.paths?.["/offers"]?.post?.requestBody?.content?.["multipart/form-data"];
  if (offerContent) {
    offerContent.example = genOfferExample();
    console.log("Пример для POST /offers добавлен");
  }

  // Пример для POST /comments/{offerId}
  const reviewContent = doc?.paths?.["/comments/{offerId}"]?.post?.requestBody?.content?.["application/json"];
  if (reviewContent) {
    reviewContent.example = genReviewExample();
    console.log(" Пример для POST /comments/{offerId} добавлен");
  }

  fs.writeFileSync(SWAGGER_PATH, YAML.stringify(doc), "utf-8");
  console.log(" Все примеры записаны в", SWAGGER_PATH);

} catch (error) {
  console.error(" Ошибка:", error.message);
}