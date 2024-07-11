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

// دانش‌آموزانی که سنشون کمتر از ۵۰ ساله و شیمی خوندن
const studentsBelow50andChem = students.filter(
  (student) => student.age < 50 && student.courses.includes("chemistry")
);
console.group("Students that are more than 50 and studied Chemistry");
console.log(studentsBelow50andChem);
console.groupEnd();

// دانش آموزانی که مرد هستن و ریاضی خوندن
const studentsMaleandMath = students.filter(
  (student) => student.gender === "male" && student.courses.includes("math")
);
console.group(" Students which are male and studied Math");
console.log(studentsMaleandMath);
console.groupEnd();

// دانش‌آموزانی که سنشون بیشتر از ۴۰ ساله، کامپیوتر خوندن ولی ریاضی نخوندن
const studentsAbove40andComputerButNotMath = students.filter(
  (student) =>
    student.age > 40 &&
    student.courses.includes("computer") &&
    !student.courses.includes("math")
);
console.group("Students that are more than 40 and Computer but not Math");
console.log(studentsAbove40andComputerButNotMath);
console.groupEnd();

// دانش آموزانی که هیچی نخوندن
const studentsStudiedNothing = students.filter(
  (student) => student.courses.length < 1
);
console.group("Students that studied nothing");
console.log(studentsStudiedNothing);
console.groupEnd();

// آیا توی لیست دانش‌آموزان، دانش‌آموزی داریم که اسمش الیزابت باشه؟
let ElizabethInStudents = false;
students.map((student) => {
  if (student.name.includes("Elizabeth") == true) {
    ElizabethInStudents = true;
  }
});
console.group("is Elizabeth in students");
console.log(ElizabethInStudents);
console.groupEnd();

// آیا توی لیست دانش‌آموزان، دانش‌آموزی رو داریم که سنش بیشتر از ۶۰ باشه و مرد باشه؟
let doWeHaveMaleAbove60 = false;
students.map((student) => {
  if (student.gender == "male" && student.age > 60) {
    doWeHaveMaleAbove60 = true;
  }
});
console.group("is Elizabeth in students");
console.log(doWeHaveMaleAbove60);
console.groupEnd();

// درس‌هایی رو که تمام دانش‌آموزان خانوم دارن میخونن رو لیست کنین
const femaleStudying = [];
const femaleStudendsStudying = students
  .filter((student) => student.gender === "female")
  .map((course, index) => femaleStudying.push(...course.courses));
console.group("list of courses taken by females");
console.log(femaleStudying);
console.groupEnd();

const BubbleSort = (input = {}, on) => {
  const data = [...input];
  let timePassed = 0;
  let temp = {};
  const start = new Date();
  data.forEach(() => {
    data.forEach((stu1, i) => {
      if (i + 1 < data.length) {
        if (data[i][on] > data[i + 1][on]) {
          temp = data[i];
          data[i] = data[i + 1];
          data[i + 1] = temp;
          temp = {};
        }
      }
    });
  });

  const end = new Date();
  timePassed = end - start;
  return {
    data: data,
    time: `bubble sort takes ${timePassed / 1000} seconds to sort`,
  };
};
console.group("Sorted List");
console.log(BubbleSort(students, "age"));
console.groupEnd();
