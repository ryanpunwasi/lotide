
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ryanthedev/lotide`

**Require it:**

`const _ = require('@ryanthedev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Outputs a console.log message stating if `arr1` and `arr2` are equivalent arrays
* `assertEqual(actual, expected)`: Outputs a console.log message stating if `actual` and `expected` are equal
* `assertObjectsEqual(obj1, obj2)`: Outputs a console.log message stating if `obj1` and `obj2` have the same key-value pairs
* `countLetters.js(string)`: Returns an object with the keys being the letters that occur in `string` and the values being the number of times the letter occurs in `string`
* `countOnly(arr, obj)`: Returns an object containing the counts of everything that obj listed
* `eqArrays(arr1, arr2)`: Returns true if `arr1` and `arr2` are equivalent, returns false if otherwise
* `eqObjects(obj1, obj2)`: Returns true if `obj1` and `obj2` have the same key-value pairs, returns false if otherwise
* `findKey(obj, callback)`: Returns the first key in `obj` for which the `callback` returns a truthy value, returns undefined if no key is found
* `findKeyByValue(obj, value)`: Returns the key in `obj` which has the the value `value`, returns undefined if no key exists
* `flatten(arr)`: Returns a flattened version of `arr` given that `arr` has at most, one level of nesting
* `head(arr)`: Returns the first element in `arr`. If `arr` is empty, returns an empty array
* `letterPosition(string)`: Returns an object where they keys are the letters that occur in `string` and the values are all the indices where each letter is found.
* `map(arr, callback)`: Returns a new array consisting of the values of returned by `callback` on each of the elements in `arr`
* `middle(arr)`: Returns an array consisting of the middle element(s) in `arr`
* `tail(arr)`: Returns an array consisting of the elements in `arr`, excluding the first element
* `takeUntil(arr, callback)`: Returns a slice of `arr` with elements being taken from the beginning until the `callback` returns a truthy value
* `without(source, itemsToRemove)`: Returns a new array with only those elements from `source` that are not present in `itemsToRemove`







