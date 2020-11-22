// 常见的导入方式也有三种
// 1
import { name, age, sayHello } from './modules/foo.js';
// 2
import { fName as name, age, sayHello } from './modules/foo.js';

// 3 
import * as foo from './modules/foo.js'