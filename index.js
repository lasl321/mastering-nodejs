var u = { foo: 'bar' };

console.log(u);
console.dir(u);

console.assert(true, 'foo bar');

// console.log();
console.log(process.version);
console.log(process.installPrefix);
console.log(process.execPath);
console.log(process.platform);
console.log(process.pid);
console.log(process.cwd());
// console.log(process.chdir());
var args = process.argv;
console.log(args, args.length);

process.on('uncaughtException', function(err){
    console.log('got an error: %s', err.message);
    process.exit(1);
});

setTimeout(function(){
    throw new Error('fail');
}, 100);

