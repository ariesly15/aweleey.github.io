---
title: CommonJS模块与ES6模块区别
sidebar: auto
---

## CommonJS

1. 对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值。

    ```js
    // b.js
    let count = 1;
    let plusCount = () => {
        count++;
    };
    setTimeout(() => {
        console.log('b.js-1', count);
    }, 1000);
    module.exports = {
        count,
        plusCount
    };

    // a.js
    let mod = require('./b.js');
    console.log('a.js-1', mod.count);
    mod.plusCount();
    console.log('a.js-2', mod.count);
    setTimeout(() => {
        mod.count = 3;
        console.log('a.js-3', mod.count);
    }, 2000);

    // node a.js
    // a.js-1 1
    // a.js-2 1
    // b.js-1 2  // 1秒后
    // a.js-3 3  // 2秒后
    ```

2. 对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。
   
    ```js
    // b.js
    let obj = {
        count: 1
    };
    let plusCount = () => {
        obj.count++;
    };
    setTimeout(() => {
        console.log('b.js-1', obj.count);
    }, 1000);
    setTimeout(() => {
        console.log('b.js-2', obj.count);
    }, 3000);
    module.exports = {
        obj,
        plusCount
    };

    // a.js
    var mod = require('./b.js');
    console.log('a.js-1', mod.obj.count);
    mod.plusCount();
    console.log('a.js-2', mod.obj.count);
    setTimeout(() => {
        mod.obj.count = 3;
        console.log('a.js-3', mod.obj.count);
    }, 2000);

    //   node a.js
    //   a.js-1 1
    //   a.js-2 2
    //   b.js-1 2
    //   a.js-3 3
    //   b.js-2 3
    ```

3. 当使用 require 命令加载某个模块时，就会运行整个模块的代码。
4. 当使用 require 命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS 模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
5. 循环加载时，属于加载时执行。即脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

   ``` js
   // 3, 4, 5可以使用同一个例子说明

    // b.js
    exports.done = false;
    let a = require('./a.js');
    console.log('b.js-1', a.done);
    exports.done = true;
    console.log('b.js-2', '执行完毕');

    // a.js
    exports.done = false;
    let b = require('./b.js');
    console.log('a.js-1', b.done);
    exports.done = true;
    console.log('a.js-2', '执行完毕');

    // c.js
    let a = require('./a.js');
    let b = require('./b.js');

    console.log('c.js-1', '执行完毕', a.done, b.done);

    // node c.js
    // b.js-1 false
    // b.js-2 执行完毕
    // a.js-1 true
    // a.js-2 执行完毕
    // c.js-1 执行完毕 true true
   ```

## ES6 模块

1. ES6 模块中的值属于【动态只读引用】。
2. 对于只读来说，即不允许修改引入变量的值，import 的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到 import 命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
3. 对于动态来说，原始值发生变化，import 加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。
4. 循环加载时，ES6 模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。
   
   ``` js
   // b.js
    export let counter = {
        count: 1
    };
    setTimeout(() => {
        console.log('b.js-1', counter.count);
    }, 1000);

    // a.js
    import { counter } from './b.js';
    counter = {};
    console.log('a.js-1', counter);

    // Syntax Error: "counter" is read-only
    ```


