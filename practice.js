// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(el) {
    if (el % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  var Filtered = _.filter(fruits, function(el) {
    if (el === targetFruit) {
      return el;
    }

  });
  return Filtered;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var Filtered = _.filter(fruits, function(el) {
    if (el[0] === letter) {
      return el;
    }

  });
  return Filtered;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var Filtered = _.filter(desserts, function(el) {
    if (el.type === 'cookie') {
      return el;
    }

  });
  return Filtered;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var total = _.reduce(products, function(acc, el) {
    return acc + Number(el.price.substr(1));

  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  var output = _.reduce(desserts, function(acc, el) {
    if (el.type === 'cake') {
      acc.cake ++;
    } else if (el.type === 'cookie') {
      acc.cookie ++;
    } else if (el.type === 'pie') {
      acc.pie ++;
    } else if (el.type === 'drink') {
      acc.drink ++;
    }
    return acc;
  }, {cake: 0, cookie: 0, pie: 0, drink: 0});
  return output;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var output = _.reduce(movies, function(acc, el) {
    if (el.releaseYear >= 1990 && el.releaseYear <= 2000) {
      acc.push(el.title);
    }
    return acc;
  }, []);
  return output;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var output = _.reduce(movies, function(acc, el) {
    if (el.runtime <= timeLimit) {
      acc = true;
      return true;
    }
    return acc;
  }, false);
  return output;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var output = _.map(fruits, function(el) {
    return el.toUpperCase();
  });
  return output;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var output = _.map(desserts, function(el) {
    if (el.ingredients.includes('flour')) {
      el.glutenFree = false;
    } else {
      el.glutenFree = true;
    }
    return el;
  });
  return output;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  //map array
  var output = _.map(groceries, function(el) {
   // Number(el.price.substr(1)) * 100
   //create new key and value by calculating price - coupon
    var num = Number(el.price.substr(1)) - (coupon * Number(el.price.substr(1)));
    el.salePrice = '$' + Math.round( num * 100) / 100;
    console.log(el);
    return el;
  });
  return output;
};

