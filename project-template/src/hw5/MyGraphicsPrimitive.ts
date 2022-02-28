/* Правильно реализовать наследование следующих классов.
Абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства: 
прямоугольная область(2 точки координат (x и y), левая верхняя и правая нижняя), 
описывающая примитив, т.е. область данной фигуры; метод - переместить примитив на заданное смещение (просто число);. 
От него дожен наследоваться абстрактный класс MyAreaPrimitive2D, у которого есть абстрактный метод площадь фигуры. 
От него должны наследоваться класс MyCircle, у него есть свойства: центр окружности и ее радиус, а также должен наследоваться класс MyRectangle с методами: ширина и высота */


abstract class MyGraphicsPrimitive2D {
  abstract x: number;
  abstract y: number;
  abstract shiftArea(x: number): void;
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract getSquare(): number;
}
/* если я верно поняла, то x и y в данном случае точки в системе координат, обозначающие края фигуры. 
То есть для круга центр будет представлять из себя совокупность этих двух точек
А смещение представляет собой сдвиг координат центра по какой-либо из осей или по обеим сразу(что не указано в задаче, но раз число одно, принимаем, что сдвиг по обеим) 
Смещение для круга с известным радиусом - это изменение координат его центра на заданное число*/

class MyCircle extends MyAreaPrimitive2D {
  constructor(
    public x: number,
    public y: number,
    public center: [number, number],
    public radius: number) {
    super();
  }
  getSquare(): number {
    let square: number = (this.radius ** 2) * 3.14
    return square
  }
  shiftArea(shiftnumber: number): void {
    this.center = [this.x + shiftnumber, this.y + shiftnumber]
  }
}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    public x: number,
    public y: number,
    public h: number,
    public b: number) {
    super();
  }

  getSquare(): number {
    let square: number = this.h * this.b
    return square
  }
  shiftArea(shiftnumber: number): void {
    this.x = this.x + shiftnumber;
    this.y = this.y + shiftnumber;
  }
}
