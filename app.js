  let a = 0;
  let b = 1;
  let c = number;

  for (let i = c; 1 <= c; i++) {
    for (let n = 1; n <= c; n++) {
      b *= n;
    }
    a += b;
    c--;
    b = 1;
  }
