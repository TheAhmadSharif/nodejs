var a = require('./module_a');
require('./module_b');


console.log(a.name);
console.log(a.getPrivate());