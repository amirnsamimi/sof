console.group("stars")

const spaceGenerator = (n, x) => {
  let space = "";

  for (let i = 0; i < x - n / 2; i++) {
    space = space + " ";
  }
  return space;
};

const starGeneraotr = (n, x) => {
  let stars = "";
  stars = stars + spaceGenerator(n, x);
  for (let i = 0; i < n; i++) {
    stars = stars + "*";
  }
  return stars;
};

const rows = (x) => {
  for (let i = 0; i < x; i++) {
    console.log(starGeneraotr(2 * i - 1, x, i));
  }
  for (let i = x; 0 <= i; i--) {
    console.log(starGeneraotr(2 * i - 1, x, i));
  }
};

 rows(9);



 console.groupEnd()
 console.log()
// zweite aufgabe
console.group("plus")

const plusSpaceGenerator = (s) => {
  let space = "";
  for (let i = 1; i <= s; i++) {
    space = space + "_";
  }
  return space;
};

const plusGenerator = (n, s, z) => {
  let pluses = "";
  min = z / 2 - s / 2;
  max = z / 2 + s / 2;
  for (let i = 1; i <= z; i++) {
    if (z === n) {
      pluses = pluses + "+";
    } else if (i > min && i <= max) {
      pluses = pluses + " ";
    } else {
      pluses = pluses + "+";
    }
  }

  return pluses;
};

const plusRows = (x) => {
  for (let i = x; 1 <= i; i--) {
    if (i === 1) {
      console.log(plusGenerator(x * 2, 0, x * 2));
    } else {
      console.log(plusGenerator(i * 2, 2 * x - i * 2, x * 2));
    }
  }
};

 plusRows(24);


 // 
 console.groupEnd()
 console.log()
// driete aufgabe
console.group("circles")

let step = 0;
const charGenerator = (y) => {
  let str = "";
  for (let x = 0; x < 3; x++) {
    str = str + y;
  }
  return str;
};

const circleGenerator = (o) => {
  let circles = "";
  if (step === 0) {
    for (let i = 1; i <= 7; i++) {
      circles = circles + charGenerator("o");
      circles = circles + charGenerator(" ");
    }
  }
  if (step === 1) {
    for (let i = 1; i <= o * 2; i++) {
      circles = circles + "o";
    }
  }
  if (step === 2) {
    for (let i = 1; i <= 7; i++) {
      circles = circles + charGenerator(" ");
      circles = circles + charGenerator("o");
    }
  }
  return circles;
};

const circleRows = (c) => {
  for (let i = 1; i <= c; i++) {
    console.log(circleGenerator(21));
    if (step > 1) {
      step = 0;
    } else {
      step += 1;
    }
  }
};

circleRows(12);

console.groupEnd()
