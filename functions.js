const identity = function (value) {
  return value;
};

const first = function (array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
};

const last = function (array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(Math.max(array.length - n, 0));
  }
};

const each = function (collection, callback) {
  if (Array.isArray(collection)) {
    for (let index = 0; index < collection.length; index++) {
      callback(collection[index], index, collection);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
};

const indexOf = function (array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
};

const map = function (array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
};

const filter = function (array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

const reject = function (array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

const uniq = function (array) {
  const result = [];
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    if (!seen.has(array[i])) {
      seen.add(array[i]);
      result.push(array[i]);
    }
  }

  return result;
};

const reduce = function (collection, callback, initialValue) {
  let accumulator = initialValue;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        accumulator = callback(accumulator, collection[key], key, collection);
      }
    }
  }

  return accumulator;
};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter,
  reject,
  uniq,
  reduce,
};
