class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  toString () {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

const a = new Point(10, 20)
console.log(a.toString())
