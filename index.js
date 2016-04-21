var buf = new Buffer('…');
console.log(buf.toString());
// => …

var buf = new Buffer('…', 'ascii');
console.log(buf.toString());
// => &

var hello = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(hello);
console.log(hello.toString());

var buf = new Buffer(5);
buf.write('He');
buf.write('l', 2);
buf.write('lo', 3);
console.log(buf.toString());
// => "Hello"


var ellipsis = new Buffer('…', 'utf8');

console.log('… string length: %d', '…'.length);
// => … string length: 1

console.log('… byte length: %d', ellipsis.length);
// => … byte length: 3

console.log(ellipsis);
// => <Buffer e2 80 a6>
