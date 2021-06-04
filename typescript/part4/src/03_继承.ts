(function() {
  
  class Animal{
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log(this.name + '11111')
    }
  }
  /* 
    Dog extends Animal
      - 此时，Animal---父类 Dog---子类
      - 使用继承后，子类将会拥有父类所有的方法和属性
      - 通过继承可以将多个类中共有的代码写在一个父类中
  */
  class Dog extends Animal {
    constructor(name:string, age: number) {
      super(name, age);
    }
  }
})()