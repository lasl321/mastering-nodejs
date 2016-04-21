var EventEmitter = require('events').EventEmitter;

function Dog(name) {
    this.name = name;
    EventEmitter.call(this);
}

console.log(Dog.prototype);

Dog.prototype.__proto__ = EventEmitter.prototype;

var simon = new Dog('simon');

simon.on('bark', function(){
    console.log(this.name + ' barked');
});


setInterval(function(){
    simon.emit('bark');
}, 500);
