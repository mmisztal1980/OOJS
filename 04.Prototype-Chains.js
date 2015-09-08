var gold = {a: 1};
log(gold.a); // 1;
log(gold.z); // undefined

var blue = extend({}, a);
blue.b = 2;
log(blue.a); // 1
log(blue.b); // 2
log(blue.z); //undefined

var rose = Object.create(gold);
rose.b = 2;
log(rose.a); // 1
log(rose.b); // 2
log(rose.z); // undefined

