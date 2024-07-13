const students = [
  {
    name: "Davina J Eskew",
    gender: "famale",
    age: 61,
    courses: ["math", "bio"],
  },
  {
    name: "Jordan M Johnson",
    gender: "male",
    age: 67,
    courses: ["math", "chemistry"],
  },
  {
    name: "James G Carmona",
    gender: "male",
    age: 25,
    courses: ["bio", "computer"],
  },
  {
    name: "Orville S Schuyler",
    gender: "male",
    age: 59,
    courses: ["computer", "bio"],
  },
  {
    name: "Monica H Hill",
    gender: "female",
    age: 37,
    courses: ["computer", "math", "chemistry"],
  },
  {
    name: "Zachary J Hawkins",
    gender: "male",
    age: 34,
    courses: ["bio"],
  },
  {
    name: "Elizabeth J Mercer",
    gender: "female",
    age: 12,
    courses: [],
  },
];

const headGroup = [];
const remainingStudents = [...students];
const getRandomNumber = () => {
  return Math.floor(Math.random() * (remainingStudents.length - 1));
};
const getRandomStudent = () => {
  const randomIndex = getRandomNumber();
  if (randomIndex > -1) {
    const selectedStudents = remainingStudents.splice(randomIndex, 1);
    return selectedStudents[0];
  }
  return {};
};

const grouping = () => {
  const group = [getRandomStudent(), getRandomStudent()];
  headGroup.push(group);
  document.getElementById("result").innerText =
    document.getElementById("result").innerText +
    ">" + group.map(g=>g.name).join(" ,")

};
