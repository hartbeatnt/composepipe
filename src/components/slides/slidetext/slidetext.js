const slide1text = [
`
Compose should return a function that is 
the composition of a list of functions of 
arbitrary length. Each function is called 
on the return value of the function that 
follows.

You can think of compose as moving right 
to left through its arguments.
`,
`
var greet = function(name) { 
  return 'hi: ' + name;
}

var exclaim = function(statement) { 
  return statement.toUpperCase() + '!';
}

var welcome = compose(greet, exclaim);

welcome('phillip'); //=> 'hi: PHILLIP!'
`]

const slide2text = [
`
var welcome = compose(greet, exclaim);

welcome('phillip')
`,
`
              compose(greet, exclaim);

       ('phillip')
`]

const slide3text = [
`
compose(greet, exclaim)('phillip')
`,
`
greet(exclaim('phillip'))
`
]

const slide4text = ["So how do we code it?"]

const slide5text = [
`
var compose = function() {
  

    
    
  
  

}
`,
`
var compose = function() {
  
  return function(){
    
    
  
  
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(){
    
    
  
  
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(){
    for (var i = args.length-1; i >= 0; i--) {
      
    }
 
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(){
    for (var i = args.length-1; i >= 0; i--) {
      args[i]
    }
    
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(){
    for (var i = args.length-1; i >= 0; i--) {
      args[i]()
    }
  
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(item){
    for (var i = args.length-1; i >= 0; i--) {
      args[i](item)
    }
  
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(item){
    for (var i = args.length-1; i >= 0; i--) {
      item = args[i](item)
    }
  
  }
}
`,
`
var compose = function() {
  var args = Array.from(arguments);
  return function(item){
    for (var i = args.length-1; i >= 0; i--) {
      item = args[i](item);
    }
    return item;
  }
}
`
]

const slide6text = [
`
Pipe composes a series of functions and returns 
the resulting function. Each function is called 
on the return value of the preceding function.

You can think of pipe as moving left to right 
through its arguments.
`
]

const slide7text = [
`
var compose = function() {
  var args = Array.from(arguments);
  return function(item){
    for (var i = args.length-1; i >= 0; i--) {
      item = args[i](item);
    }
    return item;
  }
}
`,
`
var pipe = function() {
  var args = Array.from(arguments);
  return function(item){
    for (var i = 0; i < args.length; i++) {
      item = args[i](item);
    }
    return item;
  }
}
`
]

export {
  slide1text,
  slide2text,
  slide3text,
  slide4text,
  slide5text,
  slide6text,
  slide7text
}