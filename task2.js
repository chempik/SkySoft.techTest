function deepCopy(obj){
   if (null == obj || "object" != typeof obj){
    return obj;
   }
  var copy = obj.constructor();
  for (var attr in obj) {
    copy[attr] = deepCopy(obj[attr]);
  }
  return copy;
}

const obj1 = {
    foo: 1,
    bar: {
        baz: 2,
        arr: [5, 6, 7] 
    },
};
 
const obj2 = deepCopy(obj1);
 
const tests = [];
obj2.foo++;
obj2.bar.baz++;
obj2.bar.arr[0]++;
obj2.bar.arr[2]--;
 
tests.push(obj1.foo === 1);
tests.push(obj1.bar.baz === 2);
tests.push(obj1.bar.arr[0] === 5);
tests.push(obj1.bar.arr[1] === 6);
tests.push(obj1.bar.arr[2] === 7);
 
tests.push(obj2.foo === 2);
tests.push(obj2.bar.baz === 3);
tests.push(obj2.bar.arr[0] === 6);
tests.push(obj2.bar.arr[1] === 6);
tests.push(obj2.bar.arr[2] === 6);
 
console.log(tests); // all items should be ‘true’
