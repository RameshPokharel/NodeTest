const _ = require("lodash")

const array=[1,[{mug:"mug"},[4]]];

const ma= _.flattenDeep(array)

console.log(ma)