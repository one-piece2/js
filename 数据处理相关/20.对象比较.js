function isEqule(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) return false;
  for (let k of key1) {
    if (!obj2.hasOwnProperty(k)||!isEqule(obj1[k], obj2[k])) return false;
  }
  return true;
}
