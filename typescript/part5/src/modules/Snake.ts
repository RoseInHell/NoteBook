// 定义蛇类
class Snake {
  // 表示蛇头的元素
  head: HTMLElement;
  // 蛇的身体
  bodies: HTMLCollection

  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
  }

  // 获取蛇的坐标(蛇头坐标)
  get X() {
    return this.head.offsetLeft;
  }

  // 获取蛇的Y轴坐标
  get Y() {
    return this.head.offsetTop;
  }
}