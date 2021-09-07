let a = false;

function search(needle, haystack) {
  const arr = Object.values(haystack);
  for (let i = 0; i < arr.length; i += 1) {
    if (needle === arr[i]) {
      a = true;
      return true;
    }
    if (typeof arr[i] === 'object') {
      search(needle, arr[i]);
    }
  }
  return a;
}

// search(5, { a: 3, b: 5, c: 9 }); // true
//
// search("5", { a: 3, b: 5, c: 9 }); // false
//
// search(5, { a: 3, b: { u: 8, 5: 'c', s: 5}, c: 9 }); // true
//
// search(5, { a: 3, b: { u: 8, ‘5’: ‘c’, s: 7}, c: 9 }); // false
//
// search(5, { a: [1, 2, 3, 5, 7, 9], c: 8, s: 6 }); // true
//
// search(5, { a: [1, 2, { s: 4, c: {u: 5}}, ], s: 9 });// true
//
// console.log(search(5, { a: 3, b: { u: 8, 5: 'c', s: 5}, c: 9 }));
