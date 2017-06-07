//this file isn't transpiled, so most use CommonJS and ES5
//register babel to transpile before out test run
require("babel-register")();

//disable webpack features that Mocha doesn't understand.
require.extensions[".css"] = function(){};
