/*
  As our program grow larger, we will want to put the code in multiple files.
  The bad new is that JavaScript has several module system: Node still uses one called CommonJS, but is converting to 
  the modern standard called ES6, so what we use on the command line is different from what we use in the browser
*/

/*
  Ee Ess
  JavaScript's official name is ECMAScript
  Successive versions of the language are therefore known as ES5, ES6, and so on, except when they're referred to as
  (for example) ES2018
*/

/* 
  Since we're going to build command-line programs before doing anything in the browser, we will introduce Node's module
  system first. We're going to create the utilities.js file
*/

/*
  module.exports = {
    clip: clip
  }

  What's more important assigning an object to module.exports. Only those things named in this object are visible to the
  outside world
  (clip: clip means "associate a reference to the function clip with the string key "clip")
*/

/*
  const utilities = require('./utilities');

  To use our newly-defined module we must require it. For example we can put this in application.js

  require returns the object that was assigned to module.exports, so if we have assigned its result to a variable called
  utilities, we must then call our function as utilities.clip
  We use relative path starting with ./ or ../ to import local files; paths that start with names are taken from installed
  Node libraries
*/