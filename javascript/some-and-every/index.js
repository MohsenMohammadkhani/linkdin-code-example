const users = [
  {
    first_name: "Mohsen",
    last_name: "Mohammadkhani",
    age: "28",
    city: "Tehran",
  },
  {
    first_name: "Yasin",
    last_name: "Mohammadi",
    age: "33",
    city: "Tehran",
  },
  {
    first_name: "Maryam",
    last_name: "Rezaei",
    age: "36",
    city: "Karaj",
  },
  {
    first_name: "Mona",
    last_name: "Hassani",
    age: "19",
    city: "Isfahan",
  },
];

const HaveUserLiveInSpecificCity = (city) => {
  return users.some((user) => user.city == city);
};

const checkUsersOlderThanSpecificYear = (age) => {
  return users.every((user) => user.age > age);
};

console.log("all users older than 18 = " + checkUsersOlderThanSpecificYear(18));
console.log("all users older than 30 = " + checkUsersOlderThanSpecificYear(30));
console.log("===================");
console.log(
  "have user live in Isfahan = " + HaveUserLiveInSpecificCity("Isfahan")
);
console.log(
  "have user live in Qazvin = " + HaveUserLiveInSpecificCity("Qazvin")
);
