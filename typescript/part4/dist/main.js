"use strict";
// 使用class关键字来定义一个类
/*
    对象中主要包含了两个部分：
      属性
      方法
*/
class Person {
    constructor() {
        /*
          直接定义的属性是实例属性，需要通过对象的实例取访问：
              const per = new Person();
              per.name
          使用static开头的属性是静态属性(类属性),可以直接通过类去访问
              static name = 18;
              Person.name
        */
        // 定义实例属性
        this.name = '孙悟空';
        this.age = 18;
        this.name2 = '1';
    }
    // 定义方法
    /*
      如果方法以static开头则方法是类方法，可以直接通过类去调用
      Person.sayAge()
    */
    sayHello() {
        console.log('say hello');
    }
    static sayAge() {
    }
}
// 在属性前使用static关键字可以定义类(静态属性)
Person.height = 1.88;
Person.name3 = '2';
const per = new Person();
console.log(per);
class Dog {
    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中, this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this想新建的对象中添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}
const dog = new Dog('旺财', 13);
const dog2 = new Dog('小黄', 1);
console.log(dog, dog2);
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log(this.name + '11111');
        }
    }
    /*
      Dog extends Animal
        - 此时，Animal---父类 Dog---子类
        - 使用继承后，子类将会拥有父类所有的方法和属性
        - 通过继承可以将多个类中共有的代码写在一个父类中
    */
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
    }
})();
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('1232132');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数调用
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            super.sayHello();
        }
    }
})();
(function () {
    /*
      以abstract开头的类是抽象类
          抽象类和其他类区别不大，只是不能用来创建对象
          抽象类就是专门用来被继承的类
  
          抽象类中可以添加抽象方法
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            // 在类的方法中 super就表示当前类的父类
        }
    }
})();
