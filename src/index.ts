class Index {
  private static readonly words = 'hello';

  static sayHello() {
    debugger;
    console.time('say');
    console.log(this.words);
    console.timeEnd('say');
  }
}

Index.sayHello();
